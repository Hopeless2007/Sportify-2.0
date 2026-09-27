// ======================================================
// SPORTIFY - MAIN JAVASCRIPT
// Registration + OTP + Supabase + Existing User Login
// ======================================================

console.log("SPORTIFY SCRIPT IS WORKING");


// ======================================================
// GLOBAL VARIABLES
// ======================================================

const BACKEND_URL = "https://sportify-2-0.onrender.com";

let currentStep = 1;
const totalSteps = 7;

// Registration OTP
let otpVerified = false;
let verificationToken = null;
let otpTimerInterval = null;

const OTP_EXPIRY_SECONDS = 10 * 60;


// Existing user login
let existingUser = null;
let loginOtpVerified = false;
let loginOtpTimerInterval = null;


// ======================================================
// STEP NAVIGATION
// ======================================================

function showStep(stepNumber) {

    console.log("SHOWING STEP:", stepNumber);

    // Hide all registration steps
    document.querySelectorAll(".step").forEach(step => {
        step.style.display = "none";
    });

    // Show requested step
    const step = document.getElementById(`step${stepNumber}`);

    if (step) {
        step.style.display = "block";
    }

    // Update current step
    currentStep = stepNumber;

    // Update step counter
    const currentStepElement =
        document.getElementById("currentStep");

    if (currentStepElement) {
        currentStepElement.textContent = stepNumber;
    }

    // Update progress bar
    const progressBar =
        document.getElementById("progressBar");

    if (progressBar) {
        const progress =
            (stepNumber / totalSteps) * 100;

        progressBar.style.width = `${progress}%`;
    }
}


// ======================================================
// NEXT STEP
// ======================================================

function nextStep() {

    console.log("NEXT STEP CLICKED");
    console.log("CURRENT STEP:", currentStep);

    if (!validateStep(currentStep)) {
        return;
    }

    if (currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}


// ======================================================
// PREVIOUS STEP
// ======================================================

function previousStep() {

    console.log("PREVIOUS STEP CLICKED");

    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}


// ======================================================
// STEP VALIDATION
// ======================================================

function validateStep(stepNumber) {

    // ------------------------------------------
    // STEP 1 - NAME
    // ------------------------------------------

    if (stepNumber === 1) {

        const name =
            document.getElementById("name");

        if (!name || name.value.trim() === "") {

            alert("Please enter your full name.");

            if (name) {
                name.focus();
            }

            return false;
        }
    }


    // ------------------------------------------
    // STEP 2 - STATE
    // ------------------------------------------

    if (stepNumber === 2) {

        const state =
            document.getElementById("state");

        if (!state || state.value === "") {

            alert("Please select your state.");

            if (state) {
                state.focus();
            }

            return false;
        }
    }


    // ------------------------------------------
    // STEP 3 - CITY
    // ------------------------------------------

    if (stepNumber === 3) {

        const city =
            document.getElementById("city");

        if (!city || city.value.trim() === "") {

            alert("Please enter your city.");

            if (city) {
                city.focus();
            }

            return false;
        }
    }


    // ------------------------------------------
    // STEP 4 - MOBILE
    // ------------------------------------------

    if (stepNumber === 4) {

        const mobile =
            document.getElementById("mobile");

        if (!mobile) {
            return false;
        }

        const mobileNumber =
            mobile.value.trim();

        const mobilePattern =
            /^[6-9][0-9]{9}$/;

        if (!mobilePattern.test(mobileNumber)) {

            alert(
                "Please enter a valid 10-digit Indian mobile number."
            );

            mobile.focus();

            return false;
        }
    }


    // ------------------------------------------
    // STEP 5 - GENDER
    // ------------------------------------------

    if (stepNumber === 5) {

        const gender =
            document.getElementById("gender");

        if (!gender || gender.value === "") {

            alert("Please select your gender.");

            return false;
        }
    }


    // ------------------------------------------
    // STEP 6 - PROFILE PHOTO
    // ------------------------------------------

    if (stepNumber === 6) {

        // Profile photo is optional.
        // Nothing is required here.
        return true;
    }


    // ------------------------------------------
    // STEP 7 - OTP
    // ------------------------------------------

    if (stepNumber === 7) {

        // OTP is handled separately by verifyOTP()
        return true;
    }


    return true;
}


// ======================================================
// GENDER SELECTION
// ======================================================

function selectGender(button, gender) {

    console.log("GENDER SELECTED:", gender);

    // Remove selected state from all gender cards
    document
        .querySelectorAll(".gender-card")
        .forEach(card => {
            card.classList.remove("selected");
        });

    // Select clicked card
    if (button) {
        button.classList.add("selected");
    }

    // Store gender in hidden input
    const genderInput =
        document.getElementById("gender");

    if (genderInput) {
        genderInput.value = gender;
    }
}


// ======================================================
// PROFILE PHOTO
// ======================================================

function initializeProfilePhoto() {

    const profilePhoto =
        document.getElementById("profilePhoto");

    const profileImage =
        document.getElementById("profileImage");

    const profilePlaceholder =
        document.getElementById("profilePlaceholder");


    if (!profilePhoto) {
        return;
    }


    profilePhoto.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            return;
        }

        console.log("PROFILE PHOTO SELECTED:", file.name);


        // Create temporary preview URL
        const imageURL =
            URL.createObjectURL(file);


        if (profileImage) {

            profileImage.src = imageURL;

            profileImage.style.display = "block";
        }


        if (profilePlaceholder) {

            profilePlaceholder.style.display = "none";
        }

    });
}


