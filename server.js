const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();

const PORT = 3000;

// ======================================================
// MIDDLEWARE
// ======================================================

app.use(cors());
app.use(express.json());


// ======================================================
// FOLDERS
// ======================================================

const uploadsFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsFolder)) {
    fs.mkdirSync(uploadsFolder);
}


// ======================================================
// USERS FILE
// ======================================================

const usersFile = path.join(__dirname, "users.json");

if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, "[]");
}


// ======================================================
// OTP STORAGE
// ======================================================

// OTPs are stored temporarily in server memory.
//
// IMPORTANT:
// This is suitable for a prototype.
// If the server is restarted, all OTPs disappear.

const otpStore = new Map();


// ======================================================
// VERIFIED TOKEN STORAGE
// ======================================================

// After successful OTP verification,
// the server creates a temporary verification token.

const verifiedTokens = new Map();


// ======================================================
// OTP EXPIRY
// ======================================================

// 10 minutes exactly

const OTP_EXPIRY_MS = 10 * 60 * 1000;


// ======================================================
// PROFILE PHOTO STORAGE
// ======================================================

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, uploadsFolder);

    },

    filename: function (req, file, cb) {

        const extension = path.extname(file.originalname);

        const uniqueName =
            "profile-" +
            Date.now() +
            extension;

        cb(null, uniqueName);

    }

});


const upload = multer({

    storage: storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    },

    fileFilter: function (req, file, cb) {

        if (file.mimetype.startsWith("image/")) {

            cb(null, true);

        } else {

            cb(new Error("Only image files are allowed."));

        }

    }

});


// ======================================================
// SEND / GENERATE OTP
// ======================================================

app.post("/api/send-otp", function (req, res) {

    try {

        const mobile = String(req.body.mobile || "").trim();


        // Validate mobile number

        if (!/^[6-9][0-9]{9}$/.test(mobile)) {

            return res.status(400).json({

                success: false,

                message:
                    "Please enter a valid 10-digit Indian mobile number."

            });

        }


        // Generate a random 6-digit OTP

        const otp =
            crypto.randomInt(100000, 1000000).toString();


        // OTP expires after exactly 10 minutes

        const expiresAt =
            Date.now() + OTP_EXPIRY_MS;


        // Store OTP

        otpStore.set(mobile, {

            otp: otp,

            expiresAt: expiresAt

        });


        // ==================================================
        // PROTOTYPE ONLY
        // ==================================================

        console.log("");
        console.log("======================================");
        console.log("        SPORTIFY OTP");
        console.log("======================================");
        console.log("Mobile : +91" + mobile);
        console.log("OTP    : " + otp);
        console.log("Expires: 10 minutes");
        console.log("======================================");
        console.log("");


        res.json({

            success: true,

            message:
                "OTP generated successfully.",

            otp: otp

        });

    } catch (error) {

        console.error("SEND OTP ERROR:", error);

        res.status(500).json({

            success: false,

            message: "Server error while generating OTP."

        });

    }

});


// ======================================================
// VERIFY OTP
// ======================================================

app.post("/api/verify-otp", function (req, res) {

    try {

        const mobile =
            String(req.body.mobile || "").trim();

        const otp =
            String(req.body.otp || "").trim();


        // Check mobile

        if (!/^[6-9][0-9]{9}$/.test(mobile)) {

            return res.status(400).json({

                success: false,

                message: "Invalid mobile number."

            });

        }


        // Check OTP format

        if (!/^[0-9]{6}$/.test(otp)) {

            return res.status(400).json({

                success: false,

                message: "OTP must contain exactly 6 digits."

            });

        }


        // Find stored OTP

        const record = otpStore.get(mobile);


        if (!record) {

            return res.status(400).json({

                success: false,

                message:
                    "No OTP found. Please request a new OTP."

            });

        }


        // ==================================================
        // CHECK EXPIRY
        // ==================================================

        if (Date.now() > record.expiresAt) {

            // Delete expired OTP

            otpStore.delete(mobile);


            return res.status(400).json({

                success: false,

                message:
                    "OTP has expired. Please request a new OTP."

            });

        }


        // ==================================================
        // CHECK OTP
        // ==================================================

        // Allow generated OTP or master demo OTP 123456
        if (record.otp !== otp && otp !== "123456") {

            return res.status(400).json({

                success: false,

                message:
                    "Incorrect OTP. Please try again."

            });

        }


        // ==================================================
        // OTP IS CORRECT
        // ==================================================

        // Remove OTP so it cannot be reused

        otpStore.delete(mobile);


        // Create secure temporary verification token

        const verificationToken =
            crypto.randomBytes(32).toString("hex");


        // Token also expires after 10 minutes

        verifiedTokens.set(

            verificationToken,

            {

                mobile: mobile,

                expiresAt:
                    Date.now() + OTP_EXPIRY_MS

            }

        );


        console.log("");
        console.log("======================================");
        console.log("      MOBILE NUMBER VERIFIED");
        console.log("======================================");
        console.log("Mobile : +91" + mobile);
        console.log("======================================");
        console.log("");


        res.json({

            success: true,

            message:
                "Mobile number verified successfully.",

            verificationToken:
                verificationToken

        });

    } catch (error) {

        console.error("VERIFY OTP ERROR:", error);

        res.status(500).json({

            success: false,

            message:
                "Server error while verifying OTP."

        });

    }

});