// ======================================================
// SEND REGISTRATION OTP
// ======================================================

async function sendOTP() {

    console.log("SEND OTP RUNNING");


    const mobileInput =
        document.getElementById("mobile");

    if (!mobileInput) {
        console.error("Mobile input not found.");
        return;
    }


    const mobile =
        mobileInput.value.trim();


    // Validate mobile
    const mobilePattern =
        /^[6-9][0-9]{9}$/;


    if (!mobilePattern.test(mobile)) {

        alert(
            "Please enter a valid 10-digit Indian mobile number."
        );

        mobileInput.focus();

        return;
    }


    try {

        console.log(
            "Sending OTP for mobile:",
            mobile
        );


        const response =
            await fetch(
                `${BACKEND_URL}/api/send-otp`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        mobile: mobile
                    })
                }
            );


        const result =
            await response.json();


        console.log(
            "SEND OTP RESPONSE:",
            result
        );


        if (!response.ok || !result.success) {

            alert(
                result.message ||
                "Failed to send OTP."
            );

            return;
        }


        // ------------------------------------------
        // Show OTP area
        // ------------------------------------------

        const otpArea =
            document.getElementById("otpArea");

        const sendOtpBtn =
            document.getElementById("sendOtpBtn");

        const otpMobileDisplay =
            document.getElementById(
                "otpMobileDisplay"
            );


        if (otpArea) {
            otpArea.style.display = "block";
        }


        if (sendOtpBtn) {
            sendOtpBtn.style.display = "none";
        }


        if (otpMobileDisplay) {
            otpMobileDisplay.textContent = mobile;
        }


        // Reset OTP state
        otpVerified = false;
        verificationToken = null;


        // Clear old OTP
        const otpInput =
            document.getElementById("otp");

        if (otpInput) {
            otpInput.value = "";
            otpInput.focus();
        }


        // Start timer
        startOTPTimer();


        if (result.otp) {
            if (otpInput) {
                otpInput.value = result.otp;
            }
            alert(
                "✅ OTP sent successfully!\n\n" +
                `[DEMO MODE]\nYour OTP is: ${result.otp}\n\n(It has also been auto-filled for you!)`
            );
        } else {
            alert(
                "OTP sent successfully!\n\n" +
                "For this prototype, check your backend logs for the OTP."
            );
        }

    }
    catch (error) {

        console.error(
            "SEND OTP ERROR:",
            error
        );


        alert(
            "Could not connect to the OTP server.\n\n" +
            "Make sure your backend is running with:\n" +
            "node server.js"
        );
    }
}


// ======================================================
// VERIFY REGISTRATION OTP
// ======================================================

async function verifyOTP() {

    console.log("VERIFY OTP RUNNING");


    const mobileInput =
        document.getElementById("mobile");

    const otpInput =
        document.getElementById("otp");


    if (!mobileInput || !otpInput) {

        console.error(
            "Mobile or OTP input not found."
        );

        return;
    }


    const mobile =
        mobileInput.value.trim();

    const otp =
        otpInput.value.trim();


    // Validate OTP
    if (!/^[0-9]{6}$/.test(otp)) {

        alert(
            "Please enter the 6-digit OTP."
        );

        otpInput.focus();

        return;
    }


    try {

        console.log(
            "Verifying OTP:",
            otp
        );


        const response =
            await fetch(
                `${BACKEND_URL}/api/verify-otp`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        mobile: mobile,
                        otp: otp
                    })
                }
            );


        const result =
            await response.json();


        console.log(
            "VERIFY OTP RESPONSE:",
            result
        );


        if (!response.ok || !result.success) {

            alert(
                result.message ||
                "Invalid or expired OTP."
            );

            return;
        }


        // ------------------------------------------
        // OTP VERIFIED
        // ------------------------------------------

        otpVerified = true;

        verificationToken =
            result.verificationToken;


        console.log(
            "OTP VERIFIED"
        );

        console.log(
            "VERIFICATION TOKEN:",
            verificationToken
        );


        // Stop timer
        clearOTPTimer();


        // Hide verify button
        const verifyOtpBtn =
            document.getElementById(
                "verifyOtpBtn"
            );

        if (verifyOtpBtn) {
            verifyOtpBtn.style.display = "none";
        }


        alert(
            "Mobile number verified successfully!"
        );


        // ------------------------------------------
        // Automatically finish registration
        // ------------------------------------------

        finishRegistration();

    }
    catch (error) {

        console.error(
            "VERIFY OTP ERROR:",
            error
        );


        alert(
            "Could not connect to the OTP server."
        );
    }
}


// ======================================================
// OTP TIMER
// ======================================================

function startOTPTimer() {

    clearOTPTimer();


    const timerElement =
        document.getElementById("otpTimer");

    const resendButton =
        document.getElementById("resendOtpBtn");


    let remainingSeconds =
        OTP_EXPIRY_SECONDS;


    if (resendButton) {
        resendButton.style.display = "none";
    }


    function updateTimer() {

        const minutes =
            Math.floor(
                remainingSeconds / 60
            );


        const seconds =
            remainingSeconds % 60;


        if (timerElement) {

            timerElement.textContent =
                `OTP expires in: ${minutes}:${seconds
                    .toString()
                    .padStart(2, "0")}`;
        }


        if (remainingSeconds <= 0) {

            clearOTPTimer();


            if (timerElement) {

                timerElement.textContent =
                    "OTP expired.";
            }


            if (resendButton) {

                resendButton.style.display =
                    "block";
            }

            return;
        }


        remainingSeconds--;
    }


    updateTimer();


    otpTimerInterval =
        setInterval(
            updateTimer,
            1000
        );
}


// ======================================================
// CLEAR OTP TIMER
// ======================================================

function clearOTPTimer() {

    if (otpTimerInterval) {

        clearInterval(
            otpTimerInterval
        );

        otpTimerInterval = null;
    }
}


// ======================================================
// FINISH REGISTRATION
// ======================================================