// ======================================================
// SAVE USER / REGISTER
// ======================================================

app.post(
    "/api/register",
    upload.single("profilePhoto"),
    function (req, res) {

        try {

            const fullName =
                String(req.body.fullName || "").trim();

            const city =
                String(req.body.city || "").trim();

            const state =
                String(req.body.state || "").trim();

            const mobile =
                String(req.body.mobile || "").trim();

            const gender =
                String(req.body.gender || "").trim();


            // ==================================================
            // VERIFICATION TOKEN
            // ==================================================

            const verificationToken =
                req.headers["x-verification-token"];


            if (!verificationToken) {

                // Delete uploaded photo if one was uploaded

                if (req.file) {

                    fs.unlinkSync(req.file.path);

                }


                return res.status(401).json({

                    success: false,

                    message:
                        "Mobile number is not verified."

                });

            }


            // Find verification token

            const verification =
                verifiedTokens.get(verificationToken);


            if (!verification) {

                if (req.file) {

                    fs.unlinkSync(req.file.path);

                }


                return res.status(401).json({

                    success: false,

                    message:
                        "Verification expired or invalid. Please verify your mobile number again."

                });

            }


            // ==================================================
            // CHECK TOKEN EXPIRY
            // ==================================================

            if (Date.now() > verification.expiresAt) {

                verifiedTokens.delete(verificationToken);


                if (req.file) {

                    fs.unlinkSync(req.file.path);

                }


                return res.status(401).json({

                    success: false,

                    message:
                        "Verification has expired. Please verify your mobile number again."

                });

            }


            // ==================================================
            // CHECK MOBILE MATCH
            // ==================================================

            if (verification.mobile !== mobile) {

                if (req.file) {

                    fs.unlinkSync(req.file.path);

                }


                return res.status(401).json({

                    success: false,

                    message:
                        "Verified mobile number does not match."

                });

            }


            // ==================================================
            // VALIDATE USER INFORMATION
            // ==================================================

            if (
                !fullName ||
                !city ||
                !state ||
                !mobile ||
                !gender
            ) {

                if (req.file) {

                    fs.unlinkSync(req.file.path);

                }


                return res.status(400).json({

                    success: false,

                    message:
                        "Required information is missing."

                });

            }


            // Validate mobile number again

            if (!/^[6-9][0-9]{9}$/.test(mobile)) {

                if (req.file) {

                    fs.unlinkSync(req.file.path);

                }


                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid mobile number."

                });

            }


            // ==================================================
            // PROFILE PHOTO
            // ==================================================

            let profilePhoto = null;


            if (req.file) {

                profilePhoto =
                    "uploads/" + req.file.filename;

            }


            // ==================================================
            // CREATE USER OBJECT
            // ==================================================

            const user = {

                fullName: fullName,

                city: city,

                state: state,

                mobile: mobile,

                gender: gender,

                profilePhoto: profilePhoto

            };


            // ==================================================
            // READ EXISTING USERS
            // ==================================================

            const usersData =
                fs.readFileSync(usersFile, "utf8");

            const users =
                JSON.parse(usersData);


            // ==================================================
            // ADD NEW USER
            // ==================================================

            users.push(user);


            // ==================================================
            // SAVE USERS
            // ==================================================

            fs.writeFileSync(

                usersFile,

                JSON.stringify(users, null, 2)

            );


            // ==================================================
            // TOKEN USED SUCCESSFULLY
            // ==================================================

            // Delete token so it cannot be reused

            verifiedTokens.delete(verificationToken);


            console.log("");
            console.log("======================================");
            console.log("       SPORTIFY USER REGISTERED");
            console.log("======================================");
            console.log("Name   :", fullName);
            console.log("Mobile :", mobile);
            console.log("City   :", city);
            console.log("State  :", state);
            console.log("Gender :", gender);
            console.log("======================================");
            console.log("");


            // ==================================================
            // SUCCESS RESPONSE
            // ==================================================

            res.status(201).json({

                success: true,

                message:
                    "Registration details stored successfully."

            });

        } catch (error) {

            console.error("REGISTER ERROR:", error);


            // If something goes wrong after photo upload,
            // remove the uploaded photo.

            if (req.file) {

                try {

                    if (fs.existsSync(req.file.path)) {

                        fs.unlinkSync(req.file.path);

                    }

                } catch (deleteError) {

                    console.error(
                        "PHOTO DELETE ERROR:",
                        deleteError
                    );

                }

            }


            res.status(500).json({

                success: false,

                message:
                    "Server error while saving registration."

            });

        }

    }
);


// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, function () {

    console.log("");
    console.log("======================================");
    console.log("       SPORTIFY BACKEND SERVER");
    console.log("======================================");
    console.log(
        `SPORTIFY backend running at http://localhost:${PORT}`
    );
    console.log("======================================");
    console.log("");

});