async function finishRegistration() {

    console.log(
        "FINISH REGISTRATION RUNNING"
    );


    // ------------------------------------------
    // Security check
    // ------------------------------------------

    if (!otpVerified || !verificationToken) {

        alert(
            "Please verify your mobile number first."
        );

        return;
    }


    // ------------------------------------------
    // Get registration data
    // ------------------------------------------

    const name =
        document.getElementById("name")
            ?.value
            .trim();


    const state =
        document.getElementById("state")
            ?.value
            .trim();


    const city =
        document.getElementById("city")
            ?.value
            .trim();


    const mobile =
        document.getElementById("mobile")
            ?.value
            .trim();


    const gender =
        document.getElementById("gender")
            ?.value
            .trim();


    console.log(
        "REGISTRATION DATA:",
        {
            name,
            state,
            city,
            mobile,
            gender
        }
    );


    // ------------------------------------------
    // Validate all required data
    // ------------------------------------------

    if (
        !name ||
        !state ||
        !city ||
        !mobile ||
        !gender
    ) {

        alert(
            "Some registration information is missing."
        );

        console.error(
            "Missing registration data:",
            {
                name,
                state,
                city,
                mobile,
                gender
            }
        );

        return;
    }


    // ------------------------------------------
    // Save to Supabase
    // ------------------------------------------

    try {

        console.log(
            "Saving registration to Supabase..."
        );


        const {
            data,
            error
        } = await supabaseClient
            .from("profiles")
            .insert({

                full_name: name,

                state: state,

                city: city,

                phone: mobile,

                gender: gender

            })
            .select();


        if (error) {

            console.error(
                "SUPABASE INSERT ERROR:",
                error
            );


            alert(
                "Registration could not be saved.\n\n" +
                error.message
            );

            return;
        }


        // ==================================================
        // SAVE CURRENT USER FOR SPORTIFY APP
        // ==================================================

        const registeredUser = {
            id: (data && data[0] && data[0].id) ? data[0].id : mobile,
            name: name,
            phone: mobile,
            city: city,
            state: state,
            gender: gender,
            bio: "",
            role: "",
            badges: [],
            gallery: [],
            stats: {
                posts: 0,
                followers: 0,
                following: 0,
                matches: 0,
                trophies: 0
            }
        };

        localStorage.setItem(
            "sportify_registered_user",
            JSON.stringify(registeredUser)
        );

        console.log(
            "SPORTIFY REGISTERED USER SAVED:",
            registeredUser
        );

        // ==================================================
        // UPDATE SUCCESS SCREEN
        // ==================================================

        // IMPORTANT:
        // These IDs match your CURRENT index.html:
        //
        // summaryName
        // summaryLocation
        // summaryGender


        const summaryName =
            document.getElementById(
                "summaryName"
            );


        const summaryLocation =
            document.getElementById(
                "summaryLocation"
            );


        const summaryGender =
            document.getElementById(
                "summaryGender"
            );


        if (summaryName) {

            summaryName.textContent =
                name;
        }


        if (summaryLocation) {

            summaryLocation.textContent =
                `${city}, ${state}`;
        }


        if (summaryGender) {

            summaryGender.textContent =
                gender;
        }


        // ==================================================
        // SHOW SUCCESS SCREEN
        // ==================================================

        console.log(
            "NOW SHOWING SUCCESS SCREEN"
        );


        // Hide registration steps
        document
            .querySelectorAll(".step")
            .forEach(step => {

                step.style.display = "none";

            });


        // Hide progress bar
        const progressContainer =
            document.querySelector(
                ".progress-container"
            );


        if (progressContainer) {

            progressContainer.style.display =
                "none";
        }


        // Hide step counter
        const stepCounter =
            document.querySelector(
                ".step-counter"
            );


        if (stepCounter) {

            stepCounter.style.display =
                "none";
        }


        // Hide already registered section
        const alreadyRegistered =
            document.querySelector(
                ".already-registered"
            );


        if (alreadyRegistered) {

            alreadyRegistered.style.display =
                "none";
        }


        // Show success screen
        const successScreen =
            document.getElementById(
                "successScreen"
            );


        if (successScreen) {

            successScreen.style.display =
                "block";

        } else {

            console.error(
                "SUCCESS SCREEN NOT FOUND!"
            );

            alert(
                "Registration saved, but success screen could not be found."
            );

            return;
        }


        console.log(
            "SUCCESS SCREEN IS NOW VISIBLE"
        );


        // Save basic user information locally
        // for the app page
        localStorage.setItem(
            "sportifyUserName",
            name
        );

        localStorage.setItem(
            "sportifyMobile",
            mobile
        );

        localStorage.setItem(
            "sportifyUserCity",
            city
        );

        localStorage.setItem(
            "sportifyUserState",
            state
        );

        localStorage.setItem(
            "sportifyUserGender",
            gender
        );


        alert(
            "Your registration details have been saved successfully!"
        );

    }
    catch (error) {

        console.error(
            "REGISTRATION ERROR:",
            error
        );


        alert(
            "Something went wrong while saving your registration."
        );
    }
}


// ======================================================
// EXISTING USER LOGIN
// ======================================================

function showExistingUserLogin() {

    console.log(
        "OPENING EXISTING USER LOGIN"
    );


    // Hide registration form
    const formCard =
        document.querySelector(
            ".form-card"
        );


    if (formCard) {

        formCard.style.display =
            "none";
    }


    // Hide progress
    const progressContainer =
        document.querySelector(
            ".progress-container"
        );


    if (progressContainer) {

        progressContainer.style.display =
            "none";
    }


    // Hide already registered section
    const alreadyRegistered =
        document.querySelector(
            ".already-registered"
        );


    if (alreadyRegistered) {

        alreadyRegistered.style.display =
            "none";
    }


    // Show login screen
    const loginScreen =
        document.getElementById(
            "existingLoginScreen"
        );


    if (loginScreen) {

        loginScreen.style.display =
            "flex";
    }
}


// ======================================================
// SEND LOGIN OTP
// ======================================================

async function sendLoginOTP() {

    console.log(
        "SEND LOGIN OTP RUNNING"
    );


    const mobileInput =
        document.getElementById(
            "loginMobile"
        );


    if (!mobileInput) {

        console.error(
            "loginMobile input not found."
        );

        return;
    }


    const mobile =
        mobileInput.value.trim();


    const mobilePattern =
        /^[6-9][0-9]{9}$/;


    if (!mobilePattern.test(mobile)) {

        alert(
            "Please enter a valid 10-digit Indian mobile number."
        );

        mobileInput.focus();

        return;
    }


    try {

        // ------------------------------------------
        // Check Supabase
        // ------------------------------------------

        console.log(
            "Checking registered user:",
            mobile
        );


        const {
            data,
            error
        } = await supabaseClient
            .from("profiles")
            .select(
                "id, full_name, phone, city, state, gender, bio, role, badges, username, primary_sport"
            )
            .eq(
                "phone",
                mobile
            )
            .maybeSingle();


        if (error) {

            console.error(
                "SUPABASE LOGIN SEARCH ERROR:",
                error
            );


            alert(
                "Could not check your registration.\n\n" +
                error.message
            );

            return;
        }


        // ------------------------------------------
        // User does not exist
        // ------------------------------------------

        if (!data) {

            console.log(
                "USER NOT FOUND"
            );


            alert(
                "This mobile number is not registered with SPORTIFY."
            );

            return;
        }


        // ------------------------------------------
        // User found
        // ------------------------------------------

        existingUser = data;


        console.log(
            "EXISTING USER FOUND:",
            existingUser
        );


        // ------------------------------------------
        // Send OTP
        // ------------------------------------------

        const response =
            await fetch(
                `${BACKEND_URL}/api/send-otp`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        mobile: mobile
                    })
                }
            );


        const result =
            await response.json();


        console.log(
            "LOGIN OTP RESPONSE:",
            result
        );


        if (!response.ok || !result.success) {

            alert(
                result.message ||
                "Failed to send login OTP."
            );

            return;
        }


        // Show OTP area
        const loginOtpArea =
            document.getElementById(
                "loginOtpArea"
            );


        const sendLoginOtpBtn =
            document.getElementById(
                "sendLoginOtpBtn"
            );


        if (loginOtpArea) {

            loginOtpArea.style.display =
                "block";
        }


        if (sendLoginOtpBtn) {

            sendLoginOtpBtn.style.display =
                "none";
        }


        // Reset OTP
        loginOtpVerified = false;


        const loginOtp =
            document.getElementById(
                "loginOtp"
            );


        if (loginOtp) {

            loginOtp.value = "";

            loginOtp.focus();
        }


        // Start timer
        startLoginOTPTimer();


        if (result.otp) {
            if (loginOtp) {
                loginOtp.value = result.otp;
            }
            alert(
                "✅ Login OTP sent successfully!\n\n" +
                `[DEMO MODE]\nYour OTP is: ${result.otp}\n\n(It has also been auto-filled for you!)`
            );
        } else {
            alert(
                "Login OTP sent successfully!\n\n" +
                "For this prototype, check your backend logs for the OTP."
            );
        }

    }
    catch (error) {

        console.error(
            "LOGIN OTP ERROR:",
            error
        );


        alert(
            "Could not connect to the OTP server."
        );
    }
}


// ======================================================
// VERIFY LOGIN OTP
// ======================================================

async function verifyLoginOTP() {

    console.log(
        "VERIFY LOGIN OTP RUNNING"
    );


    if (!existingUser) {

        alert(
            "Please request an OTP first."
        );

        return;
    }


    const mobileInput =
        document.getElementById(
            "loginMobile"
        );


    const otpInput =
        document.getElementById(
            "loginOtp"
        );


    if (!mobileInput || !otpInput) {

        console.error(
            "Login inputs not found."
        );

        return;
    }


    const mobile =
        mobileInput.value.trim();


    const otp =
        otpInput.value.trim();


    if (!/^[0-9]{6}$/.test(otp)) {

        alert(
            "Please enter the 6-digit OTP."
        );

        otpInput.focus();

        return;
    }


    try {

        const response =
            await fetch(
                `${BACKEND_URL}/api/verify-otp`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        mobile: mobile,
                        otp: otp
                    })
                }
            );


        const result =
            await response.json();


        console.log(
            "LOGIN OTP VERIFY RESPONSE:",
            result
        );


        if (!response.ok || !result.success) {

            alert(
                result.message ||
                "Invalid or expired OTP."
            );

            return;
        }


        loginOtpVerified = true;


        clearLoginOTPTimer();

        // ------------------------------------------
        // Store logged-in user information
        // ------------------------------------------

        const registeredUser = {
            id: existingUser.id,
            name: existingUser.full_name,
            phone: existingUser.phone,
            username: existingUser.username || "",
            city: existingUser.city || "",
            state: existingUser.state || "",
            gender: existingUser.gender || "",
            bio: existingUser.bio || "",
            role: existingUser.role || "",
            badges: Array.isArray(existingUser.badges)
                ? existingUser.badges
                : [],
            gallery: Array.isArray(existingUser.gallery)
                ? existingUser.gallery
                : [],
            stats: existingUser.stats || {
                posts: 0,
                followers: 0,
                following: 0,
                matches: 0,
                trophies: 0
            }
        };


        // Save complete current user
        localStorage.setItem(
            "sportify_registered_user",
            JSON.stringify(registeredUser)
        );


        // Keep your existing individual values too
        localStorage.setItem(
            "sportifyUserId",
            existingUser.id
        );

        localStorage.setItem(
            "sportifyUserName",
            existingUser.full_name
        );

        localStorage.setItem(
            "sportifyMobile",
            existingUser.phone
        );

        console.log(
            "SPORTIFY REGISTERED USER SAVED:",
            registeredUser
        );



        console.log(
            "LOGIN SUCCESSFUL"
        );


        alert(
            "Login successful! Welcome back."
        );


        // ------------------------------------------
        // Open Sportify app
        // ------------------------------------------

        window.location.href =
            "app.html";

    }
    catch (error) {

        console.error(
            "VERIFY LOGIN OTP ERROR:",
            error
        );


        alert(
            "Could not connect to the OTP server."
        );
    }
}


// ======================================================
// LOGIN OTP TIMER
// ======================================================

function startLoginOTPTimer() {

    clearLoginOTPTimer();


    const timerElement =
        document.getElementById(
            "loginOtpTimer"
        );


    let remainingSeconds =
        OTP_EXPIRY_SECONDS;


    function updateTimer() {

        const minutes =
            Math.floor(
                remainingSeconds / 60
            );


        const seconds =
            remainingSeconds % 60;


        if (timerElement) {

            timerElement.textContent =
                `OTP expires in: ${minutes}:${seconds
                    .toString()
                    .padStart(2, "0")}`;
        }


        if (remainingSeconds <= 0) {

            clearLoginOTPTimer();


            if (timerElement) {

                timerElement.textContent =
                    "OTP expired. Please request a new one.";
            }

            return;
        }


        remainingSeconds--;
    }


    updateTimer();


    loginOtpTimerInterval =
        setInterval(
            updateTimer,
            1000
        );
}


// ======================================================
// CLEAR LOGIN OTP TIMER
// ======================================================

function clearLoginOTPTimer() {

    if (loginOtpTimerInterval) {

        clearInterval(
            loginOtpTimerInterval
        );

        loginOtpTimerInterval = null;
    }
}


// ======================================================
// BACK TO REGISTRATION
// ======================================================

function backToRegistration() {

    console.log(
        "BACK TO REGISTRATION"
    );


    // Hide login screen
    const loginScreen =
        document.getElementById(
            "existingLoginScreen"
        );


    if (loginScreen) {

        loginScreen.style.display =
            "none";
    }


    // Show registration form
    const formCard =
        document.querySelector(
            ".form-card"
        );


    if (formCard) {

        formCard.style.display =
            "block";
    }


    // Show progress bar
    const progressContainer =
        document.querySelector(
            ".progress-container"
        );


    if (progressContainer) {

        progressContainer.style.display =
            "block";
    }


    // Show already registered section
    const alreadyRegistered =
        document.querySelector(
            ".already-registered"
        );


    if (alreadyRegistered) {

        alreadyRegistered.style.display =
            "flex";
    }


    // Clear login data
    const loginMobile =
        document.getElementById(
            "loginMobile"
        );


    const loginOtp =
        document.getElementById(
            "loginOtp"
        );


    if (loginMobile) {
        loginMobile.value = "";
    }


    if (loginOtp) {
        loginOtp.value = "";
    }


    const loginOtpArea =
        document.getElementById(
            "loginOtpArea"
        );


    if (loginOtpArea) {

        loginOtpArea.style.display =
            "none";
    }


    const sendLoginOtpBtn =
        document.getElementById(
            "sendLoginOtpBtn"
        );


    if (sendLoginOtpBtn) {

        sendLoginOtpBtn.style.display =
            "block";
    }


    // Reset login state
    existingUser = null;
    loginOtpVerified = false;


    clearLoginOTPTimer();


    // Return to step 1
    showStep(1);
}


// ======================================================
// DOM LOADED
// ======================================================

window.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "SPORTIFY DOM LOADED"
        );


        // Initialize profile photo
        initializeProfilePhoto();


        // Make sure registration starts at step 1
        showStep(1);

    }
);
