/* ==========================================================================
   SPORTIFY - APPLICATION LOGIC, ATHLETE DATABASE, COMMUNITIES & SAFETY ENGINE
   ========================================================================== */

/**
 * 1. SPORTIFY ATHLETE DATABASE (MOCK DB)
 */
const DEFAULT_DATABASE = {
  users: [
    {
      id: "vikram",
      username: "vikram",
      handle: "@vikram_sports",
      password: "sportify123",
      name: "Vikram Kumar",
      role: "Pro Striker & Athlete",
      initials: "VK",
      avatarBg: "linear-gradient(135deg, #1565c0, #00c853)",
      bannerGradient: "linear-gradient(135deg, #0d47a1, #1b5e20, #1565c0)",
      bannerEmojis: "⚽ 🏃♂️ 🏅 ⚡ 🏆",
      bio: "⚽ Captain @ Bhopal Strikers FC | 🏋️ 500+ Fitness Days | 🎾 Shahpura Tennis Club\n\"Play with heart, train with fire. The game never stops!\" 🔥\nOpen for team invites, tournaments & collaborations in Bhopal.",
      badges: ["⚽ Football", "🏋️ Fitness", "🎾 Tennis", "🏃 Upper Lake Run"],
      stats: {
        posts: 194,
        followers: "48.6K",
        following: 512,
        matches: 38,
        trophies: 9
      },
      gallery: [
        { icon: "⚽", likes: "1.9K", comments: "118", tile: "tile-1" },
        { icon: "🏋️", likes: "1.4K", comments: "72", tile: "tile-2" },
        { icon: "🎾", likes: "980", comments: "44", tile: "tile-3" },
        { icon: "🏃", likes: "810", comments: "35", tile: "tile-4" },
        { icon: "🥇", likes: "2.8K", comments: "240", tile: "tile-5" },
        { icon: "🏊", likes: "650", comments: "28", tile: "tile-6" },
        { icon: "🥊", likes: "1.1K", comments: "54", tile: "tile-2" },
        { icon: "🏏", likes: "760", comments: "39", tile: "tile-3" },
        { icon: "🏸", likes: "1.2K", comments: "68", tile: "tile-1" }
      ]
    },
    {
      id: "priya",
      username: "priya",
      handle: "@priya_hoops",
      password: "sportify123",
      name: "Priya Sharma",
      role: "Point Guard @ Arera Club",
      initials: "PS",
      avatarBg: "linear-gradient(135deg, #c2185b, #ad1457)",
      bannerGradient: "linear-gradient(135deg, #e65100, #bf360c, #c2185b)",
      bannerEmojis: "🏀 👟 🥇 ⚡ ⛹️♀️",
      bio: "🏀 Point Guard for Bhopal Mavericks | 3x MP State Tournament MVP 🏆\nBall is life. Fast breaks at Arera Club courts, buzzer beaters & plyometrics.",
      badges: ["🏀 Basketball", "🏋️ Plyometrics", "👟 Sneakerhead"],
      stats: {
        posts: 142,
        followers: "32.4K",
        following: 340,
        matches: 52,
        trophies: 8
      },
      gallery: [
        { icon: "🏀", likes: "2.6K", comments: "180", tile: "tile-4" },
        { icon: "⛹️♀️", likes: "2.1K", comments: "120", tile: "tile-5" },
        { icon: "🏆", likes: "3.9K", comments: "310", tile: "tile-2" },
        { icon: "👟", likes: "1.5K", comments: "94", tile: "tile-3" },
        { icon: "🥇", likes: "4.1K", comments: "320", tile: "tile-1" }
      ]
    },
    {
      id: "arjun",
      username: "arjun",
      handle: "@arjun_cricket",
      password: "sportify123",
      name: "Arjun Kumar",
      role: "Top-Order Batsman & All-Rounder",
      initials: "AK",
      avatarBg: "linear-gradient(135deg, #e65100, #ff6f00)",
      bannerGradient: "linear-gradient(135deg, #bf360c, #4a148c, #1565c0)",
      bannerEmojis: "🏏 🏟️ 🧢 ⚡ 🏆",
      bio: "🏏 Right-hand top-order batsman | Aishbagh Cricket League & TT Nagar nets.\nCentury maker focused on tournament form and fitness! 🏏🔥",
      badges: ["🏏 Cricket", "🏃 Sprints", "🏋️ Core Strength"],
      stats: {
        posts: 220,
        followers: "41.2K",
        following: 460,
        matches: 74,
        trophies: 14
      },
      gallery: [
        { icon: "🏏", likes: "3.2K", comments: "240", tile: "tile-4" },
        { icon: "💯", likes: "5.4K", comments: "420", tile: "tile-5" },
        { icon: "🏟️", likes: "2.1K", comments: "110", tile: "tile-2" },
        { icon: "🥇", likes: "2.9K", comments: "160", tile: "tile-1" }
      ]
    },
    {
      id: "sneha",
      username: "sneha",
      handle: "@sneha_tennis",
      password: "sportify123",
      name: "Sneha Rao",
      role: "AITA Ranked Tennis Competitor",
      initials: "SR",
      avatarBg: "linear-gradient(135deg, #00838f, #00acc1)",
      bannerGradient: "linear-gradient(135deg, #880e4f, #4a148c, #00838f)",
      bannerEmojis: "🎾 🏸 🏃♀️ 🥇 ⚡",
      bio: "🎾 Shahpura clay court grinder | Forehand specialist | 8+ MP State titles 🏆\nTouring & coaching upcoming juniors in Bhopal.",
      badges: ["🎾 Tennis", "🏃 Upper Lake Marathon", "🧘 Yoga"],
      stats: {
        posts: 160,
        followers: "28.5K",
        following: 380,
        matches: 48,
        trophies: 11
      },
      gallery: [
        { icon: "🎾", likes: "2.2K", comments: "145", tile: "tile-3" },
        { icon: "🏆", likes: "3.4K", comments: "210", tile: "tile-5" },
        { icon: "🥇", likes: "2.9K", comments: "160", tile: "tile-2" }
      ]
    },
    {
      id: "rahul",
      username: "rahul",
      handle: "@rahul_striker",
      password: "sportify123",
      name: "Rahul Mehta",
      role: "Captain @ Bhopal Strikers FC",
      initials: "RM",
      avatarBg: "linear-gradient(135deg, #1565c0, #0d47a1)",
      bannerGradient: "linear-gradient(135deg, #1565c0, #1b5e20, #0d47a1)",
      bannerEmojis: "⚽ 🏆 ⚡ 🏟️ 🥇",
      bio: "⚽ Bhopal Strikers FC Captain | State Cup Winner 2025\nLeading tactical offensive plays at TT Nagar Stadium Arena. DM for friendlies.",
      badges: ["⚽ Football", "🏆 State MVP", "🏃 Sprints"],
      stats: {
        posts: 178,
        followers: "39.1K",
        following: 280,
        matches: 64,
        trophies: 12
      },
      gallery: [
        { icon: "⚽", likes: "2.4K", comments: "154", tile: "tile-1" },
        { icon: "🏆", likes: "4.8K", comments: "390", tile: "tile-2" },
        { icon: "⚡", likes: "1.7K", comments: "88", tile: "tile-3" }
      ]
    }
  ]
};

/**
 * 2. CHATS & DIRECT MESSAGES DATABASE
 */
const CHATS_DATABASE = {
  "rahul": {
    id: "rahul",
    name: "Rahul Mehta ⚽",
    contactName: "Rahul Mehta ⚽",
    status: "● Online • Bhopal Strikers FC",
    isGroup: false,
    avatarInitial: "RM",
    avatarBg: "linear-gradient(135deg, #1565c0, #0d47a1)",
    unread: 2,
    preview: "Ready for Saturday's tournament match at TT Nagar? 🔥",
    time: "7:42 PM",
    messages: [
      {
        id: "rm_1",
        isOutgoing: false,
        senderName: "Rahul Mehta",
        senderRole: "Captain",
        avatar: "RM",
        avatarBg: "linear-gradient(135deg, #1565c0, #0d47a1)",
        text: "Hey Vikram! Coach finalized the starting lineup for the championship match.",
        time: "7:30 PM"
      },
      {
        id: "rm_2",
        isOutgoing: false,
        senderName: "Rahul Mehta",
        senderRole: "Captain",
        avatar: "RM",
        avatarBg: "linear-gradient(135deg, #1565c0, #0d47a1)",
        text: "You are starting at forward at TT Nagar! Ready for it? ⚽",
        time: "7:31 PM"
      },
      {
        id: "rm_3",
        isOutgoing: true,
        text: "Let's go! 100% locked in. Did morning sprints along VIP Road all week. 🔥",
        time: "7:32 PM"
      },
      {
        id: "rm_4",
        isOutgoing: false,
        senderName: "Rahul Mehta",
        senderRole: "Captain",
        avatar: "RM",
        avatarBg: "linear-gradient(135deg, #1565c0, #0d47a1)",
        attachment: "📋 Formation 4-3-3 vs Jabalpur FC",
        text: "Here's our tactical formation for Saturday. Ready for Saturday's tournament match at TT Nagar? 🔥",
        time: "7:42 PM"
      }
    ]
  },
  "bhopal-strikers": {
    id: "bhopal-strikers",
    name: "Bhopal Strikers FC 👥",
    contactName: "Bhopal Strikers 👥",
    status: "16 Members • 11 Active Now",
    isGroup: true,
    avatarInitial: "⚽",
    avatarBg: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    unread: 3,
    preview: "Coach: Warm-up starts at 6:30 AM at TT Nagar!",
    time: "6:30 PM",
    messages: [
      {
        id: "bs_1",
        isOutgoing: false,
        senderName: "Coach R. Rathore",
        senderRole: "Head Coach",
        avatar: "RR",
        avatarBg: "linear-gradient(135deg, #b71c1c, #c62828)",
        text: "Team, boots inspection and tactical briefing starts at 6:15 AM sharp tomorrow.",
        time: "5:50 PM"
      },
      {
        id: "bs_2",
        isOutgoing: false,
        senderName: "Sameer Verma",
        senderRole: "Center Back",
        avatar: "SV",
        avatarBg: "linear-gradient(135deg, #283593, #3949ab)",
        text: "Understood Coach! All defenders are in green kits.",
        time: "6:05 PM"
      },
      {
        id: "bs_3",
        isOutgoing: false,
        senderName: "Kabir Khan",
        senderRole: "Goalkeeper",
        avatar: "KK",
        avatarBg: "linear-gradient(135deg, #e65100, #f57c00)",
        attachment: "🧤 New Predator Match Gloves Ready",
        text: "Clean sheets only tomorrow. Let's lift the cup boys! 🏆",
        time: "6:20 PM"
      },
      {
        id: "bs_4",
        isOutgoing: false,
        senderName: "Coach R. Rathore",
        senderRole: "Head Coach",
        avatar: "RR",
        avatarBg: "linear-gradient(135deg, #b71c1c, #c62828)",
        text: "Warm-up starts at 6:30 AM at TT Nagar!",
        time: "6:30 PM"
      }
    ]
  },
  "priya": {
    id: "priya",
    name: "Priya Sharma 🏀",
    contactName: "Priya Sharma 🏀",
    status: "● Online • Bhopal Mavericks",
    isGroup: false,
    avatarInitial: "PS",
    avatarBg: "linear-gradient(135deg, #c2185b, #ad1457)",
    unread: 0,
    preview: "Are you joining the Arera Club 3x3 court session?",
    time: "3:15 PM",
    messages: [
      {
        id: "ps_1",
        isOutgoing: false,
        senderName: "Priya Sharma",
        senderRole: "Point Guard",
        avatar: "PS",
        avatarBg: "linear-gradient(135deg, #c2185b, #ad1457)",
        text: "Hey! Saw your cross-training workout logged on Sportify. Solid intensity! 🏃♂️",
        time: "2:50 PM"
      },
      {
        id: "ps_2",
        isOutgoing: true,
        text: "Thanks Priya! Preparing for the state playoffs next week.",
        time: "3:02 PM"
      },
      {
        id: "ps_3",
        isOutgoing: false,
        senderName: "Priya Sharma",
        senderRole: "Point Guard",
        avatar: "PS",
        avatarBg: "linear-gradient(135deg, #c2185b, #ad1457)",
        text: "Are you joining the Arera Club 3x3 court session? We need another athletic runner for fast breaks!",
        time: "3:15 PM"
      }
    ]
  },
  "arjun": {
    id: "arjun",
    name: "Arjun Kumar 🏏",
    contactName: "Arjun Kumar 🏏",
    status: "Away • Aishbagh Cricket Club",
    isGroup: false,
    avatarInitial: "AK",
    avatarBg: "linear-gradient(135deg, #e65100, #ff6f00)",
    unread: 0,
    preview: "You: Well played on the century at Aishbagh bro!",
    time: "Yesterday",
    messages: [
      {
        id: "ak_1",
        isOutgoing: true,
        text: "Well played on the century at Aishbagh bro! Watched the highlights on Sportify. That straight drive was effortless. 🏏🔥",
        time: "Yesterday, 4:10 PM"
      },
      {
        id: "ak_2",
        isOutgoing: false,
        senderName: "Arjun Kumar",
        senderRole: "Batsman",
        avatar: "AK",
        avatarBg: "linear-gradient(135deg, #e65100, #ff6f00)",
        text: "Appreciate it brother! The turf had good bounce. Let's catch up at Arera Club cafe on Wednesday after nets.",
        time: "Yesterday, 4:45 PM"
      }
    ]
  },
  "sneha": {
    id: "sneha",
    name: "Sneha Rao 🎾",
    contactName: "Sneha Rao 🎾",
    status: "● Online • Shahpura Tennis League",
    isGroup: false,
    avatarInitial: "SR",
    avatarBg: "linear-gradient(135deg, #00838f, #00acc1)",
    unread: 0,
    preview: "Clay courts are dry and ready for tomorrow morning rally!",
    time: "Sep 17",
    messages: [
      {
        id: "sr_1",
        isOutgoing: false,
        senderName: "Sneha Rao",
        senderRole: "Seed #1",
        avatar: "SR",
        avatarBg: "linear-gradient(135deg, #00838f, #00acc1)",
        text: "Hey Vikram! Did you get your racquet restrung at TT Nagar pro shop?",
        time: "Sep 17, 10:20 AM"
      },
      {
        id: "sr_2",
        isOutgoing: true,
        text: "Yes, tension is set to 54 lbs. Forehand feels crisp now!",
        time: "Sep 17, 10:45 AM"
      },
      {
        id: "sr_3",
        isOutgoing: false,
        senderName: "Sneha Rao",
        senderRole: "Seed #1",
        avatar: "SR",
        avatarBg: "linear-gradient(135deg, #00838f, #00acc1)",
        text: "Clay courts are dry and ready for tomorrow morning rally! See you on court 2 at 7 AM. 🎾",
        time: "Sep 17, 11:15 AM"
      }
    ]
  }
};

// Preserve pristine initial demo messages for demo chats
const INITIAL_DEMO_MESSAGES = {};
Object.keys(CHATS_DATABASE).forEach((k) => {
  INITIAL_DEMO_MESSAGES[k] = [...(CHATS_DATABASE[k].messages || [])];
});

/**
 * 3. COMMUNITIES DATABASE
 */
const COMMUNITIES_DATABASE = {
  "bhopal-fc": {
    name: "Bhopal FC Community",
    membersText: "🟢 512 Online • 6.8K Bhopal Athletes",
    gradient: "linear-gradient(135deg, #1565c0, #1b5e20)",
    welcomeHead: "Welcome to Bhopal FC Community! 🏟️",
    welcomeBody: "Connect with local footballers, organize weekend pick-up games at TT Nagar, review match footage, and build squads.",
    channels: [
      {
        id: "club-news",
        name: "📢-club-news",
        desc: "Official community updates, team lineups, pitch sessions, and tactical announcements.",
        badge: "",
        posts: [
          {
            author: "Coach R. Rathore",
            role: "Head Coach",
            avatar: "RR",
            avatarBg: "linear-gradient(135deg, #b71c1c, #c62828)",
            time: "Today at 7:15 PM",
            tags: ["#Announcement", "#Championship"],
            text: "Official Lineup Confirmed: For Saturday's Bhopal Super League semifinal, we are deploying our high-pressing 4-3-3 formation. TT Nagar main pitch access granted from 6 AM.",
            reactions: { "🏆": 34, "🔥": 28, "⚽": 19 }
          },
          {
            author: "Rahul Mehta",
            role: "Team Captain",
            avatar: "RM",
            avatarBg: "linear-gradient(135deg, #1565c0, #0d47a1)",
            time: "Today at 7:35 PM",
            tags: ["#MatchDay", "#TTNagar"],
            text: "All 18 squad athletes have checked in. Warm-up kits have been distributed at the stadium locker room. Let's bring home the win!",
            reactions: { "🙌": 26, "💯": 18 }
          }
        ]
      },
      {
        id: "fixtures",
        name: "🏆-fixtures-and-schedules",
        desc: "Upcoming weekend friendlies, knockout cup dates, and turf booking timings.",
        badge: "",
        posts: [
          {
            author: "Sameer Verma",
            role: "Match Secretary",
            avatar: "SV",
            avatarBg: "linear-gradient(135deg, #283593, #3949ab)",
            time: "Today at 4:10 PM",
            tags: ["#Schedule", "#Knockout"],
            text: "Here is the verified weekend tournament schedule:\n• Match 1: Strikers vs Indore United (Sat 8:00 AM)\n• Match 2: Arera Lions vs Old City Warriors (Sat 10:30 AM)\n• Championship Final: Sunday 4:30 PM under floodlights.",
            reactions: { "📅": 21, "👍": 15 }
          }
        ]
      },
      {
        id: "match-analysis",
        name: "💬-match-analysis",
        desc: "Post-match debates, stats breakdowns, counter-attacking analysis, and referee reviews.",
        badge: "5",
        posts: [
          {
            author: "Kabir Khan",
            role: "Goalkeeper",
            avatar: "KK",
            avatarBg: "linear-gradient(135deg, #e65100, #f57c00)",
            time: "Today at 8:05 PM",
            tags: ["#Defense", "#CleanSheet"],
            text: "Holding that clean sheet in the final 15 minutes was crucial! The back four stepped up to clear 6 corners under pressure. What did everyone think about our counter-attacking width?",
            reactions: { "🧤": 42, "🔥": 29, "👏": 19 }
          },
          {
            author: "Ananya Deshmukh",
            role: "Tactical Analyst",
            avatar: "AD",
            avatarBg: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
            time: "Today at 8:22 PM",
            tags: ["#Heatmap", "#Stats"],
            text: "Our passing accuracy in the offensive third was 84%! When Vikram made diagonal runs across their center-backs, it created wide channels for our wingers to exploit.",
            reactions: { "📊": 31, "💡": 24 }
          }
        ]
      },
      {
        id: "tactics-drills",
        name: "🎯-tactics-and-drills",
        desc: "Training routines, agility ladders, rondos, and finishing drills at home grounds.",
        badge: "",
        posts: [
          {
            author: "Devendra Singh",
            role: "Fitness Conditioning Coach",
            avatar: "DS",
            avatarBg: "linear-gradient(135deg, #00838f, #0097a7)",
            time: "Yesterday at 6:45 PM",
            tags: ["#Drills", "#Agility"],
            text: "Recommended Tuesday routine: 6x 40m sprint intervals with 30s recovery, followed by 15 minutes of box-to-box rondos. Keeps stamina high through extra time.",
            reactions: { "⚡": 38, "🏃": 27 }
          }
        ]
      }
    ],
    roster: {
      leaders: [
        { name: "Rahul M.", role: "Captain", avatar: "RM", bg: "bg-blue", status: "online", id: "rahul" },
        { name: "Coach Rathore", role: "Head Coach", avatar: "RR", bg: "bg-crimson", status: "online", id: "coach_rr" },
        { name: "Vikram K.", role: "Striker", avatar: "VK", bg: "bg-teal", status: "online", id: "vikram" },
        { name: "Sameer V.", role: "Defense", avatar: "SV", bg: "bg-indigo", status: "online", id: "sameer_v" }
      ],
      members: [
        { name: "Kabir Khan", role: "Goalkeeper", avatar: "KK", bg: "bg-orange", status: "online", id: "kabir_k" },
        { name: "Ananya D.", role: "Analyst", avatar: "AD", bg: "bg-purple", status: "online", id: "ananya_d" },
        { name: "Devendra S.", role: "Trainer", avatar: "DS", bg: "bg-teal", status: "online", id: "devendra_s" },
        { name: "Meena J.", role: "Physio", avatar: "MJ", bg: "bg-gray", status: "away", id: "meena_j" }
      ]
    }
  },
  "mp-cricket": {
    name: "MP Cricketers Hub",
    membersText: "🟢 720 Online • 9.4K Bhopal Cricketers",
    gradient: "linear-gradient(135deg, #e65100, #bf360c)",
    welcomeHead: "Welcome to MP Cricketers Community! 🏏",
    welcomeBody: "Organize weekend leather & tennis ball matches, discuss Aishbagh league fixtures, and book net practice at TT Nagar.",
    channels: [
      {
        id: "club-news",
        name: "📢-match-fixtures",
        desc: "Tournament brackets, pitch reports, and squad selection announcements.",
        badge: "4",
        posts: [
          {
            author: "Arjun Kumar",
            role: "Top Order Batsman",
            avatar: "AK",
            avatarBg: "linear-gradient(135deg, #e65100, #ff6f00)",
            time: "Today at 6:10 PM",
            tags: ["#Century", "#Aishbagh"],
            text: "Turf pitch condition at Aishbagh is hard and fast today with true bounce! Anyone looking for net practice or an opening batsman for tomorrow's T20 friendly?",
            reactions: { "🏏": 56, "🔥": 34 }
          }
        ]
      }
    ],
    roster: {
      leaders: [
        { name: "Arjun K.", role: "Vice Captain", avatar: "AK", bg: "bg-orange", status: "online", id: "arjun" }
      ],
      members: [
        { name: "Rohit S.", role: "Pacer", avatar: "RS", bg: "bg-gray", status: "online", id: "rohit_s" }
      ]
    }
  },
  "hoops-club": {
    name: "Bhopal Hoops Community",
    membersText: "🟢 310 Online • 4.1K Ballers",
    gradient: "linear-gradient(135deg, #c2185b, #4a148c)",
    welcomeHead: "Welcome to Bhopal Hoops Community! 🏀",
    welcomeBody: "Pick-up 3x3 games, Arera Club hardwood schedule, drills, sneaker culture, and MP State tournament discussions.",
    channels: [
      {
        id: "club-news",
        name: "🏀-court-schedules",
        desc: "Open court timings, 3x3 rosters, and scrimmage announcements.",
        badge: "",
        posts: [
          {
            author: "Priya Sharma",
            role: "Point Guard",
            avatar: "PS",
            avatarBg: "linear-gradient(135deg, #c2185b, #ad1457)",
            time: "Today at 5:45 PM",
            tags: ["#PickUp", "#AreraClub"],
            text: "Arera Club hardwood is booked tomorrow 6:00 PM to 8:30 PM! We have 8 players confirmed, need 2 more ballers for 5v5 full court run.",
            reactions: { "🏀": 39, "🔥": 25 }
          }
        ]
      }
    ],
    roster: {
      leaders: [
        { name: "Priya S.", role: "Captain", avatar: "PS", bg: "bg-pink", status: "online", id: "priya" }
      ],
      members: [
        { name: "Tanvi M.", role: "Forward", avatar: "TM", bg: "bg-purple", status: "online", id: "tanvi_m" }
      ]
    }
  },
  "fitness-cult": {
    name: "MP Nagar Fitness Cult",
    membersText: "🟢 640 Online • 8.2K Gym Athletes",
    gradient: "linear-gradient(135deg, #311b92, #00838f)",
    welcomeHead: "Welcome to MP Nagar Fitness Cult! 🏋️",
    welcomeBody: "Weightlifting, powerlifting PRs, HIIT routines, and diet protocols across Bhopal gym communities.",
    channels: [
      {
        id: "club-news",
        name: "🏋️-pr-showcase",
        desc: "Share your deadlift, squat, and bench press records and form checks.",
        badge: "2",
        posts: [
          {
            author: "Kavya Tiwari",
            role: "CrossFit Coach",
            avatar: "KT",
            avatarBg: "linear-gradient(135deg, #6a1b9a, #4a148c)",
            time: "Today at 4:20 PM",
            tags: ["#DeadliftPR", "#IronCore"],
            text: "New PR today: 140kg deadlift at IronCore MP Nagar! Braced core and lat tension before drive.",
            reactions: { "💪": 58, "🔥": 44, "🥇": 21 }
          }
        ]
      }
    ],
    roster: {
      leaders: [
        { name: "Kavya T.", role: "Coach", avatar: "KT", bg: "bg-purple", status: "online", id: "kavya_t" }
      ],
      members: [
        { name: "Deepak S.", role: "Powerlifter", avatar: "DS", bg: "bg-blue", status: "online", id: "deepak_s" }
      ]
    }
  },
  "tennis-club": {
    name: "Shahpura Tennis League",
    membersText: "🟢 180 Online • 2.6K Tennis Players",
    gradient: "linear-gradient(135deg, #00838f, #1b5e20)",
    welcomeHead: "Welcome to Shahpura Tennis Community! 🎾",
    welcomeBody: "Clay court booking, racquet restringing spots, junior coaching, and weekend singles & doubles match play.",
    channels: [
      {
        id: "club-news",
        name: "🎾-hitting-partners",
        desc: "Find players by NTRP rating for friendly rallies and competitive sets.",
        badge: "",
        posts: [
          {
            author: "Sneha Rao",
            role: "AITA Competitor",
            avatar: "SR",
            avatarBg: "linear-gradient(135deg, #00838f, #00acc1)",
            time: "Today at 3:10 PM",
            tags: ["#ClayCourt", "#NTRP4"],
            text: "Hitting session open tomorrow morning 6:30 AM at Shahpura clay courts! Looking for 4.0+ rated partner.",
            reactions: { "🎾": 32, "👏": 19 }
          }
        ]
      }
    ],
    roster: {
      leaders: [
        { name: "Sneha R.", role: "Seed #1", avatar: "SR", bg: "bg-teal", status: "online", id: "sneha" }
      ],
      members: [
        { name: "Abhay G.", role: "Player", avatar: "AG", bg: "bg-blue", status: "online", id: "abhay_g" }
      ]
    }
  },
  "water-sports": {
    name: "Upper Lake Water Sports",
    membersText: "🟢 210 Online • 3.2K Athletes",
    gradient: "linear-gradient(135deg, #006064, #01579b)",
    welcomeHead: "Welcome to Upper Lake Water Sports Hub! 🏊",
    welcomeBody: "Rowing, kayaking, triathlon conditioning, and sunrise swim clinics at Bada Talab VIP Road.",
    channels: [
      {
        id: "club-news",
        name: "🛶-kayak-schedule",
        desc: "Weather alerts, boat allocations, and morning endurance sessions.",
        badge: "",
        posts: [
          {
            author: "Dev Prakash",
            role: "Rowing Specialist",
            avatar: "DP",
            avatarBg: "linear-gradient(135deg, #006064, #01579b)",
            time: "Today at 6:40 AM",
            tags: ["#UpperLake", "#BhopalRowing"],
            text: "Glass water conditions at Upper Lake this morning! Completed 8km kayak interval drills before sunrise.",
            reactions: { "🚣": 42, "🌊": 28 }
          }
        ]
      }
    ],
    roster: {
      leaders: [
        { name: "Dev P.", role: "Rowing Lead", avatar: "DP", bg: "bg-indigo", status: "online", id: "dev_p" }
      ],
      members: [
        { name: "Aakash L.", role: "Kayaker", avatar: "AL", bg: "bg-teal", status: "online", id: "aakash_l" }
      ]
    }
  }
};

/**
 * 4. APPLICATION STATE & LOCALSTORAGE STORES
 */
let currentCommunityId = "bhopal-fc";
let currentChannelIndex = 0;
let activeChatId = "rahul";
let activeChatFilter = "all";

// Active viewed profile state (can be self or another athlete)
let activeViewedProfileId = null;

// Active target athlete for reporting
let currentReportTarget = null;

let db = loadDatabase();
let currentUser = null;


/* ======================================================
   REAL SPORTIFY USER
   CURRENT USER COMES ONLY FROM LOGIN/REGISTRATION
   NO FAKE PROFILE DATA
====================================================== */

const storedRegisteredUser =
  localStorage.getItem("sportify_registered_user");

let registeredUser = null;

if (storedRegisteredUser) {

  try {

    registeredUser = JSON.parse(storedRegisteredUser);

  } catch (error) {

    console.error(
      "SPORTIFY: Invalid registered user data.",
      error
    );

    registeredUser = null;
  }
}


/* ======================================================
   CREATE CURRENT USER FROM REAL USER DATA ONLY
====================================================== */

if (registeredUser && registeredUser.name) {

  const userName = registeredUser.name.trim();

  const username =
    userName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const handle =
    "@" +
    userName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  const initials =
    userName
      .split(/\s+/)
      .filter(Boolean)
      .map(word => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();


  currentUser = {

    /* ==============================
       REAL REGISTRATION INFORMATION
    ============================== */

    id:
      registeredUser.id || registeredUser.mobile || registeredUser.phone,

    username:
      registeredUser.username || username,

    handle:
      registeredUser.username ? ("@" + registeredUser.username) : handle,

    name:
      userName,

    city:
      registeredUser.city || "",

    state:
      registeredUser.state || "",

    mobile:
      registeredUser.mobile ||
      registeredUser.phone ||
      "",

    gender:
      registeredUser.gender || "",


    /* ==============================
       USER-CREATED PROFILE INFORMATION

       EMPTY UNTIL USER ADDS IT
    ============================== */

    bio:
      registeredUser.bio || "",

    role:
      registeredUser.role || "",

    badges:
      Array.isArray(registeredUser.badges)
        ? registeredUser.badges
        : [],

    gallery:
      Array.isArray(registeredUser.gallery)
        ? registeredUser.gallery
        : [],


    /* ==============================
       REAL PROFILE STATS

       NEW USER STARTS AT ZERO
    ============================== */

    stats: {

      posts:
        registeredUser.stats?.posts || 0,

      followers:
        registeredUser.stats?.followers || 0,

      following:
        registeredUser.stats?.following || 0,

      matches:
        registeredUser.stats?.matches || 0,

      trophies:
        registeredUser.stats?.trophies || 0
    },


    /* ==============================
       VISUAL INFORMATION

       NO FAKE SPORT EMOJIS
    ============================== */

    initials:
      initials,

    avatarBg:
      "",

    bannerGradient:
      "",

    bannerEmojis:
      ""
  };


  console.log(
    "SPORTIFY REAL USER:",
    currentUser
  );

} else {

  console.error(
    "SPORTIFY: No registered user found."
  );

  currentUser = null;
}

/* ======================================================
   SUPABASE USER IDENTITY & PROFILE SYNCHRONIZATION
====================================================== */

async function getVerifiedCurrentUserId() {
  if (!currentUser) return null;

  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(currentUser.id || "");
  if (isUuid) {
    return currentUser.id;
  }

  const userPhone = currentUser.mobile || currentUser.phone || localStorage.getItem("sportifyMobile");
  if (!userPhone || typeof supabaseClient === "undefined") {
    return currentUser.id;
  }

  try {
    const { data, error } = await supabaseClient
      .from("profiles")
      .select("id, full_name, username, role, bio, badges, phone")
      .eq("phone", userPhone)
      .maybeSingle();

    if (error) {
      console.error("SUPABASE: getVerifiedCurrentUserId error:", error);
      return currentUser.id;
    }

    if (data && data.id) {
      console.log("SUPABASE: Resolved user UUID from phone:", data.id);
      currentUser.id = data.id;
      currentUser.supabaseId = data.id;
      if (data.full_name) currentUser.name = data.full_name;
      if (data.username) {
        currentUser.username = data.username;
        currentUser.handle = "@" + data.username;
      }
      if (data.role) currentUser.role = data.role;
      if (data.bio !== undefined && data.bio !== null) currentUser.bio = data.bio;
      if (Array.isArray(data.badges)) currentUser.badges = data.badges;

      localStorage.setItem("sportify_registered_user", JSON.stringify(currentUser));
      localStorage.setItem("sportifyUserId", data.id);
      return data.id;
    }
  } catch (err) {
    console.error("SUPABASE: Exception in getVerifiedCurrentUserId:", err);
  }

  return currentUser.id;
}

async function syncCurrentUserFromSupabase() {
  if (!currentUser || typeof supabaseClient === "undefined") return;

  try {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(currentUser.id || "");
    const userPhone = currentUser.mobile || currentUser.phone || localStorage.getItem("sportifyMobile");

    let query = supabaseClient.from("profiles").select("*");
    if (isUuid) {
      query = query.eq("id", currentUser.id);
    } else if (userPhone) {
      query = query.eq("phone", userPhone);
    } else {
      return;
    }

    const { data, error } = await query.maybeSingle();

    if (error) {
      console.error("SUPABASE PROFILE SYNC ERROR:", error);
      return;
    }

    if (!data) {
      console.warn("SUPABASE: No profile record found for user sync.");
      return;
    }

    console.log("SUPABASE PROFILE SYNC: Loaded latest profile:", data);
    currentUser.id = data.id;
    currentUser.supabaseId = data.id;
    if (data.full_name) currentUser.name = data.full_name;
    if (data.username) {
      currentUser.username = data.username;
      currentUser.handle = "@" + data.username;
    }
    if (data.role) currentUser.role = data.role;
    if (data.bio !== undefined && data.bio !== null) currentUser.bio = data.bio;
    if (Array.isArray(data.badges)) currentUser.badges = data.badges;

    if (data.full_name) {
      const parts = data.full_name.trim().split(/\s+/);
      currentUser.initials = (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
    }

    localStorage.setItem("sportify_registered_user", JSON.stringify(currentUser));
    localStorage.setItem("sportifyUserId", data.id);
    localStorage.setItem("sportifyUserName", currentUser.name);

    applyCurrentAthleteToShell(currentUser);
    if (!activeViewedProfileId || activeViewedProfileId === currentUser.id) {
      activeViewedProfileId = currentUser.id;
      renderProfileScreen(currentUser);
    }

  } catch (err) {
    console.error("SUPABASE PROFILE SYNC EXCEPTION:", err);
  }
}




let blockedUsers = loadBlockedUsers();
let filedReports = loadFiledReports();

function loadDatabase() {
  const saved = localStorage.getItem("sportify_db_v3");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Resetting DB to default", e);
    }
  }
  localStorage.setItem("sportify_db_v3", JSON.stringify(DEFAULT_DATABASE));
  return DEFAULT_DATABASE;
}

function saveDatabase() {
  localStorage.setItem("sportify_db_v3", JSON.stringify(db));
}

// Alias helpers used in upload/reel publish flow
function getDB() { return db; }
function saveDB(updatedDb) {
  if (updatedDb) db = updatedDb;
  saveDatabase();
}

/**
 * Persist the real currentUser (registered user) back to localStorage.
 * This is needed because real users are NOT in db.users (demo-only list).
 * Their gallery/reels/stats live on the currentUser object and must be
 * saved to localStorage to survive page refresh.
 */
function persistCurrentUser() {
  if (!currentUser) return;
  try {
    localStorage.setItem('sportify_registered_user', JSON.stringify(currentUser));
    console.log('SPORTIFY: currentUser persisted to localStorage.', {
      gallery: currentUser.gallery?.length || 0,
      reels: currentUser.reels?.length || 0,
      posts: currentUser.stats?.posts || 0
    });
  } catch (e) {
    console.error('SPORTIFY: Failed to persist currentUser:', e);
  }
}


function loadCurrentSession() {

  const currentId =
    localStorage.getItem("sportify_active_user_v3");

  if (!currentId) {
    return null;
  }

  const user =
    db.users.find(
      (u) =>
        u.id === currentId ||
        u.username === currentId
    );

  return user || null;
}



function saveCurrentSession(userId) {
  localStorage.setItem("sportify_active_user_v3", userId);
}

function loadBlockedUsers() {
  const saved = localStorage.getItem("sportify_blocked_v3");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Resetting blocked list", e);
    }
  }
  return []; // array of userIds
}

function saveBlockedUsers() {
  localStorage.setItem("sportify_blocked_v3", JSON.stringify(blockedUsers));
}

function loadFiledReports() {
  const saved = localStorage.getItem("sportify_reports_v3");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Resetting reports list", e);
    }
  }
  return []; // array of report objects
}

function saveFiledReports() {
  localStorage.setItem("sportify_reports_v3", JSON.stringify(filedReports));
}

/**
 * 5. ATHLETE PROFILE VIEWING ENGINE
 */
function viewAthleteProfile(userId) {
  // Find athlete in db or mock
  let user = db.users.find((u) => u.id === userId);
  if (!user && (CHATS_DATABASE[userId] || (typeof userId === "string" && userId.startsWith("private_")))) {
    const c = CHATS_DATABASE[userId] || {};
    const profileId = c.profileId || (typeof userId === "string" ? userId.replace("private_", "") : userId);
    const cleanName = (c.name || "Athlete").replace(/[^\w\s]/gi, "").trim();
    user = {
      id: userId,
      profileId: profileId,
      name: cleanName,
      handle: "@" + (cleanName ? cleanName.toLowerCase().replace(/\s+/g, "_") : "athlete"),
      role: "Athlete • Registered User",
      initials: c.avatarInitial || "SU",
      avatarBg: c.avatarBg || "linear-gradient(135deg, #7c3aed, #2979ff)",
      bannerGradient: "linear-gradient(135deg, #1565c0, #0d47a1, #1b5e20)",
      bannerEmojis: "⚽ 🏀 🏋️ ⚡ 🏆",
      bio: "Athlete on Sportify. Connected via Direct Messages.",
      badges: ["⚡ Verified Athlete", "🏅 MP League"],
      stats: { posts: 12, followers: "1.2K", following: 80, matches: 8, trophies: 2 },
      gallery: [
        { icon: "⚽", likes: "120", comments: "15", tile: "tile-1" },
        { icon: "🏆", likes: "340", comments: "28", tile: "tile-2" }
      ]
    };

    if (typeof supabaseClient !== "undefined" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(profileId)) {
      supabaseClient.from("profiles").select("*").eq("id", profileId).maybeSingle().then(({ data: p }) => {
        if (p) {
          if (p.full_name) user.name = p.full_name;
          if (p.username) user.handle = "@" + p.username;
          if (p.role) user.role = p.role;
          if (p.bio) user.bio = p.bio;
          if (p.badges) user.badges = p.badges;
          if (activeViewedProfileId === userId) renderProfileScreen(user);
        }
      });
    }
  }

  if (!user) {
    console.error("SPORTIFY: Athlete profile not found:", userId);
    return;
  }

  activeViewedProfileId = user.id;
  renderProfileScreen(user);
  switchTab("profile", true);
}

function renderProfileScreen(user) {
  const isSelf = currentUser && user.id === currentUser.id;
  const isBlocked = blockedUsers.includes(user.id);

  // 1. Banner

  const profileBanner =
    document.getElementById("profile-banner-el");

  if (profileBanner) {

    if (user.bannerGradient) {

      profileBanner.style.background =
        user.bannerGradient;

    } else {

      profileBanner.style.background = "";
    }
  }


  const profileEmojis =
    document.getElementById("profile-banner-emojis");

  if (profileEmojis) {

    profileEmojis.textContent =
      user.bannerEmojis || "";
  }

  // 2. Avatar & Info
  const profileAvatar = document.getElementById("profile-avatar-core");
  if (profileAvatar) {

    profileAvatar.textContent =
      user.initials || "";

    if (user.avatarBg) {

      profileAvatar.style.background =
        user.avatarBg;

    } else {

      profileAvatar.style.background = "";
    }
  }

  const profileName =
    document.getElementById("profile-display-name");

  const profileHandle =
    document.getElementById("profile-display-handle");

  const profileBio =
    document.getElementById("profile-display-bio");


  if (profileName) {
    profileName.textContent =
      user.name || "";
  }


  if (profileHandle) {

    if (user.handle) {

      profileHandle.textContent =
        user.role
          ? `${user.handle} • ${user.role}`
          : user.handle;

    } else {

      profileHandle.textContent = "";
    }
  }


  if (profileBio) {

    profileBio.innerHTML =
      escapeHTML(user.bio || "")
        .replace(/\n/g, "<br />");
  }

  // 3. Badges
  const tagsContainer = document.getElementById("profile-tags-container");
  if (tagsContainer && user.badges) {
    tagsContainer.innerHTML = user.badges
      .map((badge) => `<span class="sport-badge">${escapeHTML(badge)}</span>`)
      .join("");
  }

  // 4. Stats
  if (user.stats) {
    document.getElementById("stat-posts").textContent = user.stats.posts;
    document.getElementById("stat-followers").textContent = user.stats.followers;
    document.getElementById("stat-following").textContent = user.stats.following;
    document.getElementById("stat-matches").textContent = user.stats.matches;
    document.getElementById("stat-trophies").textContent = user.stats.trophies;
  }

  // 5. Gallery — delegate to tab-aware renderer
  currentProfileTab = 'posts';
  // Reset tab buttons to 'posts' active
  const allPTabs = document.querySelectorAll('.p-tab');
  allPTabs.forEach(t => {
    t.classList.remove('active');
    if (t.dataset.tab === 'posts') t.classList.add('active');
  });
  // Render the posts grid
  renderProfileTabContent('posts');

  // 6. Action Buttons Control (Edit vs Block/Report)
  const btnEdit = document.getElementById("btn-profile-edit");
  const btnSwitch = document.getElementById("btn-profile-switch");
  const btnBlock = document.getElementById("btn-profile-block");
  const btnReport = document.getElementById("btn-profile-report");
  const blockedBanner = document.getElementById("blocked-profile-banner");
  // The new combined Create button wrapper
  const btnCreateWrap = document.getElementById("btn-profile-create-wrap");

  if (isSelf) {
    btnEdit.style.display = "inline-block";
    btnSwitch.style.display = "inline-block";
    btnBlock.style.display = "none";
    btnReport.style.display = "none";
    blockedBanner.style.display = "none";
    // Show the combined ➕ Create button
    if (btnCreateWrap) btnCreateWrap.style.display = "block";
  } else {
    btnEdit.style.display = "none";
    btnSwitch.style.display = "none";
    btnBlock.style.display = "inline-block";
    btnReport.style.display = "inline-block";
    // Hide create button for other profiles
    if (btnCreateWrap) btnCreateWrap.style.display = "none";
    closeCreateMenu();

    if (isBlocked) {
      btnBlock.classList.add("blocked");
      btnBlock.textContent = "✓ Unblock Athlete";
      blockedBanner.style.display = "flex";
    } else {
      btnBlock.classList.remove("blocked");
      btnBlock.textContent = "🚫 Block Athlete";
      blockedBanner.style.display = "none";
    }
  }
}

/* ============================================================
 * COMBINED CREATE BUTTON — dropdown for Post / Reel
 * ============================================================ */
function toggleCreateMenu(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('create-menu-dropdown');
  if (!dropdown) return;
  const isOpen = dropdown.classList.contains('open');
  dropdown.classList.toggle('open', !isOpen);
}

function closeCreateMenu() {
  const dropdown = document.getElementById('create-menu-dropdown');
  if (dropdown) dropdown.classList.remove('open');
}

// Close create menu when clicking anywhere outside
document.addEventListener('click', function (e) {
  const wrapper = document.getElementById('btn-profile-create-wrap');
  if (wrapper && !wrapper.contains(e.target)) {
    closeCreateMenu();
  }
});

function applyCurrentAthleteToShell(user) {
  if (!user) return;

  // Sidebar Avatar
  const sidebarAvatar = document.getElementById("sidebar-user-avatar");
  if (sidebarAvatar) {
    sidebarAvatar.textContent = user.initials;
    sidebarAvatar.style.background = user.avatarBg;
  }

  // Home Feed Greeting & Sidebar
  const feedGreeting = document.getElementById("feed-user-name");
  if (feedGreeting) feedGreeting.textContent = user.name.split(" ")[0];

  const storyMyAvatar = document.getElementById("story-my-avatar");
  if (storyMyAvatar) {
    storyMyAvatar.textContent = user.initials;
    storyMyAvatar.style.background = user.avatarBg;
    storyMyAvatar.style.color = "#fff";
  }

  const homeSideAvatar = document.getElementById("home-side-avatar");
  if (homeSideAvatar) {
    homeSideAvatar.textContent = user.initials;
    homeSideAvatar.style.background = user.avatarBg;
  }
  const homeSideName = document.getElementById("home-side-name");
  if (homeSideName) homeSideName.textContent = user.name;
  const homeSideHandle = document.getElementById("home-side-handle");
  if (homeSideHandle) homeSideHandle.textContent = user.handle;

  // Community Composer Avatar
  const commComposerAvatar = document.getElementById("comm-composer-avatar");
  if (commComposerAvatar) {
    commComposerAvatar.textContent = user.initials;
    commComposerAvatar.style.background = user.avatarBg;
  }

  // Update feed visibility based on blocked users
  filterBlockedFeedPosts();
  updateSafetyBadges();
}

/**
 * 6. BLOCK & UNBLOCK ENGINE
 */
function triggerBlockForActiveProfile() {
  if (activeViewedProfileId === currentUser.id) return;
  toggleBlockUser(activeViewedProfileId);
}

function toggleBlockUser(userId) {
  const targetUser = findAnyAthlete(userId);
  const targetName = targetUser ? targetUser.name : userId;
  const idx = blockedUsers.indexOf(userId);

  if (idx !== -1) {
    // Unblock
    blockedUsers.splice(idx, 1);
    saveBlockedUsers();
    showToast(`✓ Unblocked ${targetName}. You can now view their updates.`);
  } else {
    // Block
    const confirmBlock = confirm(`Are you sure you want to block ${targetName}?\n\nThey won't be able to see your profile, send you messages, or invite you to matches. Their posts will also be hidden.`);
    if (!confirmBlock) return;

    blockedUsers.push(userId);
    saveBlockedUsers();
    showToast(`🚫 Blocked ${targetName}. Their messages and feed posts have been muted.`);
  }

  // Refresh profile if viewing that user
  if (activeViewedProfileId === userId) {
    renderProfileScreen(targetUser || currentUser);
  }

  // Refresh feed, chat & safety center
  filterBlockedFeedPosts();
  renderChatContactList(activeChatFilter);
  if (activeChatId === userId) {
    renderChatMessages(activeChatId);
  }
  updateSafetyBadges();
}

function filterBlockedFeedPosts() {
  document.querySelectorAll(".post-card[data-author]").forEach((card) => {
    const authorId = card.getAttribute("data-author");
    if (blockedUsers.includes(authorId)) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}

function findAnyAthlete(userId) {
  let found = db.users.find((u) => u.id === userId);
  if (found) return found;

  if (CHATS_DATABASE[userId]) {
    const c = CHATS_DATABASE[userId];
    return {
      id: c.id,
      name: c.name.replace(/[^\w\s]/gi, "").trim(),
      handle: "@" + c.id + "_sports",
      role: "Athlete",
      initials: c.avatarInitial,
      avatarBg: c.avatarBg
    };
  }
  return null;
}

/**
 * 7. REPORT SCAMMER & ABUSE MODAL ENGINE
 */
function toggleReportModal(show) {
  const modal = document.getElementById("report-modal");
  modal.style.display = show ? "flex" : "none";
}

function openReportModalById(userId) {
  const user = findAnyAthlete(userId);
  if (!user) return;
  openReportModal(user);
}

function triggerReportForActiveProfile() {
  if (activeViewedProfileId === currentUser.id) return;
  const user = findAnyAthlete(activeViewedProfileId);
  if (user) openReportModal(user);
}

function triggerReportFromChat() {
  if (CHATS_DATABASE[activeChatId]) {
    const chat = CHATS_DATABASE[activeChatId];
    if (chat.isGroup) {
      showToast("Select an individual athlete from group info to report.");
      return;
    }
    openReportModalById(activeChatId);
  }
}

function openReportModal(targetUser) {
  currentReportTarget = targetUser;

  // Populate Target Info
  document.getElementById("report-target-avatar").textContent = targetUser.initials;
  document.getElementById("report-target-avatar").style.background = targetUser.avatarBg;
  document.getElementById("report-target-name").textContent = targetUser.name;
  document.getElementById("report-target-handle").textContent = `${targetUser.handle} • ${targetUser.role || "Athlete"}`;

  // Reset form
  document.getElementById("form-report-user").reset();
  document.getElementById("pretending-field").style.display = "none";
  document.getElementById("evidence-label").textContent = "Attach Proof / Screenshot (Optional)";
  document.getElementById("evidence-subtext").textContent = "Chat transcripts, fake payment screenshots (PNG, JPG up to 10MB)";

  // Setup radio change listener for pretending
  document.querySelectorAll("input[name='report-reason']").forEach((radio) => {
    radio.onchange = () => {
      const isPretending = radio.value === "pretending";
      document.getElementById("pretending-field").style.display = isPretending ? "flex" : "none";
    };
  });

  toggleReportModal(true);
}

function simulateEvidenceUpload() {
  const fakeFileName = "screenshot_scam_chat_" + Math.floor(1000 + Math.random() * 9000) + ".png";
  document.getElementById("evidence-label").textContent = `✓ Attached: ${fakeFileName}`;
  document.getElementById("evidence-subtext").textContent = "Evidence uploaded to secure Sportify safety vault.";
  showToast("Attachment linked to report ticket!");
}

function handleReportSubmit(event) {
  event.preventDefault();
  if (!currentReportTarget) return;

  const selectedReasonEl = document.querySelector("input[name='report-reason']:checked");
  if (!selectedReasonEl) {
    alert("Please select a report category.");
    return;
  }

  const reasonVal = selectedReasonEl.value;
  const reasonLabels = {
    fake_profile: "Fake profile",
    inappropriate_behaviour: "Inappropriate behaviour",
    fraud: "Fraud & Financial Scam",
    bullying: "Bullying or harassment",
    spam: "Spam & Commercial Promotions",
    violence: "Violence or dangerous organisation",
    pretending: "Pretending to be someone else",
    others: "Others"
  };

  const reasonTitle = reasonLabels[reasonVal] || "Violation";
  const details = document.getElementById("report-details").value.trim();
  const autoBlock = document.getElementById("report-auto-block").checked;
  const pretendWho = reasonVal === "pretending" ? document.getElementById("report-pretend-target").value : null;

  const ticketId = "SPF-" + Math.floor(10000 + Math.random() * 90000);
  const now = new Date();
  const dateStr = now.toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

  const newReport = {
    id: ticketId,
    targetId: currentReportTarget.id,
    targetName: currentReportTarget.name,
    targetHandle: currentReportTarget.handle,
    reasonCode: reasonVal,
    reasonTitle: reasonTitle,
    details: details,
    pretending: pretendWho,
    date: dateStr,
    status: "Under Review ⏳"
  };

  filedReports.unshift(newReport);
  saveFiledReports();

  // Handle auto-block
  if (autoBlock && !blockedUsers.includes(currentReportTarget.id)) {
    blockedUsers.push(currentReportTarget.id);
    saveBlockedUsers();
    filterBlockedFeedPosts();
  }

  toggleReportModal(false);
  updateSafetyBadges();

  alert(
    `✅ Safety Report Received! (Ticket #${ticketId})\n\n` +
    `👤 Reported Athlete: ${currentReportTarget.name}\n` +
    `⚠️ Violation: ${reasonTitle}\n` +
    `🛡️ Status: Assigned to Sportify Safety Desk (Review SLA: < 2 hours)\n\n` +
    `Thank you for protecting our sports community. The reported account has been flagged.`
  );
}

/**
 * 8. SAFETY CENTER & BLOCKED ATHLETES VAULT
 */
function toggleSafetyModal(show) {
  const modal = document.getElementById("safety-modal");
  modal.style.display = show ? "flex" : "none";
  if (show) {
    renderSafetyBlockedList();
    renderSafetyReportsList();
  }
}

function switchSafetyTab(tab) {
  const btnBlocked = document.getElementById("tab-safety-blocked");
  const btnReports = document.getElementById("tab-safety-reports");
  const viewBlocked = document.getElementById("safety-blocked-view");
  const viewReports = document.getElementById("safety-reports-view");

  if (tab === "blocked") {
    btnBlocked.classList.add("active");
    btnReports.classList.remove("active");
    viewBlocked.style.display = "block";
    viewReports.style.display = "none";
    renderSafetyBlockedList();
  } else {
    btnBlocked.classList.remove("active");
    btnReports.classList.add("active");
    viewBlocked.style.display = "none";
    viewReports.style.display = "block";
    renderSafetyReportsList();
  }
}

function renderSafetyBlockedList() {
  const container = document.getElementById("safety-blocked-list");
  if (!container) return;

  if (blockedUsers.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-dim);">
        <p>No athletes currently blocked. Your feed and direct messages are open.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = blockedUsers
    .map((uid) => {
      const user = findAnyAthlete(uid) || { name: uid, handle: "@" + uid, initials: "?", avatarBg: "#374151" };
      return `
        <div class="blocked-user-row">
          <div class="user-avatar" style="background: ${user.avatarBg}">${user.initials}</div>
          <div class="b-info">
            <strong>${escapeHTML(user.name)}</strong>
            <small>${escapeHTML(user.handle)}</small>
          </div>
          <button class="btn-outline" onclick="toggleBlockUser('${uid}')">Unblock</button>
        </div>
      `;
    })
    .join("");
}

function renderSafetyReportsList() {
  const container = document.getElementById("safety-reports-list");
  if (!container) return;

  if (filedReports.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-dim);">
        <p>No safety reports submitted yet. Sportify monitoring active 24/7.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filedReports
    .map(
      (rep) => `
      <div class="report-ticket-card">
        <div class="ticket-header">
          <span class="ticket-id">Ticket #${rep.id}</span>
          <span class="ticket-status">${rep.status}</span>
        </div>
        <div class="ticket-body">
          <p><strong>Reported:</strong> ${escapeHTML(rep.targetName)} (${escapeHTML(rep.targetHandle)})</p>
          <p><strong>Reason:</strong> ${escapeHTML(rep.reasonTitle)}</p>
          <p style="color: var(--text-muted); font-size: 11.5px;">"${escapeHTML(rep.details)}"</p>
        </div>
        <small class="ticket-meta">Submitted on ${rep.date} • Confidential</small>
      </div>
    `
    )
    .join("");
}

function updateSafetyBadges() {
  const blockedBadge = document.getElementById("safety-blocked-count");
  if (blockedBadge) blockedBadge.textContent = blockedUsers.length;

  const reportsBadge = document.getElementById("safety-reports-count");
  if (reportsBadge) reportsBadge.textContent = filedReports.length;
}

/**
 * 9. AUTHENTICATION & LOGIN/SIGN-UP CONTROLLERS
 */
function toggleAuthModal(show) {
  const modal = document.getElementById("auth-modal");
  modal.style.display = show ? "flex" : "none";
  if (show) {
    renderDemoAccounts();
  }
}

function switchAuthTab(tab) {
  const tabs = ["login", "register", "demo"];
  tabs.forEach((t) => {
    const btn = document.getElementById("tab-btn-" + t);
    const form = document.getElementById(t === "demo" ? "demo-accounts-list" : "form-" + t);
    if (btn) btn.classList.remove("active");
    if (form) form.style.display = "none";
  });

  const activeBtn = document.getElementById("tab-btn-" + tab);
  const activeForm = document.getElementById(tab === "demo" ? "demo-accounts-list" : "form-" + tab);
  if (activeBtn) activeBtn.classList.add("active");
  if (activeForm) activeForm.style.display = "block";
}

function renderDemoAccounts() {
  const container = document.getElementById("demo-users-container");
  if (!container) return;

  container.innerHTML = db.users
    .map(
      (u) => `
      <div class="demo-athlete-item ${currentUser && u.id === currentUser.id ? "active" : ""}" onclick="loginUserById('${u.id}')">
        <div class="user-avatar" style="background: ${u.avatarBg}">${u.initials}</div>
        <div class="demo-athlete-info">
          <strong>${escapeHTML(u.name)} <span class="verified-badge">✓</span></strong>
          <small>${escapeHTML(u.handle)} • ${escapeHTML(u.role)}</small>
        </div>
        <span class="demo-select-badge">${currentUser && u.id === currentUser.id ? "Active ✓" : "Switch ➔"}</span>
      </div>
    `
    )
    .join("");
}

function loginUserById(userId) {
  const found = db.users.find((u) => u.id === userId);
  if (!found) return;

  currentUser = found;
  saveCurrentSession(found.id);
  activeViewedProfileId = found.id;
  applyCurrentAthleteToShell(currentUser);
  renderProfileScreen(currentUser);
  toggleAuthModal(false);

  showToast(`⚡ Switched profile to ${currentUser.name}!`);
}

function handleLogin(event) {
  event.preventDefault();
  const inputUser = document.getElementById("login-username").value.trim();
  const inputPass = document.getElementById("login-password").value;

  const normalizedInput = inputUser.replace(/^@/, "").toLowerCase();

  const user = db.users.find(
    (u) =>
      u.username.toLowerCase() === normalizedInput ||
      u.handle.toLowerCase() === "@" + normalizedInput ||
      u.name.toLowerCase() === normalizedInput
  );

  if (!user) {
    alert("❌ No athlete account found with username: " + inputUser);
    return;
  }

  if (user.password !== inputPass) {
    alert("❌ Incorrect password. (Demo password is: sportify123)");
    return;
  }

  currentUser = user;
  saveCurrentSession(user.id);
  activeViewedProfileId = user.id;
  applyCurrentAthleteToShell(currentUser);
  renderProfileScreen(currentUser);
  toggleAuthModal(false);
  document.getElementById("form-login").reset();

  showToast(`Welcome back, ${currentUser.name}! 🏆`);
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  let handle = document.getElementById("reg-handle").value.trim();
  if (!handle.startsWith("@")) handle = "@" + handle;
  const username = handle.replace("@", "").toLowerCase();
  const sport = document.getElementById("reg-sport").value;
  const role = document.getElementById("reg-role").value.trim()
  const password = document.getElementById("reg-password").value;
  const bio = document.getElementById("reg-bio").value.trim()

  if (db.users.some((u) => u.username === username || u.handle.toLowerCase() === handle.toLowerCase())) {
    alert("⚠️ This username/handle is already registered. Please choose another.");
    return;
  }

  const nameParts = name.split(" ");
  const initials = (nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : "")).toUpperCase();

  const newUser = {
    id: "user_" + Date.now(),
    username: username,
    handle: handle,
    password: password,
    name: name,
    role: role || "",
    initials: initials,
    avatarBg: "linear-gradient(135deg, #00838f, #1b5e20)",
    bannerGradient: "linear-gradient(135deg, #1565c0, #1b5e20, #00838f)",
    bannerEmojis: "",
    bio: bio,
    badges: [],
    stats: {
      posts: 0,
      followers: 0,
      following: 0,
      matches: 0,
      trophies: 0
    },
    gallery: []
  };

  db.users.push(newUser);
  saveDatabase();

  currentUser = newUser;
  saveCurrentSession(newUser.id);
  activeViewedProfileId = newUser.id;
  applyCurrentAthleteToShell(currentUser);
  renderProfileScreen(currentUser);

  toggleAuthModal(false);
  document.getElementById("form-register").reset();
  showToast(`🎉 Welcome to Sportify, ${newUser.name}! Profile live.`);
}

/**
 * 10. EDIT PROFILE CONTROLLER
 */
function toggleEditProfileModal(show) {
  const modal = document.getElementById("edit-profile-modal");
  modal.style.display = show ? "flex" : "none";
}

function openEditProfileModal() {
  if (!currentUser) return;
  document.getElementById("edit-name").value = currentUser.name || "";
  document.getElementById("edit-handle").value = currentUser.handle || "";
  document.getElementById("edit-role").value = currentUser.role || "";
  document.getElementById("edit-bio").value = currentUser.bio || "";
  document.getElementById("edit-badges").value = Array.isArray(currentUser.badges) ? currentUser.badges.join(", ") : "";

  toggleEditProfileModal(true);
}

async function handleSaveProfile(event) {
  event.preventDefault();

  if (!currentUser) {
    alert("No active athlete account found to update.");
    return;
  }

  const nameInput = document.getElementById("edit-name").value.trim();
  const handleInput = document.getElementById("edit-handle").value.trim();
  const roleInput = document.getElementById("edit-role").value.trim();
  const bioInput = document.getElementById("edit-bio").value.trim();
  const badgesInput = document.getElementById("edit-badges").value;

  // 1. Validation
  if (!nameInput) {
    alert("Please enter your Full Name.");
    return;
  }
  if (!handleInput) {
    alert("Please enter your Handle / Username.");
    return;
  }

  const cleanUsername = handleInput.replace(/^@+/, "").trim();
  const cleanHandle = "@" + cleanUsername;
  const badgesArray = badgesInput
    .split(",")
    .map((b) => b.trim())
    .filter(Boolean);

  console.log("SUPABASE PROFILE UPDATE: Initiating save...", {
    full_name: nameInput,
    username: cleanUsername,
    role: roleInput,
    bio: bioInput,
    badges: badgesArray
  });

  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(currentUser.id || "");
  const userPhone = currentUser.mobile || currentUser.phone || localStorage.getItem("sportifyMobile");

  if (typeof supabaseClient === "undefined") {
    console.error("SUPABASE PROFILE UPDATE ERROR: supabaseClient is unavailable.");
    alert("Supabase database connection is unavailable. Changes were not saved.");
    return;
  }

  // 2. Prepare payload with fields that exist in the database
  const updatePayload = {
    full_name: nameInput,
    username: cleanUsername,
    username_normalized: cleanUsername.toLowerCase(),
    role: roleInput,
    bio: bioInput,
    badges: badgesArray,
    updated_at: new Date().toISOString()
  };

  // 3. Safe identifier lookup
  let updateQuery = supabaseClient.from("profiles").update(updatePayload);

  if (isUuid) {
    updateQuery = updateQuery.eq("id", currentUser.id);
  } else if (userPhone) {
    updateQuery = updateQuery.eq("phone", userPhone);
  } else {
    alert("Could not identify your profile row in the database. Please relogin.");
    return;
  }

  try {
    const { data, error } = await updateQuery.select().maybeSingle();

    if (error) {
      console.error("SUPABASE PROFILE UPDATE ERROR:", error);
      alert("Failed to save profile changes to Supabase:\n\n" + error.message);
      return;
    }

    if (!data) {
      console.error("SUPABASE PROFILE UPDATE ERROR: 0 rows updated.");
      alert("Failed to save changes: Profile record was not found in Supabase.");
      return;
    }

    console.log("SUPABASE PROFILE UPDATE SUCCESS:", data);

    // 4. Update local currentUser object
    currentUser.id = data.id;
    currentUser.supabaseId = data.id;
    currentUser.name = data.full_name;
    currentUser.handle = cleanHandle;
    currentUser.username = cleanUsername;
    currentUser.role = data.role || "";
    currentUser.bio = data.bio || "";
    currentUser.badges = Array.isArray(data.badges) ? data.badges : [];

    const parts = currentUser.name.trim().split(/\s+/);
    currentUser.initials = (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();

    // 5. Keep localStorage synchronized
    localStorage.setItem("sportify_registered_user", JSON.stringify(currentUser));
    localStorage.setItem("sportifyUserName", currentUser.name);
    localStorage.setItem("sportifyUserId", data.id);

    // Update demo db user if present
    const idx = db.users.findIndex((u) => u.id === currentUser.id);
    if (idx !== -1) {
      db.users[idx] = currentUser;
      saveDatabase();
    }

    // 6. Update visible UI
    applyCurrentAthleteToShell(currentUser);
    renderProfileScreen(currentUser);
    toggleEditProfileModal(false);
    showToast("Profile updated & saved to Supabase! ✨");

  } catch (err) {
    console.error("SUPABASE PROFILE UPDATE EXCEPTION:", err);
    alert("Unexpected error updating profile: " + err.message);
  }
}

/**
 * 11. COMMUNITIES INTERFACE LOGIC
 */
function switchCommunity(communityId, iconEl) {
  currentCommunityId = communityId;
  currentChannelIndex = 0;
  const comm = COMMUNITIES_DATABASE[communityId];
  if (!comm) return;

  // Update active icon on switcher rail
  document.querySelectorAll(".community-icon").forEach((el) => el.classList.remove("active"));
  if (iconEl) iconEl.classList.add("active");

  // Update Community Title & Banner
  document.getElementById("comm-active-title").textContent = comm.name;
  document.getElementById("comm-active-members").textContent = comm.membersText;
  document.getElementById("comm-welcome-head").textContent = comm.welcomeHead;
  document.getElementById("comm-welcome-body").textContent = comm.welcomeBody;
  document.getElementById("comm-welcome-banner").style.background = comm.gradient;

  // Render Channels in Sidebar
  renderCommunityChannels(comm);

  // Render Members in Right Rail
  renderCommunityRoster(comm.roster);

  // Select first channel by default
  selectChannel(0);

  showToast(`Entered ${comm.name} space 🌐`);
}

function renderCommunityChannels(comm) {
  const container = document.getElementById("community-channels-container");
  if (!container || !comm.channels) return;

  container.innerHTML = `
    <div class="channel-group">
      <span class="category-title">💬 DISCUSSION TOPICS</span>
      ${comm.channels
      .map(
        (ch, idx) => `
        <div class="channel-link ${idx === currentChannelIndex ? "active" : ""}" onclick="selectChannel(${idx})">
          <span># ${escapeHTML(ch.name)}</span>
          ${ch.badge ? `<span class="badge-mini">${ch.badge}</span>` : ""}
        </div>
      `
      )
      .join("")}
    </div>
    <div class="channel-group">
      <span class="category-title">🎙️ ATHLETE AUDIO LOUNGES</span>
      <div class="channel-link" onclick="showToast('Connecting to Match Review Lounge audio... 🎧')">🔊 Match Review Lounge</div>
      <div class="channel-link" onclick="showToast('Connecting to Post-Game Hangout... 🎧')">🔊 Post-Game Hangout</div>
    </div>
  `;
}

function selectChannel(channelIndex) {
  currentChannelIndex = channelIndex;
  const comm = COMMUNITIES_DATABASE[currentCommunityId];
  if (!comm || !comm.channels[channelIndex]) return;

  const ch = comm.channels[channelIndex];

  // Update channel sidebar active class
  document.querySelectorAll(".channel-link").forEach((el, idx) => {
    if (idx < comm.channels.length) {
      el.classList.toggle("active", idx === channelIndex);
    }
  });

  // Update Main Feed Header
  document.getElementById("comm-current-topic").textContent = `# ${ch.name}`;
  document.getElementById("comm-current-desc").textContent = ch.desc;

  // Render Specific Channel Posts
  renderCommunityPosts(ch.posts);
}

function renderCommunityPosts(posts) {
  const container = document.getElementById("community-posts-list");
  if (!container) return;

  if (!posts || posts.length === 0) {
    container.innerHTML = `
      <div class="card-panel" style="text-align: center; color: var(--text-dim); padding: 30px;">
        <p>No posts in this channel yet. Be the first athlete to start the discussion!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = posts
    .map(
      (p) => `
      <div class="community-msg-card">
        <div class="user-avatar" style="background: ${p.avatarBg || "linear-gradient(135deg, #1565c0, #0d47a1)"}">${p.avatar}</div>
        <div class="msg-content-box">
          <div class="msg-author-row">
            <strong>${escapeHTML(p.author)}</strong>
            <span class="role-tag">${escapeHTML(p.role)}</span>
            <small>${p.time}</small>
          </div>
          <p>${escapeHTML(p.text).replace(/\n/g, "<br />")}</p>
          ${p.tags && p.tags.length
          ? `<div class="community-post-tags">${p.tags
            .map((t) => `<span class="post-subtag">${escapeHTML(t)}</span>`)
            .join(" ")}</div>`
          : ""
        }
          <div class="reactions-row">
            ${Object.entries(p.reactions || {})
          .map(([emoji, count]) => `<button class="rx-pill" onclick="toggleRx(this)">${emoji} ${count}</button>`)
          .join("")}
            <button class="rx-reply" onclick="focusComposer()">Reply</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function renderCommunityRoster(roster) {
  const rail = document.getElementById("community-roster-rail");
  if (!rail || !roster) return;

  rail.innerHTML = `
    <h4>LEADERS — ${roster.leaders.length}</h4>
    ${roster.leaders
      .map(
        (m) => `
      <div class="member-entry cursor-pointer" onclick="viewAthleteProfile('${m.id || "rahul"}')">
        <div class="avatar-tiny ${m.bg}">${m.avatar}</div>
        <span>${escapeHTML(m.name)}</span>
        <span class="badge-role-mini">${escapeHTML(m.role)}</span>
        <span class="${m.status === "online" ? "dot-online" : "dot-away"}"></span>
      </div>
    `
      )
      .join("")}

    <h4>MEMBERS — ${roster.members.length}</h4>
    ${roster.members
      .map(
        (m) => `
      <div class="member-entry cursor-pointer" onclick="viewAthleteProfile('${m.id || "priya"}')">
        <div class="avatar-tiny ${m.bg}">${m.avatar}</div>
        <span>${escapeHTML(m.name)}</span>
        <span class="badge-role-mini">${escapeHTML(m.role)}</span>
        <span class="${m.status === "online" ? "dot-online" : "dot-away"}"></span>
      </div>
    `
      )
      .join("")}
  `;
}

function toggleJoinCommunity(btn) {
  if (btn.textContent.includes("Joined")) {
    btn.textContent = "+ Join Community";
    btn.classList.replace("btn-primary", "btn-outline");
    showToast("Left community feed.");
  } else {
    btn.textContent = "Joined ✓";
    btn.classList.replace("btn-outline", "btn-primary");
    showToast("You are now a member of this community! 🏆");
  }
}

function addPostTag(tag) {
  const input = document.getElementById("comm-post-input");
  input.value += ` ${tag} `;
  input.focus();
}

function handleCommunityPostEnter(event) {
  if (event.key === "Enter") {
    submitCommunityPost();
  }
}

function submitCommunityPost() {
  const input = document.getElementById("comm-post-input");
  const text = input.value.trim();
  if (!text) return;

  const comm = COMMUNITIES_DATABASE[currentCommunityId];
  if (!comm || !comm.channels[currentChannelIndex]) return;

  const ch = comm.channels[currentChannelIndex];

  const newPost = {
    author: currentUser.name,
    role: currentUser.role || "Athlete Member",
    avatar: currentUser.initials,
    avatarBg: currentUser.avatarBg,
    time: "Just now",
    text: text,
    tags: ["#CommunityPost"],
    reactions: { "🔥": 1 }
  };

  ch.posts.unshift(newPost);
  renderCommunityPosts(ch.posts);
  input.value = "";
  showToast("Post shared to channel! 🚀");
}

function focusComposer() {
  const input = document.getElementById("comm-post-input");
  input.focus();
  input.scrollIntoView({ behavior: "smooth", block: "center" });
}

function toggleRx(btn) {
  btn.classList.toggle("active");
  const parts = btn.textContent.trim().split(" ");
  let count = parseInt(parts[1], 10);
  if (isNaN(count)) count = 1;
  if (btn.classList.contains("active")) {
    btn.textContent = `${parts[0]} ${count + 1}`;
  } else {
    btn.textContent = `${parts[0]} ${count - 1}`;
  }
}

function openCreateCommunityPrompt() {
  const name = prompt("Enter new Sports Community Name (e.g. Bhopal Runners Club):");
  if (name && name.trim()) {
    alert(`🎉 "${name}" community request created! Awaiting federation verification.`);
  }
}

/**
 * 12. CHAT SYSTEM WITH BLOCK STATUS INTERCEPT
 */
function renderChatContactList(filter = "all", searchQuery = "") {
  const container = document.getElementById("chat-contact-list");
  if (!container) return;

  let chatEntries = Object.values(CHATS_DATABASE);

  if (filter === "teams") {
    chatEntries = chatEntries.filter((c) => c.isGroup);
  } else if (filter === "unread") {
    chatEntries = chatEntries.filter((c) => c.unread > 0);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    chatEntries = chatEntries.filter((c) => c.name.toLowerCase().includes(q) || c.preview.toLowerCase().includes(q));
  }

  container.innerHTML = chatEntries
    .map((c) => {
      const isActive = c.id === activeChatId;
      const isBlocked = blockedUsers.includes(c.id);
      return `
        <div class="contact-card ${isActive ? "active" : ""}" onclick="switchChat('${c.id}')">
          <div class="avatar-relative">
            <div class="user-avatar" style="background: ${c.avatarBg}">${c.avatarInitial}</div>
            ${c.status.includes("Online") && !isBlocked ? '<span class="online-indicator"></span>' : ""}
          </div>
          <div class="contact-brief">
            <div class="name-line">
              <strong>${escapeHTML(c.contactName)}</strong>
              <small>${c.time}</small>
            </div>
            <p class="preview-text">${isBlocked ? "🚫 Athlete Blocked" : escapeHTML(c.preview)}</p>
          </div>
          ${c.unread > 0 && !isBlocked ? `<span class="unread-count">${c.unread}</span>` : ""}
        </div>
      `;
    })
    .join("");

  // Update unread count badge in header
  const totalUnread = Object.values(CHATS_DATABASE).reduce((acc, c) => acc + (blockedUsers.includes(c.id) ? 0 : c.unread || 0), 0);
  const unreadPill = document.getElementById("badge-chat-count");
  if (unreadPill) unreadPill.textContent = totalUnread;
  const filterUnreadNum = document.getElementById("chat-filter-unread-num");
  if (filterUnreadNum) filterUnreadNum.textContent = totalUnread;
}

// Cache resolved Supabase conversation IDs to minimize redundant network roundtrips
const CONVERSATION_ID_CACHE = {};
const PRIVATE_CHAT_SESSIONS = {}; // key: chatId ('private_<uuid>') -> Supabase conversation UUID

/**
 * Find or create a Supabase conversation row and ensure membership.
 */
async function getOrCreateSupabaseConversation(chatId) {
  if (typeof supabaseClient === "undefined") return null;

  if (PRIVATE_CHAT_SESSIONS[chatId]) {
    return PRIVATE_CHAT_SESSIONS[chatId];
  }
  if (CONVERSATION_ID_CACHE[chatId]) {
    return CONVERSATION_ID_CACHE[chatId];
  }

  const chat = CHATS_DATABASE[chatId];

  // If this is a private chat with a registered user, delegate to private conversation handler
  if (chat?.isPrivate || (typeof chatId === "string" && chatId.startsWith("private_"))) {
    const targetProfileId = chat?.profileId || chatId.replace("private_", "");
    const targetName = chat?.name || chat?.contactName || "User";
    const convId = await getOrCreatePrivateConversation(targetProfileId, targetName);
    if (convId) {
      PRIVATE_CHAT_SESSIONS[chatId] = convId;
      CONVERSATION_ID_CACHE[chatId] = convId;
      return convId;
    }
  }

  const currentUserId = await getVerifiedCurrentUserId();
  if (!currentUserId) {
    console.error("SUPABASE CONVERSATION LOOKUP ERROR: currentUserId is null or unverifiable.");
    return null;
  }

  console.log("CONVERSATION LOOKUP: Checking Supabase for chatId:", chatId, "currentUserId:", currentUserId);

  const cleanTitle = chat ? chat.name.replace(/[^\w\s]/gi, "").trim() : chatId;
  const isGroup = chat ? !!chat.isGroup : false;

  try {
    // 1. Check existing memberships of currentUser
    const { data: userMemberships, error: memberErr } = await supabaseClient
      .from("conversation_members")
      .select("conversation_id")
      .eq("user_id", currentUserId);

    if (memberErr) {
      console.error("SUPABASE CONVERSATION LOOKUP ERROR (memberships):", memberErr);
    }

    if (userMemberships && userMemberships.length > 0) {
      const convoIds = userMemberships.map((m) => m.conversation_id);

      // Check if chatId is another real user profile UUID
      const isTargetUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(chatId);
      if (isTargetUuid) {
        const { data: targetMemberships } = await supabaseClient
          .from("conversation_members")
          .select("conversation_id")
          .in("conversation_id", convoIds)
          .eq("user_id", chatId);

        if (targetMemberships && targetMemberships.length > 0) {
          const matchId = targetMemberships[0].conversation_id;
          console.log("CONVERSATION REUSED (1-on-1 real users):", matchId);
          CONVERSATION_ID_CACHE[chatId] = matchId;
          return matchId;
        }
      }

      // Check conversations with matching title
      const { data: existingConvos, error: convoErr } = await supabaseClient
        .from("conversations")
        .select("*")
        .in("id", convoIds);

      if (convoErr) {
        console.error("SUPABASE CONVERSATION LOOKUP ERROR (conversations):", convoErr);
      }

      if (existingConvos && existingConvos.length > 0) {
        const match = existingConvos.find(
          (c) =>
            c.title === cleanTitle ||
            c.title === (chat && chat.name) ||
            c.title === (chat && chat.contactName) ||
            c.title === chatId
        );
        if (match) {
          console.log("CONVERSATION REUSED (membership match):", match.id, match.title);
          CONVERSATION_ID_CACHE[chatId] = match.id;
          return match.id;
        }
      }
    }

    // 2. Check if a global conversation exists with matching title (e.g. Rahul Mehta 'c0000001-0000-0000-0000-000000000001')
    const { data: titleMatch, error: titleErr } = await supabaseClient
      .from("conversations")
      .select("*")
      .or(`title.eq.${cleanTitle},title.eq.${chat ? chat.name : cleanTitle},title.eq.${chatId}`)
      .limit(1)
      .maybeSingle();

    if (titleMatch) {
      console.log("CONVERSATION REUSED (global title match):", titleMatch.id, titleMatch.title);

      // Ensure currentUser is added to conversation_members
      await supabaseClient
        .from("conversation_members")
        .insert({
          conversation_id: titleMatch.id,
          user_id: currentUserId
        });

      CONVERSATION_ID_CACHE[chatId] = titleMatch.id;
      return titleMatch.id;
    }

    // 3. Create a new conversation if not found
    console.log("CONVERSATION CREATION: Creating new conversation in Supabase for:", cleanTitle);
    const { data: newConvo, error: createErr } = await supabaseClient
      .from("conversations")
      .insert({
        title: cleanTitle,
        is_group: isGroup
      })
      .select()
      .single();

    if (createErr) {
      console.error("SUPABASE CONVERSATION CREATION ERROR:", createErr);
      return null;
    }

    console.log("CONVERSATION CREATED IN SUPABASE:", newConvo);

    // Add currentUser as member
    await supabaseClient
      .from("conversation_members")
      .insert({
        conversation_id: newConvo.id,
        user_id: currentUserId
      });

    // If target user is a real profile, add target user as member
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(chatId)) {
      await supabaseClient
        .from("conversation_members")
        .insert({
          conversation_id: newConvo.id,
          user_id: chatId
        });
    }

    CONVERSATION_ID_CACHE[chatId] = newConvo.id;
    return newConvo.id;

  } catch (err) {
    console.error("SUPABASE CONVERSATION LOOKUP EXCEPTION:", err);
    return null;
  }
}

/**
 * Load persisted messages from Supabase in chronological order and merge with demo base messages.
 */
async function loadChatMessagesFromSupabase(chatId) {
  if (typeof supabaseClient === "undefined") return;

  const chat = CHATS_DATABASE[chatId];
  if (!chat) return;

  // Route private chats with registered users to the dedicated private messages loader
  if (chat.isPrivate || (typeof chatId === "string" && chatId.startsWith("private_"))) {
    const targetProfileId = chat.profileId || chatId.replace("private_", "");
    const conversationId =
      PRIVATE_CHAT_SESSIONS[chatId] ||
      CONVERSATION_ID_CACHE[chatId] ||
      (await getOrCreatePrivateConversation(targetProfileId, chat.name || chat.contactName || "User"));
    if (conversationId) {
      PRIVATE_CHAT_SESSIONS[chatId] = conversationId;
      CONVERSATION_ID_CACHE[chatId] = conversationId;
      await loadPrivateMessages(chatId, conversationId, targetProfileId);
    }
    return;
  }

  try {
    const currentUserId = await getVerifiedCurrentUserId();
    if (!currentUserId) return;

    const conversationId = await getOrCreateSupabaseConversation(chatId);
    if (!conversationId) return;

    console.log("LOADING MESSAGES for conversation:", conversationId, "chatId:", chatId);

    const { data: dbMessages, error } = await supabaseClient
      .from("messages")
      .select("id, conversation_id, sender_id, content, created_at")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("SUPABASE MESSAGE LOADING ERROR:", error);
      return;
    }

    console.log(`MESSAGES LOADED FROM SUPABASE for ${chatId}:`, dbMessages.length, "messages");

    const baseDemo = INITIAL_DEMO_MESSAGES[chatId] || [];

    // Map Supabase rows to chat format
    const mappedDbMessages = dbMessages.map((m) => {
      const isOutgoing = m.sender_id === currentUserId;
      const dateObj = new Date(m.created_at);
      const timeStr = !isNaN(dateObj)
        ? dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : "Just now";

      return {
        id: m.id,
        isOutgoing: isOutgoing,
        senderName: isOutgoing ? currentUser.name : (chat.name.replace(/[^\w\s]/gi, "").trim()),
        avatar: isOutgoing ? (currentUser.initials || "ME") : chat.avatarInitial,
        avatarBg: isOutgoing ? (currentUser.avatarBg || "linear-gradient(135deg, #00838f, #1b5e20)") : chat.avatarBg,
        text: m.content,
        time: timeStr,
        created_at: m.created_at
      };
    });

    // Merge base demo messages + DB messages without duplicating IDs
    const existingIds = new Set(baseDemo.map((m) => m.id));
    const combined = [...baseDemo];

    for (const msg of mappedDbMessages) {
      if (!existingIds.has(msg.id)) {
        combined.push(msg);
        existingIds.add(msg.id);
      }
    }

    chat.messages = combined;

    if (chat.messages.length > 0) {
      const lastMsg = chat.messages[chat.messages.length - 1];
      chat.preview = (lastMsg.isOutgoing ? "You: " : "") + lastMsg.text;
      chat.time = lastMsg.time;
    }

    if (activeChatId === chatId) {
      renderChatMessages(chatId);
    }
    renderChatContactList(activeChatFilter);

  } catch (err) {
    console.error("SUPABASE MESSAGE LOADING EXCEPTION:", err);
  }
}

function switchChat(chatId) {
  if (!CHATS_DATABASE[chatId]) {
    const athlete = findAnyAthlete(chatId);
    if (athlete) {
      CHATS_DATABASE[chatId] = {
        id: athlete.id,
        name: athlete.name,
        contactName: athlete.name,
        status: "● Active Athlete",
        isGroup: false,
        avatarInitial: athlete.initials || athlete.name.charAt(0),
        avatarBg: athlete.avatarBg || "linear-gradient(135deg, #1565c0, #0d47a1)",
        unread: 0,
        preview: "Direct conversation",
        time: "Just now",
        messages: []
      };
      if (!INITIAL_DEMO_MESSAGES[chatId]) {
        INITIAL_DEMO_MESSAGES[chatId] = [];
      }
    } else if (typeof chatId === "string" && chatId.startsWith("private_")) {
      const targetProfileId = chatId.replace("private_", "");
      CHATS_DATABASE[chatId] = {
        id: chatId,
        profileId: targetProfileId,
        name: "Sportify Athlete",
        contactName: "Sportify Athlete",
        status: "● Registered Sportify User",
        isGroup: false,
        avatarInitial: "SA",
        avatarBg: "linear-gradient(135deg, #7c3aed, #2979ff)",
        unread: 0,
        preview: "Direct conversation",
        time: "Just now",
        messages: [],
        isPrivate: true
      };
    } else {
      return;
    }
  }

  activeChatId = chatId;
  const chat = CHATS_DATABASE[chatId];

  // Mark as read
  chat.unread = 0;

  // Update Header
  document.getElementById("active-chat-name").textContent = chat.name;
  document.getElementById("active-chat-status").textContent = chat.status;

  const headerAvatar = document.getElementById("active-chat-avatar");
  if (headerAvatar) {
    headerAvatar.textContent = chat.avatarInitial;
    headerAvatar.style.background = chat.avatarBg;
  }

  // Render current messages immediately
  renderChatMessages(chatId);

  // Re-render sidebar contacts
  renderChatContactList(activeChatFilter);

  // Load latest persistent messages from Supabase in background
  if (chat.isPrivate || (typeof chatId === "string" && chatId.startsWith("private_"))) {
    const targetProfileId = chat.profileId || chatId.replace("private_", "");
    const targetName = chat.name || chat.contactName || "User";
    (async () => {
      const conversationId =
        PRIVATE_CHAT_SESSIONS[chatId] ||
        CONVERSATION_ID_CACHE[chatId] ||
        (await getOrCreatePrivateConversation(targetProfileId, targetName));
      if (conversationId) {
        PRIVATE_CHAT_SESSIONS[chatId] = conversationId;
        CONVERSATION_ID_CACHE[chatId] = conversationId;
        await loadPrivateMessages(chatId, conversationId, targetProfileId);
      }
    })();
  } else {
    loadChatMessagesFromSupabase(chatId);
  }
}

function renderChatMessages(chatId) {
  const stream = document.getElementById("chat-stream");
  const blockAlert = document.getElementById("chat-blocked-alert");
  const inputBar = document.getElementById("chat-input-bar-container");

  if (!stream) return;

  const chat = CHATS_DATABASE[chatId];
  const isBlocked = blockedUsers.includes(chatId);

  if (isBlocked) {
    if (blockAlert) blockAlert.style.display = "flex";
    if (inputBar) inputBar.classList.add("disabled");
  } else {
    if (blockAlert) blockAlert.style.display = "none";
    if (inputBar) inputBar.classList.remove("disabled");
  }

  if (!chat || !chat.messages) {
    stream.innerHTML = '<div class="date-divider"><span>No messages yet</span></div>';
    return;
  }

  let html = '<div class="date-divider"><span>Today</span></div>';

  html += chat.messages
    .map((msg) => {
      if (msg.isOutgoing) {
        return `
          <div class="msg-bubble-group outgoing">
            <div class="bubble-stack">
              <div class="chat-bubble">${escapeHTML(msg.text)}</div>
              <span class="msg-time">${msg.time}</span>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="msg-bubble-group incoming">
            <div class="user-avatar avatar-mini" style="background: ${msg.avatarBg || chat.avatarBg}">
              ${msg.avatar || chat.avatarInitial}
            </div>
            <div class="bubble-stack">
              ${chat.isGroup && msg.senderName
            ? `<div class="sender-name-label">
                      ${escapeHTML(msg.senderName)}
                      ${msg.senderRole ? `<span class="sender-role-pill">${escapeHTML(msg.senderRole)}</span>` : ""}
                    </div>`
            : ""
          }
              <div class="chat-bubble">
                ${msg.attachment ? `<div class="chat-img-attachment">${escapeHTML(msg.attachment)}</div>` : ""}
                ${escapeHTML(msg.text)}
              </div>
              <span class="msg-time">${msg.time}</span>
            </div>
          </div>
        `;
      }
    })
    .join("");

  stream.innerHTML = html;
  stream.scrollTop = stream.scrollHeight;
}

function applyChatFilter(filter, pillBtn) {
  activeChatFilter = filter;
  document.querySelectorAll(".chat-filter-pills .f-pill").forEach((p) => p.classList.remove("active"));
  if (pillBtn) pillBtn.classList.add("active");
  renderChatContactList(filter);
}

function filterChatContacts(query) {
  renderChatContactList(activeChatFilter, query);
}

function handleChatEnter(event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
}

async function sendChatMessage() {
  if (blockedUsers.includes(activeChatId)) {
    alert("You have blocked this athlete. Unblock them first to send messages.");
    return;
  }

  const input = document.getElementById("input-message");
  const msgText = input.value.trim();
  if (!msgText) return;

  const chat = CHATS_DATABASE[activeChatId];
  if (!chat) return;

  const now = new Date();
  const timeFormatted = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // 1. Optimistically display in UI immediately
  const tempMsgId = "msg_temp_" + Date.now();
  const optimisticMsg = {
    id: tempMsgId,
    isOutgoing: true,
    senderName: currentUser?.name || 'Me',
    avatar: currentUser?.initials || 'ME',
    avatarBg: currentUser?.avatarBg || 'linear-gradient(135deg,#00c853,#1565c0)',
    text: msgText,
    time: timeFormatted,
    pending: true
  };

  chat.messages.push(optimisticMsg);
  chat.preview = `You: ${msgText}`;
  chat.time = timeFormatted;

  input.value = "";

  renderChatMessages(activeChatId);
  renderChatContactList(activeChatFilter);

  // ── PRIVATE CHAT: route to dedicated Supabase private chat sender ──
  if (chat.isPrivate) {
    // NOTE: Do NOT delete optimisticMsg.pending here.
    // The realtime subscription handler uses the `pending` flag to locate
    // and remove this optimistic message before inserting the confirmed one.
    // Deleting it early causes the confirmed message to be added as a duplicate.
    sendPrivateChatMessage(activeChatId, msgText);
    return;
  }

  // If Supabase is unavailable, stay in local/demo mode
  if (typeof supabaseClient === "undefined") {
    console.warn("SUPABASE WARNING: Offline mode, message not persisted to database.");
    delete optimisticMsg.pending;
    triggerAutomatedReply(activeChatId);
    return;
  }

  // 2. Persist message in Supabase (demo chats)
  try {
    const currentUserId = await getVerifiedCurrentUserId();
    if (!currentUserId) {
      throw new Error("User identity could not be verified in Supabase.");
    }

    const conversationId = await getOrCreateSupabaseConversation(activeChatId);
    if (!conversationId) {
      console.warn("SUPABASE WARNING: Could not resolve conversation. Message shown locally only.");
      delete optimisticMsg.pending;
      triggerAutomatedReply(activeChatId);
      return;
    }

    const { data: savedMsg, error } = await supabaseClient
      .from("messages")
      .insert({
        conversation_id: conversationId,
        sender_id: currentUserId,
        content: msgText,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error("SUPABASE MESSAGE INSERT ERROR:", error);
      delete optimisticMsg.pending;
      triggerAutomatedReply(activeChatId);
      showToast("⚠️ Message sent locally but could not be saved to database.");
      return;
    }

    console.log("SUPABASE MESSAGE INSERT SUCCESS:", savedMsg);
    optimisticMsg.id = savedMsg.id;
    optimisticMsg.created_at = savedMsg.created_at;
    delete optimisticMsg.pending;
    triggerAutomatedReply(activeChatId);

  } catch (err) {
    console.error("SUPABASE MESSAGE INSERT EXCEPTION:", err);
    delete optimisticMsg.pending;
    triggerAutomatedReply(activeChatId);
    showToast("⚠️ Message sent locally but could not reach the database.");
  }
}

function triggerAutomatedReply(chatId) {
  if (blockedUsers.includes(chatId)) return;

  const chat = CHATS_DATABASE[chatId];
  if (!chat) return;

  setTimeout(() => {
    if (!CHATS_DATABASE[chatId] || blockedUsers.includes(chatId)) return;

    let replyText = "Got it! See you on the ground! ⚡";
    let senderName = chat.name.replace(/[^\w\s]/gi, "").trim();
    let senderAvatar = chat.avatarInitial;
    let senderBg = chat.avatarBg;
    let senderRole = "Athlete";

    if (chatId === "rahul") {
      replyText = "Sounds good! Coach said boots inspection is at 6:15 AM sharp. Bring the match kit!";
      senderRole = "Captain";
    } else if (chatId === "bhopal-strikers") {
      replyText = "Coach R. Rathore: Excellent commitment. Make sure everyone gets adequate rest tonight!";
      senderName = "Coach R. Rathore";
      senderAvatar = "RR";
      senderBg = "linear-gradient(135deg, #b71c1c, #c62828)";
      senderRole = "Head Coach";
    } else if (chatId === "priya") {
      replyText = "Awesome, locking you in for the 3x3 court roster at 6 PM! 🏀";
      senderRole = "Point Guard";
    } else if (chatId === "arjun") {
      replyText = "Done! I'll carry my extra bat for you to test during practice.";
      senderRole = "Batsman";
    } else if (chatId === "sneha") {
      replyText = "Perfect! Court 2 is confirmed for our tie-break sets. 🎾";
      senderRole = "Seed #1";
    }

    const now = new Date();
    const timeFormatted = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    chat.messages.push({
      id: "reply_" + Date.now(),
      isOutgoing: false,
      senderName: senderName,
      senderRole: senderRole,
      avatar: senderAvatar,
      avatarBg: senderBg,
      text: replyText,
      time: timeFormatted
    });

    chat.preview = replyText;
    chat.time = timeFormatted;

    if (activeChatId === chatId) {
      renderChatMessages(chatId);
    } else {
      chat.unread = (chat.unread || 0) + 1;
    }
    renderChatContactList(activeChatFilter);
  }, 1200);
}

function triggerUnblockFromChat() {
  toggleBlockUser(activeChatId);
}

function openProfileFromActiveChat() {
  if (activeChatId && CHATS_DATABASE[activeChatId] && !CHATS_DATABASE[activeChatId].isGroup) {
    viewAthleteProfile(activeChatId);
  }
}

function insertChatEmoji(emoji) {
  const input = document.getElementById("input-message");
  input.value += emoji + " ";
  input.focus();
}

function openDirectMessage(chatId) {
  switchTab("chat");
  switchChat(chatId);
}


/**
 * 13. SCREEN / TAB NAVIGATION
 */
function switchTab(screenId, preserveProfile = false) {
  const screens = document.querySelectorAll(".screen-view");
  screens.forEach((view) => view.classList.remove("active"));

  const navButtons = document.querySelectorAll(".nav-item");
  navButtons.forEach((btn) => btn.classList.remove("active"));

  const targetView = document.getElementById("view-" + screenId);
  const targetBtn = document.getElementById("btn-" + screenId);

  if (targetView) targetView.classList.add("active");
  if (targetBtn) targetBtn.classList.add("active");

  /*
   * PROFILE NAVIGATION
   *
   * If the user clicks the main Profile button,
   * always return to their own profile.
   *
   * If preserveProfile is true, it means we are
   * intentionally viewing another athlete's profile.
   */
  if (screenId === "profile" && !preserveProfile) {
    activeViewedProfileId = currentUser.id;

    renderProfileScreen(currentUser);
    applyCurrentAthleteToShell(currentUser);
  }

  if (screenId === "chat") {
    renderChatContactList(activeChatFilter);
    renderChatMessages(activeChatId);
    if (activeChatId) {
      loadChatMessagesFromSupabase(activeChatId);
    }
  } else if (screenId === "community") {
    switchCommunity(currentCommunityId);
  }
}

/**
 * 14. SOCIAL INTERACTIONS
 */
function toggleHeart(button) {
  const isLiked = button.classList.toggle("liked");
  const countSpan = button.querySelector(".like-count");
  const iconSpan = button.querySelector(".btn-icon");

  let currentCount = parseInt(countSpan.textContent.replace(/,/g, ""), 10);
  if (isLiked) {
    iconSpan.textContent = "❤️";
    currentCount += 1;
  } else {
    iconSpan.textContent = "🤍";
    currentCount -= 1;
  }
  countSpan.textContent = currentCount.toLocaleString();
}

function toggleHeartBtn(btn) {
  if (btn.textContent === "❤️") {
    btn.textContent = "🤍";
  } else {
    btn.textContent = "❤️";
    showToast("Added to your saved facilities list!");
  }
}

function toggleSavePost(btn) {
  const icon = btn.querySelector(".btn-icon");
  if (icon.textContent === "🔖") {
    icon.textContent = "📑";
    showToast("Post bookmarked to your Athlete Vault!");
  } else {
    icon.textContent = "🔖";
    showToast("Removed from bookmarks.");
  }
}

function toggleFollow(btn) {
  if (btn.classList.contains("following")) {
    btn.classList.remove("following");
    btn.textContent = "Follow";
    showToast("Unfollowed athlete.");
  } else {
    btn.classList.add("following");
    btn.textContent = "Following";
    showToast("Now following athlete updates!");
  }
}

/* ============================================================
 * PROFILE TAB SYSTEM — tab-aware grid rendering
 * ============================================================ */
let currentProfileTab = 'posts'; // 'posts' | 'reels' | 'achievements' | 'tagged'

function switchProfileTab(selectedTab, tabName) {
  const tabs = document.querySelectorAll(".p-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  selectedTab.classList.add("active");

  if (tabName) {
    currentProfileTab = tabName;
    renderProfileTabContent(tabName);
  }
}

function renderProfileTabContent(tabName) {
  const grid = document.getElementById("profile-photo-grid");
  if (!grid) return;

  // KEY FIX: When viewing own profile, always use currentUser (real registered user)
  // db.users only contains demo accounts, not real registered users
  let user;
  if (activeViewedProfileId === currentUser?.id) {
    user = currentUser;
  } else {
    const dbRef = getDB();
    user = dbRef.users.find(u => u.id === activeViewedProfileId) || currentUser;
  }
  if (!user) return;

  // Check blocked
  const isBlocked = blockedUsers && blockedUsers.includes(user.id);
  if (isBlocked) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px 20px;color:var(--text-dim);background:var(--bg-card);border-radius:8px;">
        <span style="font-size:32px;display:block;margin-bottom:8px;">🚫</span>
        <strong>Profile posts are hidden</strong>
        <p style="font-size:12px;margin-top:4px;">You have blocked this athlete. Unblock to view their photos and match footage.</p>
      </div>`;
    return;
  }

  const isSelf = user.id === currentUser?.id;

  if (tabName === 'posts') {
    const gallery = user.gallery || [];
    if (gallery.length === 0) {
      grid.innerHTML = renderEmptyState('📷', 'No Posts Yet', isSelf ? 'Tap ➕ Create to share your first post!' : "This athlete hasn't posted yet.");
      return;
    }
    grid.innerHTML = gallery.map((g, idx) => `
      <div class="grid-card ${g.tile || 'tile-1'} ${g.isUpload ? 'upload-item' : ''}" onclick="openPostViewer('post', ${idx})">
        ${g.dataUrl
        ? `<img src="${g.dataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" alt="post" />`
        : `<span style="font-size:40px">${g.icon || '📷'}</span>`
      }
        ${g.isUpload ? `<span class="user-upload-badge">New</span>` : ''}
        <div class="grid-overlay"><span>❤️ ${g.likes || 0} &nbsp; 💬 ${g.comments || 0}</span></div>
        ${isSelf ? `<button class="grid-delete-btn" onclick="event.stopPropagation(); confirmDeletePost(${idx})" title="Delete post">🗑️</button>` : ''}
      </div>
    `).join('');

  } else if (tabName === 'reels') {
    const reels = user.reels || [];
    if (reels.length === 0) {
      grid.innerHTML = renderEmptyState('🎬', 'No Reels Yet', isSelf ? 'Tap ➕ Create to upload your first reel!' : "This athlete hasn't posted any reels yet.");
      return;
    }
    grid.innerHTML = reels.map((r, idx) => `
      <div class="grid-card reel-card ${r.tile || 'tile-3'}" onclick="openPostViewer('reel', ${idx})">
        ${r.dataUrl
        ? `<video src="${r.dataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"></video>`
        : `<span style="font-size:40px">${r.icon || '🎬'}</span>`
      }
        <div class="reel-play-overlay">
          <span class="reel-play-icon">▶️</span>
          ${r.duration ? `<span class="reel-duration-badge">${r.duration}</span>` : ''}
        </div>
        ${r.isUpload ? `<span class="user-upload-badge">New</span>` : ''}
        ${isSelf ? `<button class="grid-delete-btn" onclick="event.stopPropagation(); confirmDeleteReel(${idx})" title="Delete reel">🗑️</button>` : ''}
      </div>
    `).join('');

  } else if (tabName === 'achievements') {
    const trophies = [
      { icon: '🥇', title: 'Gold Medalist', desc: 'MP State Games 2025' },
      { icon: '🏆', title: 'Championship Winner', desc: 'TT Nagar Super League' },
      { icon: '🎖️', title: 'Most Valuable Player', desc: 'Bhopal Premier T20' },
    ];
    grid.innerHTML = trophies.map(t => `
      <div class="grid-card tile-5" style="flex-direction:column;gap:8px;padding:14px;text-align:center;" onclick="showToast('🏆 ${t.title}')">
        <span style="font-size:36px;">${t.icon}</span>
        <div style="font-size:12px;font-weight:700;color:#fff;">${t.title}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);">${t.desc}</div>
        <div class="grid-overlay"><span>🏆 Achievement Unlocked</span></div>
      </div>
    `).join('');

  } else if (tabName === 'tagged') {
    grid.innerHTML = renderEmptyState('🏷️', 'No Tagged Posts', 'Posts where you\'re tagged will appear here.');
  }
}

function renderEmptyState(icon, title, desc) {
  return `
    <div class="profile-empty-state">
      <span class="profile-empty-icon">${icon}</span>
      <h4>${title}</h4>
      <p>${desc}</p>
    </div>`;
}

/* ============================================================
 * UPLOAD MODAL — Post & Reel uploader
 * ============================================================ */
let currentUploadType = 'post'; // 'post' | 'reel'
let uploadSelectedTags = new Set(['#SportifyMatch']);
let uploadFileDataUrl = null;
let uploadFileIsVideo = false;

function openUploadModal(type = 'post') {
  resetUploadModal();
  setUploadType(type);
  document.getElementById('upload-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Setup char count listener
  const captionEl = document.getElementById('upload-caption');
  captionEl.oninput = () => {
    document.getElementById('upload-char-count').textContent = `${captionEl.value.length} / 2200`;
  };
}

function closeUploadModal() {
  document.getElementById('upload-modal').style.display = 'none';
  document.body.style.overflow = '';
  resetUploadModal();
}

function resetUploadModal() {
  document.getElementById('upload-caption').value = '';
  document.getElementById('upload-char-count').textContent = '0 / 2200';
  document.getElementById('upload-location').value = '';
  document.getElementById('upload-custom-tag').value = '';
  const audioEl = document.getElementById('upload-audio-track');
  if (audioEl) audioEl.value = '';
  uploadSelectedTags = new Set(['#SportifyMatch']);
  uploadFileDataUrl = null;
  uploadFileIsVideo = false;
  clearUploadPreview(null, true);

  // Reset chip states
  document.querySelectorAll('.upload-chip').forEach(chip => {
    chip.classList.remove('active');
    if (chip.textContent === '#SportifyMatch') chip.classList.add('active');
  });

  // Remove dynamically added custom chips
  document.querySelectorAll('.upload-chip[data-custom="true"]').forEach(c => c.remove());
}

function setUploadType(type) {
  currentUploadType = type;
  const postBtn = document.getElementById('upload-type-post');
  const reelBtn = document.getElementById('upload-type-reel');
  const heading = document.getElementById('upload-modal-heading');
  const icon = document.getElementById('upload-type-icon');
  const sub = document.getElementById('upload-drop-sub');
  const reelOpts = document.getElementById('upload-reel-options');
  const publishLabel = document.getElementById('upload-publish-label');
  const fileInput = document.getElementById('upload-file-input');

  if (type === 'post') {
    postBtn.classList.add('active');
    reelBtn.classList.remove('active');
    heading.textContent = 'Create New Post';
    icon.textContent = '📷';
    sub.textContent = 'PNG, JPG, GIF up to 50 MB';
    reelOpts.style.display = 'none';
    publishLabel.textContent = '📤 Publish Post';
    fileInput.accept = 'image/*';
  } else {
    reelBtn.classList.add('active');
    postBtn.classList.remove('active');
    heading.textContent = 'Upload New Reel';
    icon.textContent = '🎬';
    sub.textContent = 'MP4, MOV, WebM up to 500 MB · 15s – 3 min';
    reelOpts.style.display = 'block';
    publishLabel.textContent = '🎬 Publish Reel';
    fileInput.accept = 'video/*';
  }

  // Clear preview when switching type
  clearUploadPreview(null, true);
}

function handleDragOver(e) {
  e.preventDefault();
  document.getElementById('upload-drop-zone').classList.add('dragover');
}

function handleDragLeave(e) {
  document.getElementById('upload-drop-zone').classList.remove('dragover');
}

function handleFileDrop(e) {
  e.preventDefault();
  document.getElementById('upload-drop-zone').classList.remove('dragover');
  const files = e.dataTransfer.files;
  if (files && files[0]) processUploadFile(files[0]);
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) processUploadFile(file);
}

function processUploadFile(file) {
  const isVideo = file.type.startsWith('video/');
  const isImage = file.type.startsWith('image/');

  if (!isImage && !isVideo) {
    showToast('⚠️ Please select an image or video file.');
    return;
  }

  // Auto-switch type based on file
  if (isVideo && currentUploadType !== 'reel') setUploadType('reel');
  if (isImage && currentUploadType !== 'post') setUploadType('post');

  uploadFileIsVideo = isVideo;

  const reader = new FileReader();
  reader.onload = (ev) => {
    uploadFileDataUrl = ev.target.result;
    showUploadPreview(uploadFileDataUrl, isVideo);
  };
  reader.readAsDataURL(file);
}

function showUploadPreview(dataUrl, isVideo) {
  const placeholder = document.getElementById('upload-drop-placeholder');
  const previewWrap = document.getElementById('upload-preview-wrap');
  const previewImg = document.getElementById('upload-preview-img');
  const previewVideo = document.getElementById('upload-preview-video');
  const badge = document.getElementById('upload-preview-badge');

  placeholder.style.display = 'none';
  previewWrap.style.display = 'flex';

  if (isVideo) {
    previewImg.style.display = 'none';
    previewVideo.style.display = 'block';
    previewVideo.src = dataUrl;
    badge.textContent = '🎬 Video';
  } else {
    previewVideo.style.display = 'none';
    previewImg.style.display = 'block';
    previewImg.src = dataUrl;
    badge.textContent = '📷 Photo';
  }
}

function clearUploadPreview(e, silent = false) {
  if (e) e.stopPropagation();
  const placeholder = document.getElementById('upload-drop-placeholder');
  const previewWrap = document.getElementById('upload-preview-wrap');
  const previewVideo = document.getElementById('upload-preview-video');
  const fileInput = document.getElementById('upload-file-input');

  placeholder.style.display = 'flex';
  previewWrap.style.display = 'none';
  previewVideo.src = '';
  fileInput.value = '';
  uploadFileDataUrl = null;
  uploadFileIsVideo = false;
}

function toggleHashtag(btn, tag) {
  if (uploadSelectedTags.has(tag)) {
    uploadSelectedTags.delete(tag);
    btn.classList.remove('active');
  } else {
    uploadSelectedTags.add(tag);
    btn.classList.add('active');
  }
}

function addCustomTag(e) {
  if (e.key !== 'Enter') return;
  const input = document.getElementById('upload-custom-tag');
  let tag = input.value.trim();
  if (!tag) return;
  if (!tag.startsWith('#')) tag = '#' + tag;
  tag = tag.replace(/\s+/g, '');

  if (uploadSelectedTags.has(tag)) { input.value = ''; return; }
  uploadSelectedTags.add(tag);

  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'upload-chip active';
  chip.dataset.custom = 'true';
  chip.textContent = tag;
  chip.onclick = function () { toggleHashtag(this, tag); };
  document.getElementById('upload-tag-chips').appendChild(chip);
  input.value = '';
}
/* ============================================================
 * DELETE POST / REEL  (own profile only)
 * ============================================================ */

function confirmDeletePost(idx) {
  showDeleteConfirmModal('post', idx);
}

function confirmDeleteReel(idx) {
  showDeleteConfirmModal('reel', idx);
}

function showDeleteConfirmModal(type, idx) {
  // Remove any existing confirm modal
  document.getElementById('delete-confirm-modal')?.remove();

  const label = type === 'post' ? '📷 Post' : '🎬 Reel';
  const modal = document.createElement('div');
  modal.id = 'delete-confirm-modal';
  modal.className = 'delete-confirm-overlay';
  modal.innerHTML = `
    <div class="delete-confirm-card">
      <div class="delete-confirm-icon">🗑️</div>
      <h3 class="delete-confirm-title">Delete ${label}?</h3>
      <p class="delete-confirm-desc">This ${type} will be permanently deleted from your profile and cannot be recovered.</p>
      <div class="delete-confirm-actions">
        <button class="btn-outline delete-cancel-btn" onclick="document.getElementById('delete-confirm-modal').remove()">Cancel</button>
        <button class="btn-danger delete-confirm-btn" onclick="executeDelete('${type}', ${idx})">
          🗑️ Delete
        </button>
      </div>
    </div>
  `;
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

async function executeDelete(type, idx) {
  // Close confirm modal
  document.getElementById('delete-confirm-modal')?.remove();

  if (!currentUser) return;

  // 1. Remove from local state
  let deletedItem = null;
  if (type === 'post') {
    if (!currentUser.gallery || idx >= currentUser.gallery.length) return;
    deletedItem = currentUser.gallery.splice(idx, 1)[0];
    currentUser.stats.posts = Math.max(0, (currentUser.stats.posts || 1) - 1);
  } else {
    if (!currentUser.reels || idx >= currentUser.reels.length) return;
    deletedItem = currentUser.reels.splice(idx, 1)[0];
    currentUser.stats.posts = Math.max(0, (currentUser.stats.posts || 1) - 1);
  }

  // 2. Persist to localStorage
  persistCurrentUser();

  // 3. Re-render profile grid immediately
  const activeTabBtn = document.querySelector('.p-tab.active');
  const currentTab = activeTabBtn?.dataset?.tab || (type === 'post' ? 'posts' : 'reels');
  renderProfileTabContent(currentTab);

  // Update stats display
  const statEl = document.getElementById('stat-posts');
  if (statEl) statEl.textContent = currentUser.stats.posts;

  showToast(`🗑️ ${type === 'post' ? 'Post' : 'Reel'} deleted successfully.`);

  // 4. Delete from Supabase in the background
  if (deletedItem && typeof supabaseClient !== 'undefined') {
    try {
      const userId = await getVerifiedCurrentUserId();
      if (userId) {
        const tableName = type === 'post' ? 'posts' : 'reels';
        const contentField = type === 'post' ? 'content' : 'caption';
        // Match by user_id + caption/content + approximate timestamp
        const { error } = await supabaseClient
          .from(tableName)
          .delete()
          .eq('user_id', userId)
          .eq(contentField, deletedItem.caption || deletedItem.caption || '');
        if (error) {
          console.error(`SUPABASE delete ${type} error:`, error.message);
        } else {
          console.log(`✅ SUPABASE: ${type} deleted from database.`);
        }
      }
    } catch (err) {
      console.error('SUPABASE delete exception:', err);
    }
  }
}

function publishUpload() {
  const caption = document.getElementById('upload-caption').value.trim();
  const location = document.getElementById('upload-location').value.trim();
  const publishBtn = document.getElementById('upload-publish-btn');
  const audience = document.querySelector('input[name="upload-audience"]:checked')?.value || 'everyone';

  if (!caption && !uploadFileDataUrl) {
    showToast('⚠️ Please add a caption or choose a file before publishing.');
    return;
  }

  if (!currentUser) {
    showToast('⚠️ Please log in first.');
    return;
  }

  // Show uploading state
  publishBtn.classList.add('loading');
  publishBtn.disabled = true;
  document.getElementById('upload-publish-label').textContent = '⏳ Publishing...';

  const tileOptions = ['tile-1', 'tile-2', 'tile-3', 'tile-4', 'tile-5', 'tile-6'];
  const randomTile = tileOptions[Math.floor(Math.random() * tileOptions.length)];
  const tagsArr = Array.from(uploadSelectedTags);
  const audioTrack = document.getElementById('upload-audio-track')?.value.trim() || null;
  const postType = currentUploadType; // 'post' | 'reel'

  // ─────────────────────────────────────────────────────────
  // KEY FIX: Save directly to currentUser (real registered user)
  // Don't search db.users — it only holds demo accounts.
  // Persist to localStorage so it survives page refresh.
  // ─────────────────────────────────────────────────────────
  if (postType === 'post') {
    const newPost = {
      icon: '📷',
      likes: 0, comments: 0,
      tile: randomTile,
      caption, location, tags: tagsArr,
      audience,
      dataUrl: uploadFileDataUrl || null,
      isUpload: true,
      ts: Date.now()
    };
    if (!currentUser.gallery) currentUser.gallery = [];
    currentUser.gallery.unshift(newPost);
  } else {
    const newReel = {
      icon: '🎬', duration: '0:15',
      likes: 0, comments: 0,
      tile: randomTile,
      caption, location, tags: tagsArr,
      audioTrack, audience,
      dataUrl: uploadFileDataUrl || null,
      isUpload: true,
      ts: Date.now()
    };
    if (!currentUser.reels) currentUser.reels = [];
    currentUser.reels.unshift(newReel);
  }

  if (!currentUser.stats) currentUser.stats = { posts: 0, followers: 0, following: 0, matches: 0, trophies: 0 };
  currentUser.stats.posts = (currentUser.stats.posts || 0) + 1;

  // Persist currentUser back to localStorage immediately
  persistCurrentUser();

  // Also update in db.users if the user exists there (demo accounts)
  const dbRef = getDB();
  const dbUser = dbRef.users.find(u => u.id === currentUser.id);
  if (dbUser) {
    if (postType === 'post') { dbUser.gallery = currentUser.gallery; }
    else { dbUser.reels = currentUser.reels; }
    dbUser.stats = currentUser.stats;
    saveDB(dbRef);
  }

  // Save to Supabase using safe helper (handles non-UUID user IDs)
  (async () => {
    if (postType === 'post') {
      await saveToSupabaseSafe('posts', {
        author_name: currentUser.name || '',
        author_handle: currentUser.handle || '',
        author_avatar: currentUser.initials || '',
        author_initials: currentUser.initials || '',
        content: caption,
        location: location || null,
        tags: tagsArr,
        media_data: uploadFileDataUrl || null,
        media_type: uploadFileDataUrl ? 'image' : 'text',
        post_type: 'post',
        tile_class: randomTile,
        audience,
        likes_count: 0,
        comments_count: 0
      });
    } else {
      await saveToSupabaseSafe('reels', {
        author_name: currentUser.name || '',
        author_handle: currentUser.handle || '',
        author_initials: currentUser.initials || '',
        caption,
        location: location || null,
        tags: tagsArr,
        media_data: uploadFileDataUrl || null,
        audio_track: audioTrack || null,
        duration: '0:15',
        tile_class: randomTile,
        audience,
        likes_count: 0,
        comments_count: 0
      });
    }
  })();

  // Update UI after short delay
  setTimeout(() => {
    publishBtn.classList.remove('loading');
    publishBtn.disabled = false;

    // Update post count on screen
    const statEl = document.getElementById('stat-posts');
    if (statEl) statEl.textContent = currentUser.stats.posts;

    closeUploadModal();

    // Navigate to profile and show correct tab
    activeViewedProfileId = currentUser.id;
    renderProfileScreen(currentUser);
    switchTab('profile');

    setTimeout(() => {
      const tabKey = postType === 'post' ? 'posts' : 'reels';
      const tabBtn = document.querySelector(`.p-tab[data-tab="${tabKey}"]`);
      if (tabBtn) switchProfileTab(tabBtn, tabKey);
    }, 100);

    if (postType === 'post') {
      showToast('🎉 Post published! Your photo is now live on your profile.');
    } else {
      showToast('🎬 Reel published! Your video is live on your profile.');
    }
  }, 800);
}



/**
 * 15. BOOKINGS LOGIC
 */
let currentVenuePrice = "₹750";

function openDrawer(venueName, price) {
  currentVenuePrice = price;
  document.getElementById("chosen-venue-title").textContent = venueName;
  document.getElementById("checkout-price-display").textContent = `Total: ${price}`;
  const drawer = document.getElementById("booking-drawer");
  drawer.style.display = "block";
  drawer.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closeDrawer() {
  document.getElementById("booking-drawer").style.display = "none";
}

function pickDate(dateEl) {
  document.querySelectorAll(".day-select").forEach((el) => el.classList.remove("active"));
  dateEl.classList.add("active");
}

function selectSlot(slotBtn) {
  document.querySelectorAll(".time-slot-btn").forEach((btn) => btn.classList.remove("selected"));
  slotBtn.classList.add("selected");
}

function confirmReservation() {
  const venue = document.getElementById("chosen-venue-title").textContent;
  const activeDate = document.querySelector(".day-select.active strong").textContent;
  const activeSlot = document.querySelector(".time-slot-btn.selected").textContent.replace("(Selected)", "").trim();

  alert(
    `✅ Booking Confirmed on Sportify!\n\n` +
    `👤 Athlete: ${currentUser.name}\n` +
    `📍 Facility: ${venue}\n` +
    `🗓 Date: ${activeDate}\n` +
    `⏰ Time: ${activeSlot}\n` +
    `💳 Paid: ${currentVenuePrice}\n\n` +
    `Your digital gate pass QR has been sent to your Sportify messages! Have a great session! ⚽`
  );
  closeDrawer();
}

function filterCategory(btn) {
  const parent = btn.parentElement;
  parent.querySelectorAll(".cat-chip").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  showToast(`Filtering for: ${btn.textContent.trim()}`);
}

/**
 * 16. TOURNAMENT & EVENT HOSTING
 */
function toggleHostModal(show) {
  const modal = document.getElementById("host-modal");
  modal.style.display = show ? "flex" : "none";
}

function handleEventPublish(event) {
  event.preventDefault();

  const title = document.getElementById("evt-title").value;
  const sport = document.getElementById("evt-sport").value;
  const date = document.getElementById("evt-date").value;
  const time = document.getElementById("evt-time").value;
  const venue = document.getElementById("evt-venue").value;
  const fee = document.getElementById("evt-fee").value || "FREE";

  const feed = document.getElementById("events-feed");
  const newCard = document.createElement("div");
  newCard.className = "event-box";
  newCard.innerHTML = `
    <div class="event-banner gradient-pitch">
      <span class="sport-icon">🏆</span>
      <div class="calendar-stamp">
        <strong>NEW</strong>
        <small>${date ? date.slice(5) : "SOON"}</small>
      </div>
    </div>
    <div class="event-body">
      <span class="evt-pill football">${sport} Tournament</span>
      <h3>${escapeHTML(title)}</h3>
      <div class="evt-meta-list">
        <p>📍 ${escapeHTML(venue)}</p>
        <p>⏰ ${time || "TBD"}</p>
        <p>💰 ${fee === "FREE" ? "FREE" : "₹" + fee} • Open Registration</p>
      </div>
      <div class="event-footer">
        <div class="roster-avatar-stack">
          <span class="av-mini" style="background: ${currentUser.avatarBg}; color: #fff;">${currentUser.initials}</span>
          <span class="stack-count">Hosted by ${escapeHTML(currentUser.name)}</span>
        </div>
        <button class="btn-join" onclick="toggleJoinEvent(this)">Join Event</button>
      </div>
    </div>
  `;

  feed.prepend(newCard);
  toggleHostModal(false);

  showToast(`🎉 "${title}" has been published to Sportify Events!`);
  document.getElementById("host-event-form").reset();
}

function toggleJoinEvent(btn) {
  if (btn.classList.contains("joined")) {
    btn.classList.remove("joined");
    btn.textContent = "Join Event";
  } else {
    btn.classList.add("joined");
    btn.textContent = "✓ Registered";
    alert(`🎟️ Registration confirmed for ${currentUser.name}! See you on the ground.`);
  }
}

/**
 * 17. UTILITIES & TOAST NOTIFICATIONS
 */
function escapeHTML(str) {
  if (!str) return "";
  return String(str).replace(
    /[&<>'"]/g,
    (tag) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    }[tag] || tag)
  );
}

function showToast(message) {
  const existing = document.getElementById("sportify-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "sportify-toast";
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #00e676;
    color: #000;
    font-weight: 700;
    padding: 12px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 230, 118, 0.4);
    z-index: 9999;
    font-size: 13px;
    transition: opacity 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ============================================================
 * 18.5  STORY EDITOR ENGINE
 * ============================================================ */
let storyFileDataUrl = null;
let storyFileIsVideo = false;
let storySelectedMusic = '';
let storyMusicBadgeText = '';
let storySelectedSticker = '';
let storySelectedFilter = '';
let storyFilterClass = '';
let storyTextContent = '';

function openStoryEditorModal() {
  resetStoryEditor();
  document.getElementById('story-editor-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeStoryEditorModal() {
  document.getElementById('story-editor-modal').style.display = 'none';
  document.body.style.overflow = '';
  resetStoryEditor();
}

function resetStoryEditor() {
  storyFileDataUrl = null;
  storyFileIsVideo = false;
  storySelectedMusic = '';
  storyMusicBadgeText = '';
  storySelectedSticker = '';
  storySelectedFilter = '';
  storyFilterClass = '';
  storyTextContent = '';

  // Reset preview
  const placeholder = document.getElementById('story-bg-placeholder');
  const img = document.getElementById('story-preview-img');
  const video = document.getElementById('story-preview-video');
  if (placeholder) placeholder.style.display = 'flex';
  if (img) { img.style.display = 'none'; img.src = ''; }
  if (video) { video.style.display = 'none'; video.src = ''; }

  // Reset overlays
  const textOverlay = document.getElementById('story-text-overlay');
  const stickerOverlay = document.getElementById('story-sticker-overlay');
  const musicBadge = document.getElementById('story-music-badge');
  const filterOverlay = document.getElementById('story-filter-overlay');
  if (textOverlay) { textOverlay.style.display = 'none'; textOverlay.textContent = ''; }
  if (stickerOverlay) { stickerOverlay.style.display = 'none'; stickerOverlay.textContent = ''; }
  if (musicBadge) musicBadge.style.display = 'none';
  if (filterOverlay) { filterOverlay.className = 'story-filter-overlay'; }

  // Reset form fields
  const caption = document.getElementById('story-caption');
  const textInput = document.getElementById('story-text-input');
  const textWrap = document.getElementById('story-text-input-wrap');
  if (caption) caption.value = '';
  if (textInput) textInput.value = '';
  if (textWrap) textWrap.style.display = 'none';

  // Reset file input
  const fileInput = document.getElementById('story-file-input');
  if (fileInput) fileInput.value = '';

  // Reset chip selections
  document.querySelectorAll('.story-music-chip').forEach((c, i) => {
    c.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.story-filter-chip').forEach((c, i) => {
    c.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.story-sticker-btn').forEach(c => c.classList.remove('active'));
}

function openStoryFilePicker() {
  document.getElementById('story-file-input').click();
}

function handleStoryFileSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const isVideo = file.type.startsWith('video/');
  const isImage = file.type.startsWith('image/');
  if (!isImage && !isVideo) {
    showToast('⚠️ Please select an image or video file.');
    return;
  }

  storyFileIsVideo = isVideo;
  const reader = new FileReader();
  reader.onload = (ev) => {
    storyFileDataUrl = ev.target.result;
    // Show preview
    const placeholder = document.getElementById('story-bg-placeholder');
    const img = document.getElementById('story-preview-img');
    const video = document.getElementById('story-preview-video');
    if (placeholder) placeholder.style.display = 'none';
    if (isVideo) {
      if (img) img.style.display = 'none';
      if (video) { video.style.display = 'block'; video.src = storyFileDataUrl; }
    } else {
      if (video) video.style.display = 'none';
      if (img) { img.style.display = 'block'; img.src = storyFileDataUrl; }
    }
  };
  reader.readAsDataURL(file);
}

function selectStoryMusic(btn, track, badgeText) {
  // Deactivate all music chips
  document.querySelectorAll('.story-music-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  storySelectedMusic = track;
  storyMusicBadgeText = badgeText;

  // Show or hide the music badge on canvas
  const badge = document.getElementById('story-music-badge');
  const badgeTextEl = document.getElementById('story-music-badge-text');
  if (badge && badgeTextEl) {
    if (track) {
      badge.style.display = 'flex';
      badgeTextEl.textContent = badgeText;
    } else {
      badge.style.display = 'none';
    }
  }
}

function promptCustomStoryMusic() {
  const custom = prompt('Enter the music track name (e.g. "Blinding Lights – The Weeknd"):');
  if (!custom || !custom.trim()) return;
  storySelectedMusic = custom.trim();
  storyMusicBadgeText = '🎵 ' + custom.trim();
  // Deactivate other chips, activate custom
  document.querySelectorAll('.story-music-chip').forEach(c => c.classList.remove('active'));
  const customBtn = document.querySelector('.story-music-chip[data-track="Custom"]');
  if (customBtn) { customBtn.textContent = '✓ ' + custom.trim(); customBtn.classList.add('active'); }
  const badge = document.getElementById('story-music-badge');
  const badgeTextEl = document.getElementById('story-music-badge-text');
  if (badge && badgeTextEl) { badge.style.display = 'flex'; badgeTextEl.textContent = storyMusicBadgeText; }
}

function addStorySticker(btn, sticker) {
  document.querySelectorAll('.story-sticker-btn').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  storySelectedSticker = sticker;
  const stickerOverlay = document.getElementById('story-sticker-overlay');
  if (stickerOverlay) {
    if (sticker) {
      stickerOverlay.style.display = 'flex';
      stickerOverlay.textContent = sticker;
    } else {
      stickerOverlay.style.display = 'none';
      stickerOverlay.textContent = '';
    }
  }
}

function applyStoryFilter(btn, filterName, filterClass) {
  document.querySelectorAll('.story-filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  storySelectedFilter = filterName;
  storyFilterClass = filterClass;
  const overlay = document.getElementById('story-filter-overlay');
  if (overlay) {
    overlay.className = 'story-filter-overlay';
    if (filterClass) overlay.classList.add(filterClass);
  }
}

function toggleStoryTextInput() {
  const wrap = document.getElementById('story-text-input-wrap');
  if (!wrap) return;
  wrap.style.display = wrap.style.display === 'none' ? 'flex' : 'none';
  if (wrap.style.display === 'flex') {
    const input = document.getElementById('story-text-input');
    if (input) input.focus();
  }
}

function updateStoryTextOverlay(value) {
  const overlay = document.getElementById('story-text-overlay');
  if (overlay) {
    storyTextContent = value;
    if (value) {
      overlay.style.display = 'flex';
      overlay.textContent = value;
    } else {
      overlay.style.display = 'none';
    }
  }
}

function confirmStoryText() {
  const wrap = document.getElementById('story-text-input-wrap');
  if (wrap) wrap.style.display = 'none';
  showToast('✓ Text added to story!');
}

async function publishStory() {
  const caption = document.getElementById('story-caption')?.value.trim() || '';
  const audience = document.querySelector('input[name="story-audience"]:checked')?.value || 'everyone';
  const publishBtn = document.getElementById('story-publish-btn');
  const publishLabel = document.getElementById('story-publish-label');

  if (!storyFileDataUrl && !caption) {
    showToast('⚠️ Please add a photo/video or caption to your story.');
    return;
  }

  if (publishBtn) { publishBtn.disabled = true; }
  if (publishLabel) publishLabel.textContent = '⏳ Sharing...';

  // Save to Supabase stories table using safe helper
  await saveToSupabaseSafe('stories', {
    author_name: currentUser?.name || '',
    author_handle: currentUser?.handle || '',
    author_initials: currentUser?.initials || '',
    author_avatar_bg: currentUser?.avatarBg || '',
    caption: caption || null,
    media_data: storyFileDataUrl || null,
    media_type: storyFileIsVideo ? 'video' : (storyFileDataUrl ? 'image' : null),
    music_track: storySelectedMusic || null,
    sticker: storySelectedSticker || null,
    filter_name: storySelectedFilter !== 'none' ? storySelectedFilter : null,
    audience
  });

  // Save story to currentUser.stories (local persistence)
  if (!currentUser.stories) currentUser.stories = [];
  const storyObj = {
    dataUrl: storyFileDataUrl,
    isVideo: storyFileIsVideo,
    caption,
    music: storyMusicBadgeText,
    sticker: storySelectedSticker,
    filter: storyFilterClass,
    textOverlay: storyTextContent,
    audience,
    ts: Date.now()
  };
  currentUser.stories.unshift(storyObj);
  persistCurrentUser();

  // Inject story card into home feed
  injectLiveStoryCard(storyObj);

  if (publishBtn) { publishBtn.disabled = false; }
  if (publishLabel) publishLabel.textContent = '📤 Share Story';
  closeStoryEditorModal();
  showToast('✨ Your story is now live for 24 hours!');
}

function injectLiveStoryCard(storyData) {
  const storiesStrip = document.querySelector('.stories-strip');
  if (!storiesStrip) return;

  // Remove any existing "your story" live card (to avoid duplicates)
  const existingLive = document.getElementById('my-live-story-card');
  if (existingLive) existingLive.remove();

  const initials = currentUser?.initials || 'Me';
  const avatarBg = currentUser?.avatarBg || 'linear-gradient(135deg, #00c853, #1565c0)';
  const firstName = currentUser?.name?.split(' ')[0] || 'You';

  // Use passed storyData or fall back to globals (backwards compat)
  const sd = storyData || {
    dataUrl: storyFileDataUrl,
    isVideo: storyFileIsVideo,
    caption: '',
    music: storyMusicBadgeText,
    sticker: storySelectedSticker,
    filter: storyFilterClass,
    textOverlay: storyTextContent
  };

  const viewerData = {
    ...sd,
    authorName: currentUser?.name || 'You',
    authorInitials: initials,
    avatarBg
  };

  const card = document.createElement('div');
  card.id = 'my-live-story-card';
  card.className = 'story-card my-story-live';
  card.title = 'View your story';
  card._storyData = viewerData;

  card.innerHTML = `
    <div class="story-avatar-ring active-ring" onclick="openStoryViewer(document.getElementById('my-live-story-card')._storyData)">
      ${sd.dataUrl
      ? (sd.isVideo
        ? `<video src="${sd.dataUrl}" class="story-img-placeholder story-media-thumb"></video>`
        : `<img src="${sd.dataUrl}" class="story-img-placeholder story-media-thumb" />`)
      : `<div class="story-img-placeholder" style="background:${avatarBg};color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:18px;">${initials}</div>`
    }
    </div>
    <span>${firstName} (You)</span>
    ${sd.music ? `<span class="story-music-tag">\ud83c\udfb5</span>` : ''}
    <button class="story-card-delete-btn" onclick="event.stopPropagation(); confirmDeleteStory()" title="Delete story">\ud83d\uddd1\ufe0f</button>
  `;

  // Insert after the story-create (first child)
  const storyCreate = storiesStrip.querySelector('.story-create');
  if (storyCreate && storyCreate.nextSibling) {
    storiesStrip.insertBefore(card, storyCreate.nextSibling);
  } else {
    storiesStrip.appendChild(card);
  }
}

/* ============================================================
 * SAVE TO SUPABASE — Safe helper that handles non-UUID user IDs
 * ============================================================ */
async function saveToSupabaseSafe(tableName, payload) {
  if (typeof supabaseClient === 'undefined') return null;
  try {
    // Try to get a real Supabase UUID (via profiles lookup)
    const userId = await getVerifiedCurrentUserId();
    const isUuid = userId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId);

    const record = { ...payload };
    if (isUuid) {
      record.user_id = userId;
    } else {
      // Not a UUID — store as local_user_id instead (no FK violation)
      record.user_id = null;
      record.local_user_id = String(userId || currentUser?.mobile || currentUser?.id || 'unknown');
    }

    const { data, error } = await supabaseClient.from(tableName).insert(record).select('id').single();
    if (error) {
      console.error(`\u274c SUPABASE [${tableName}] insert error:`, error.message);
      return null;
    }
    console.log(`\u2705 SUPABASE [${tableName}] saved. id=`, data?.id);
    return data?.id || null;
  } catch (err) {
    console.error(`\u274c SUPABASE [${tableName}] exception:`, err);
    return null;
  }
}

/* ============================================================
 * DELETE STORY
 * ============================================================ */
function confirmDeleteStory() {
  document.getElementById('delete-confirm-modal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'delete-confirm-modal';
  modal.className = 'delete-confirm-overlay';
  modal.innerHTML = `
    <div class="delete-confirm-card">
      <div class="delete-confirm-icon">\ud83d\uddd1\ufe0f</div>
      <h3 class="delete-confirm-title">Delete Story?</h3>
      <p class="delete-confirm-desc">Your story will be removed immediately. Viewers won't be able to see it anymore.</p>
      <div class="delete-confirm-actions">
        <button class="btn-outline delete-cancel-btn" onclick="document.getElementById('delete-confirm-modal').remove()">Cancel</button>
        <button class="btn-danger delete-confirm-btn" onclick="executeDeleteStory()">\ud83d\uddd1\ufe0f Delete Story</button>
      </div>
    </div>
  `;
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

async function executeDeleteStory() {
  document.getElementById('delete-confirm-modal')?.remove();

  // Remove card from home feed immediately
  document.getElementById('my-live-story-card')?.remove();

  // Close story viewer if open
  document.getElementById('story-viewer-modal')?.remove();

  // Remove from local state
  if (currentUser?.stories?.length > 0) {
    currentUser.stories.splice(0, 1); // remove newest (index 0)
    persistCurrentUser();
  }

  showToast('\ud83d\uddd1\ufe0f Story deleted.');

  // Delete from Supabase stories table
  try {
    if (typeof supabaseClient !== 'undefined') {
      const userId = await getVerifiedCurrentUserId();
      const isUuid = userId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId);
      let query = supabaseClient.from('stories').delete();
      if (isUuid) {
        query = query.eq('user_id', userId);
      } else {
        const localId = String(userId || currentUser?.mobile || currentUser?.id || '');
        query = query.eq('local_user_id', localId);
      }
      const { error } = await query.order('created_at', { ascending: false }).limit(1);
      if (error) console.error('\u274c SUPABASE story delete error:', error.message);
      else console.log('\u2705 SUPABASE: story deleted.');
    }
  } catch (err) {
    console.error('\u274c SUPABASE story delete exception:', err);
  }
}


/* ============================================================
 * POST / REEL VIEWER  (full-screen lightbox)
 * ============================================================ */
function openPostViewer(type, index) {
  // Determine which user's content to show
  let user;
  if (activeViewedProfileId === currentUser?.id) {
    user = currentUser;
  } else {
    user = getDB().users.find(u => u.id === activeViewedProfileId) || currentUser;
  }
  if (!user) return;

  const items = type === 'post' ? (user.gallery || []) : (user.reels || []);
  const item = items[index];
  if (!item) return;

  // Remove any existing viewer
  document.getElementById('post-viewer-modal')?.remove();

  const isVideo = item.dataUrl && (type === 'reel');
  const tagsHtml = (item.tags || []).map(t => `<span class="post-viewer-tag">${escapeHTML(t)}</span>`).join('');

  const modal = document.createElement('div');
  modal.id = 'post-viewer-modal';
  modal.className = 'post-viewer-overlay';
  modal.innerHTML = `
    <div class="post-viewer-card">
      <!-- Header -->
      <div class="post-viewer-header">
        <div class="post-viewer-author">
          <div class="user-avatar" style="background:${user.avatarBg || 'linear-gradient(135deg,#00c853,#1565c0)'};width:38px;height:38px;font-size:13px;flex-shrink:0;">${user.initials || '?'}</div>
          <div>
            <strong>${escapeHTML(user.name || 'Athlete')}</strong>
            <small>${escapeHTML(user.handle || '')} • ${type === 'reel' ? '🎬 Reel' : '📷 Post'}</small>
          </div>
        </div>
        <button class="btn-close" onclick="document.getElementById('post-viewer-modal').remove()">✕</button>
      </div>

      <!-- Media -->
      <div class="post-viewer-media">
        ${item.dataUrl
      ? (isVideo
        ? `<video src="${item.dataUrl}" class="post-viewer-video" controls autoplay></video>`
        : `<img src="${item.dataUrl}" class="post-viewer-img" alt="Post" />`)
      : `<div class="post-viewer-placeholder"><span style="font-size:72px">${item.icon || (type === 'reel' ? '🎬' : '📷')}</span></div>`
    }
      </div>

      <!-- Details -->
      <div class="post-viewer-details">
        ${item.caption ? `<p class="post-viewer-caption">${escapeHTML(item.caption)}</p>` : ''}
        ${item.location ? `<p class="post-viewer-location">📍 ${escapeHTML(item.location)}</p>` : ''}
        ${item.audioTrack ? `<p class="post-viewer-music">🎵 ${escapeHTML(item.audioTrack)}</p>` : ''}
        ${tagsHtml ? `<div class="post-viewer-tags">${tagsHtml}</div>` : ''}

        <!-- Actions -->
        <div class="post-viewer-actions">
          <button class="post-viewer-action-btn" onclick="postViewerLike(this)">
            <span class="pv-icon">🤍</span>
            <span class="pv-count">${item.likes || 0}</span>
          </button>
          <button class="post-viewer-action-btn" onclick="showToast('💬 Comments coming soon!')">
            <span class="pv-icon">💬</span>
            <span class="pv-count">${item.comments || 0}</span>
          </button>
          <button class="post-viewer-action-btn" onclick="showToast('↗️ Link copied to clipboard!')">
            <span class="pv-icon">↗️</span>
            <span>Share</span>
          </button>
          <button class="post-viewer-action-btn" onclick="showToast('🔖 Saved!')">
            <span class="pv-icon">🔖</span>
          </button>
        </div>
      </div>

      <!-- Navigate prev/next -->
      ${index > 0 ? `<button class="post-viewer-nav post-viewer-prev" onclick="document.getElementById('post-viewer-modal').remove(); openPostViewer('${type}', ${index - 1})">‹</button>` : ''}
      ${index < items.length - 1 ? `<button class="post-viewer-nav post-viewer-next" onclick="document.getElementById('post-viewer-modal').remove(); openPostViewer('${type}', ${index + 1})">›</button>` : ''}
    </div>
  `;

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  document.body.appendChild(modal);
}

function postViewerLike(btn) {
  const isLiked = btn.classList.contains('liked');
  const countEl = btn.querySelector('.pv-count');
  const iconEl = btn.querySelector('.pv-icon');
  if (isLiked) {
    btn.classList.remove('liked');
    iconEl.textContent = '🤍';
    countEl.textContent = Math.max(0, parseInt(countEl.textContent) - 1);
  } else {
    btn.classList.add('liked');
    iconEl.textContent = '❤️';
    countEl.textContent = parseInt(countEl.textContent) + 1;
  }
}

/* ============================================================
 * STORY VIEWER  (full-screen with all overlays)
 * ============================================================ */
function openStoryViewer(storyData) {
  if (!storyData) return;

  document.getElementById('story-viewer-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'story-viewer-modal';
  modal.className = 'story-viewer-overlay';
  modal.innerHTML = `
    <div class="story-viewer-card">
      <!-- Progress bar -->
      <div class="story-progress-bar">
        <div class="story-progress-fill" id="story-progress-fill"></div>
      </div>

      <!-- Header -->
      <div class="story-viewer-header">
        <div class="story-viewer-author">
          <div class="story-viewer-avatar" style="background:${storyData.avatarBg || 'linear-gradient(135deg,#00c853,#1565c0)'}">
            ${storyData.authorInitials || '?'}
          </div>
          <div>
            <strong>${escapeHTML(storyData.authorName || 'You')}</strong>
            <small>Just now • 24h</small>
          </div>
        </div>
        <button class="btn-close story-viewer-close" onclick="document.getElementById('story-viewer-modal').remove()">✕</button>
      </div>

      <!-- Story canvas full-screen -->
      <div class="story-viewer-canvas ${storyData.filter || ''}">
        ${storyData.dataUrl
      ? (storyData.isVideo
        ? `<video src="${storyData.dataUrl}" class="story-viewer-media" autoplay muted loop></video>`
        : `<img src="${storyData.dataUrl}" class="story-viewer-media" alt="Story" />`)
      : `<div class="story-viewer-placeholder" style="background:${storyData.avatarBg || 'linear-gradient(135deg,#1565c0,#00c853)'}">
               <span style="font-size:80px">${storyData.authorInitials || '⚡'}</span>
             </div>`
    }

        <!-- Filter overlay -->
        ${storyData.filter ? `<div class="story-viewer-filter-overlay ${storyData.filter}"></div>` : ''}

        <!-- Text overlay -->
        ${storyData.textOverlay ? `
          <div class="story-viewer-text-overlay">
            ${escapeHTML(storyData.textOverlay)}
          </div>` : ''}

        <!-- Sticker -->
        ${storyData.sticker ? `
          <div class="story-viewer-sticker">${storyData.sticker}</div>` : ''}

        <!-- Music badge -->
        ${storyData.music ? `
          <div class="story-viewer-music-badge">
            <span>🎵</span>
            <span>${escapeHTML(storyData.music)}</span>
          </div>` : ''}

        <!-- Caption -->
        ${storyData.caption ? `
          <div class="story-viewer-caption">
            ${escapeHTML(storyData.caption)}
          </div>` : ''}
      </div>

      <!-- Reply bar -->
      <div class="story-viewer-reply-bar">
        <input type="text" class="story-reply-input" placeholder="Reply to story..." />
        <button class="story-reply-send" onclick="showToast('💬 Reply sent!')">➤</button>
        <button class="story-viewer-like-btn" onclick="this.textContent = this.textContent === '🤍' ? '❤️' : '🤍'">🤍</button>
      </div>
    </div>
  `;

  // Auto close after 10 seconds (like Instagram stories)
  const fill = modal.querySelector('#story-progress-fill');
  if (fill) {
    fill.style.transition = 'width 10s linear';
    setTimeout(() => { fill.style.width = '100%'; }, 50);
  }
  const autoClose = setTimeout(() => modal.remove(), 10000);

  // Close on backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) { clearTimeout(autoClose); modal.remove(); }
  });

  document.body.appendChild(modal);
}


/* ================================================================
 * 19. PRIVATE CHAT SYSTEM — Search users, create conversations,
 *     send & receive messages via Supabase
 * ================================================================ */

// Note: PRIVATE_CHAT_SESSIONS is defined above alongside CONVERSATION_ID_CACHE

// ── Modal Open / Close ─────────────────────────────────────────
function openNewChatModal() {
  const modal = document.getElementById('new-chat-modal');
  if (!modal) return;
  modal.style.display = 'flex';
  const input = document.getElementById('new-chat-search-input');
  if (input) { input.value = ''; input.focus(); }
  document.getElementById('new-chat-search-results').innerHTML =
    '<p class="new-chat-hint">Start typing to find registered users.</p>';
}

function closeNewChatModal() {
  const modal = document.getElementById('new-chat-modal');
  if (modal) modal.style.display = 'none';
}

// Close modal on overlay click
document.addEventListener('click', function (e) {
  const modal = document.getElementById('new-chat-modal');
  if (modal && e.target === modal) closeNewChatModal();
});

// ── Search Registered Users ───────────────────────────────────
let _searchDebounceTimer = null;
async function searchUsersToChat(query) {
  const resultsEl = document.getElementById('new-chat-search-results');
  if (!resultsEl) return;

  query = query.trim();
  if (query.length < 2) {
    resultsEl.innerHTML = '<p class="new-chat-hint">Type at least 2 characters to search.</p>';
    return;
  }

  resultsEl.innerHTML = '<p class="new-chat-hint">🔄 Searching...</p>';

  clearTimeout(_searchDebounceTimer);
  _searchDebounceTimer = setTimeout(async () => {
    try {
      if (typeof supabaseClient === 'undefined') {
        resultsEl.innerHTML = '<p class="new-chat-hint">⚠️ Database not connected.</p>';
        return;
      }

      // Search profiles by name, username, or phone
      const q = query.toLowerCase();
      const { data: profiles, error } = await supabaseClient
        .from('profiles')
        .select('id, full_name, username, phone, role, bio, city, state')
        .or(`full_name.ilike.%${q}%,username.ilike.%${q}%,phone.ilike.%${q}%`)
        .limit(15);

      if (error) {
        resultsEl.innerHTML = `<p class="new-chat-hint">⚠️ Search error: ${escapeHTML(error.message)}</p>`;
        return;
      }

      // Filter out current user
      const myPhone = currentUser?.mobile || currentUser?.phone || '';
      const myId = currentUser?.id || '';
      const filtered = (profiles || []).filter(p =>
        p.id !== myId && p.phone !== myPhone && p.full_name !== currentUser?.name
      );

      if (filtered.length === 0) {
        resultsEl.innerHTML = '<p class="new-chat-hint">No users found. Try a different search.</p>';
        return;
      }

      resultsEl.innerHTML = filtered.map(p => {
        const initials = (p.full_name || p.username || '?')
          .split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
        const handle = p.username ? `@${p.username}` : (p.phone ? `📞 ${p.phone}` : '');
        const role = p.role ? `• ${p.role}` : '';
        const loc = [p.city, p.state].filter(Boolean).join(', ');
        return `
          <div class="new-chat-user-row" onclick="startChatWithUser('${p.id}', ${JSON.stringify(p.full_name || p.username || 'User').replace(/"/g, "'")}, '${initials}', '${handle}')">
            <div class="new-chat-user-avatar">${initials}</div>
            <div class="new-chat-user-info">
              <strong>${escapeHTML(p.full_name || p.username || 'User')}</strong>
              <small>${escapeHTML(handle)} ${role} ${loc ? '• ' + escapeHTML(loc) : ''}</small>
            </div>
            <span class="new-chat-msg-icon">💬</span>
          </div>
        `;
      }).join('');
    } catch (err) {
      resultsEl.innerHTML = `<p class="new-chat-hint">⚠️ Error: ${escapeHTML(err.message)}</p>`;
    }
  }, 350);
}

// ── Start a Private Chat with a Found User ─────────────────────
async function startChatWithUser(targetProfileId, targetName, targetInitials, targetHandle) {
  closeNewChatModal();

  const chatId = 'private_' + targetProfileId;

  // If we already have this chat in CHATS_DATABASE, ensure it's ready
  if (!CHATS_DATABASE[chatId]) {
    const bgColors = [
      'linear-gradient(135deg, #7c3aed, #2979ff)',
      'linear-gradient(135deg, #00897b, #1565c0)',
      'linear-gradient(135deg, #e53935, #880e4f)',
      'linear-gradient(135deg, #f57c00, #e91e63)',
      'linear-gradient(135deg, #2e7d32, #00796b)',
    ];
    let hash = 0;
    for (let i = 0; i < targetProfileId.length; i++) {
      hash = (hash << 5) - hash + targetProfileId.charCodeAt(i);
      hash |= 0;
    }
    const bg = bgColors[Math.abs(hash) % bgColors.length];

    CHATS_DATABASE[chatId] = {
      id: chatId,
      profileId: targetProfileId,        // real Supabase profile UUID
      name: targetName,
      contactName: targetName,
      status: '● Registered Sportify User',
      isGroup: false,
      avatarInitial: targetInitials || targetName.substring(0, 2).toUpperCase(),
      avatarBg: bg,
      unread: 0,
      preview: 'Say hi! 👋',
      time: 'Just now',
      messages: [],
      isPrivate: true
    };
  }

  // Pre-fetch or create conversation in background, then switch and load
  const conversationId = await getOrCreatePrivateConversation(targetProfileId, targetName);
  if (conversationId) {
    PRIVATE_CHAT_SESSIONS[chatId] = conversationId;
    CONVERSATION_ID_CACHE[chatId] = conversationId;
  }

  // Switch to this chat
  switchChat(chatId);
  switchTab('chat');
  renderChatContactList(activeChatFilter);

  showToast(`💬 Chat with ${targetName}`);
}

// ── Get or Create a Private Conversation in Supabase ──────────
async function getOrCreatePrivateConversation(targetProfileId, targetName) {
  if (typeof supabaseClient === 'undefined') return null;

  const chatId = 'private_' + targetProfileId;
  if (PRIVATE_CHAT_SESSIONS[chatId]) return PRIVATE_CHAT_SESSIONS[chatId];
  if (CONVERSATION_ID_CACHE[chatId]) return CONVERSATION_ID_CACHE[chatId];

  try {
    const myUserId = await getVerifiedCurrentUserId();
    const myIsUuid = myUserId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(myUserId);
    const myLocalId = String(myUserId || currentUser?.mobile || currentUser?.id || '');

    // Strategy 1: check via participant_names (sorted key for deduplication)
    const participantKey = [myLocalId, targetProfileId].sort().join('::');

    const { data: existing, error: findErr } = await supabaseClient
      .from('conversations')
      .select('id')
      .eq('participant_names', participantKey)
      .maybeSingle();

    if (!findErr && existing?.id) {
      console.log('✅ Reusing existing private conversation via participant_names:', existing.id);
      PRIVATE_CHAT_SESSIONS[chatId] = existing.id;
      CONVERSATION_ID_CACHE[chatId] = existing.id;
      return existing.id;
    }

    // Strategy 2: check via conversation_members if both are UUID users
    if (myIsUuid) {
      const { data: myMemberships } = await supabaseClient
        .from('conversation_members')
        .select('conversation_id')
        .eq('user_id', myUserId);

      if (myMemberships?.length > 0) {
        const myConvoIds = myMemberships.map(m => m.conversation_id);
        const { data: sharedMemberships } = await supabaseClient
          .from('conversation_members')
          .select('conversation_id')
          .eq('user_id', targetProfileId)
          .in('conversation_id', myConvoIds);

        if (sharedMemberships?.length > 0) {
          console.log('✅ Found shared conversation via members:', sharedMemberships[0].conversation_id);
          PRIVATE_CHAT_SESSIONS[chatId] = sharedMemberships[0].conversation_id;
          CONVERSATION_ID_CACHE[chatId] = sharedMemberships[0].conversation_id;
          return sharedMemberships[0].conversation_id;
        }
      }
    }

    // Create a new private conversation
    const { data: newConvo, error: createErr } = await supabaseClient
      .from('conversations')
      .insert({
        title: `${currentUser?.name || 'Me'} & ${targetName}`,
        is_group: false,
        local_created_by: myLocalId,
        participant_names: participantKey
      })
      .select('id')
      .single();

    if (createErr || !newConvo?.id) {
      console.error('❌ Failed to create conversation:', createErr?.message);
      return null;
    }

    const convId = newConvo.id;
    console.log('✅ Created new private conversation:', convId);
    PRIVATE_CHAT_SESSIONS[chatId] = convId;
    CONVERSATION_ID_CACHE[chatId] = convId;

    // Add myself as member
    if (myIsUuid) {
      await supabaseClient.from('conversation_members').insert({
        conversation_id: convId,
        user_id: myUserId,
        display_name: currentUser?.name || '',
        display_initials: currentUser?.initials || ''
      });
    } else {
      await supabaseClient.from('conversation_members').insert({
        conversation_id: convId,
        user_id: null,
        local_user_id: myLocalId,
        display_name: currentUser?.name || '',
        display_initials: currentUser?.initials || ''
      });
    }

    // Add target user as member
    const initials = (targetName || 'User').split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    await supabaseClient.from('conversation_members').insert({
      conversation_id: convId,
      user_id: targetProfileId,
      display_name: targetName,
      display_initials: initials
    });

    return convId;
  } catch (err) {
    console.error('❌ getOrCreatePrivateConversation exception:', err);
    return null;
  }
}

// ── Load Private Messages from Supabase ───────────────────────
async function loadPrivateMessages(chatId, conversationId, targetProfileId) {
  if (typeof supabaseClient === 'undefined') return;

  try {
    const myUserId = await getVerifiedCurrentUserId();
    const myLocalId = String(myUserId || currentUser?.mobile || currentUser?.id || '');

    const { data: msgs, error } = await supabaseClient
      .from('messages')
      .select('id, sender_id, local_sender_id, sender_name, sender_initials, content, created_at')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) { console.error('❌ Load messages error:', error.message); return; }

    const chat = CHATS_DATABASE[chatId];
    if (!chat) return;

    const mapped = (msgs || []).map(m => {
      const isOutgoing =
        (m.sender_id && m.sender_id === myUserId) ||
        (m.local_sender_id && m.local_sender_id === myLocalId) ||
        (m.sender_name && currentUser?.name && m.sender_name === currentUser.name);
      const dateObj = new Date(m.created_at);
      const timeStr = !isNaN(dateObj)
        ? dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : 'Just now';
      return {
        id: m.id,
        isOutgoing,
        senderName: isOutgoing ? (currentUser?.name || 'Me') : (m.sender_name || chat.name),
        avatar: isOutgoing ? (currentUser?.initials || 'ME') : chat.avatarInitial,
        avatarBg: isOutgoing
          ? (currentUser?.avatarBg || 'linear-gradient(135deg,#00c853,#1565c0)')
          : chat.avatarBg,
        text: m.content,
        time: timeStr,
        created_at: m.created_at
      };
    });

    // Retain any pending messages not yet confirmed in database
    const pendingMsgs = (chat.messages || []).filter(m => m.pending);
    for (const p of pendingMsgs) {
      if (!mapped.some(m => m.text === p.text)) {
        mapped.push(p);
      }
    }

    if (mapped.length > 0) {
      chat.messages = mapped;
    } // else preserve existing messages
    if (mapped.length > 0) {
      const last = mapped[mapped.length - 1];
      chat.preview = (last.isOutgoing ? 'You: ' : '') + last.text;
      chat.time = last.time;
      chat.unread = 0;
    }

    if (activeChatId === chatId) renderChatMessages(chatId);
    renderChatContactList(activeChatFilter);
    console.log(`✅ Loaded ${mapped.length} private messages for ${chatId}`);
  } catch (err) {
    console.error('❌ loadPrivateMessages exception:', err);
  }
}

// ── Load All User Private Conversations on Startup ────────────
async function loadUserPrivateConversationsFromSupabase() {
  if (typeof supabaseClient === 'undefined') return;

  try {
    const myUserId = await getVerifiedCurrentUserId();
    if (!myUserId) return;

    const myLocalId = String(myUserId || currentUser?.mobile || currentUser?.phone || currentUser?.id || '');

    // 1. Fetch conversations where current user is a member
    const { data: myMemberships, error: memErr } = await supabaseClient
      .from('conversation_members')
      .select('conversation_id')
      .or(`user_id.eq.${myUserId},local_user_id.eq.${myLocalId}`);

    if (memErr) {
      console.warn('loadUserPrivateConversationsFromSupabase members error:', memErr);
    }

    // Also get conversations created by this user or containing user in participant_names
    const { data: myCreated, error: createdErr } = await supabaseClient
      .from('conversations')
      .select('id, title, is_group, participant_names, created_at')
      .or(`local_created_by.eq.${myLocalId},participant_names.ilike.%${myUserId}%`);

    const convoIdSet = new Set();
    (myMemberships || []).forEach(m => convoIdSet.add(m.conversation_id));
    (myCreated || []).forEach(c => convoIdSet.add(c.id));

    if (convoIdSet.size === 0) return;

    const convoIds = Array.from(convoIdSet);

    // 2. Fetch all members of these conversations
    const { data: allMembers, error: allMemErr } = await supabaseClient
      .from('conversation_members')
      .select('conversation_id, user_id, local_user_id, display_name, display_initials')
      .in('conversation_id', convoIds);

    // 3. Fetch conversation details
    const { data: convosData } = await supabaseClient
      .from('conversations')
      .select('id, title, is_group, participant_names, created_at')
      .in('id', convoIds);

    const convoMap = {};
    (convosData || []).forEach(c => { convoMap[c.id] = c; });

    // 4. Map each conversation to the other participant
    const targetUserIds = new Set();
    const convoToTarget = {};

    for (const cId of convoIds) {
      const convo = convoMap[cId];
      if (convo && convo.is_group) continue; // skip group chats

      const members = (allMembers || []).filter(m => m.conversation_id === cId);
      const otherMember = members.find(m =>
        (m.user_id && m.user_id !== myUserId) ||
        (m.local_user_id && m.local_user_id !== myLocalId)
      );

      let targetId = otherMember?.user_id || otherMember?.local_user_id;

      if (!targetId && convo?.participant_names) {
        const parts = convo.participant_names.split('::');
        targetId = parts.find(p => p !== myUserId && p !== myLocalId);
      }

      if (targetId) {
        if (['rahul', 'bhopal-strikers', 'priya', 'arjun', 'sneha'].includes(targetId)) {
          continue;
        }

        targetUserIds.add(targetId);
        convoToTarget[cId] = {
          targetId,
          targetName: otherMember?.display_name || '',
          targetInitials: otherMember?.display_initials || ''
        };
      }
    }

    if (targetUserIds.size === 0) return;

    // 5. Fetch profiles of target users
    const validUuids = Array.from(targetUserIds).filter(id =>
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
    );

    let profilesMap = {};
    if (validUuids.length > 0) {
      const { data: profiles } = await supabaseClient
        .from('profiles')
        .select('id, full_name, username, phone, role, city, state')
        .in('id', validUuids);

      (profiles || []).forEach(p => {
        profilesMap[p.id] = p;
      });
    }

    // 6. Fetch latest message for each conversation
    const { data: latestMessages } = await supabaseClient
      .from('messages')
      .select('conversation_id, content, created_at, sender_id, local_sender_id, sender_name')
      .in('conversation_id', Object.keys(convoToTarget))
      .order('created_at', { ascending: false });

    const latestMsgByConvo = {};
    (latestMessages || []).forEach(m => {
      if (!latestMsgByConvo[m.conversation_id]) {
        latestMsgByConvo[m.conversation_id] = m;
      }
    });

    const bgColors = [
      'linear-gradient(135deg, #7c3aed, #2979ff)',
      'linear-gradient(135deg, #00897b, #1565c0)',
      'linear-gradient(135deg, #e53935, #880e4f)',
      'linear-gradient(135deg, #f57c00, #e91e63)',
      'linear-gradient(135deg, #2e7d32, #00796b)',
    ];

    let changed = false;
    for (const [convoId, info] of Object.entries(convoToTarget)) {
      const targetId = info.targetId;
      const profile = profilesMap[targetId];
      const displayName = profile?.full_name || profile?.username || info.targetName || 'Sportify User';
      const initials = (displayName || '?')
        .split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || info.targetInitials || 'SU';
      const chatId = 'private_' + targetId;

      PRIVATE_CHAT_SESSIONS[chatId] = convoId;
      CONVERSATION_ID_CACHE[chatId] = convoId;

      const latestMsg = latestMsgByConvo[convoId];
      const isOutgoing = latestMsg && (
        (latestMsg.sender_id && latestMsg.sender_id === myUserId) ||
        (latestMsg.local_sender_id && latestMsg.local_sender_id === myLocalId) ||
        (latestMsg.sender_name && latestMsg.sender_name === currentUser?.name)
      );

      let timeStr = 'Recently';
      if (latestMsg?.created_at) {
        const d = new Date(latestMsg.created_at);
        timeStr = !isNaN(d) ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently';
      }

      const previewText = latestMsg
        ? ((isOutgoing ? 'You: ' : '') + latestMsg.content)
        : 'Say hi! 👋';

      if (!CHATS_DATABASE[chatId]) {
        let hash = 0;
        for (let i = 0; i < targetId.length; i++) {
          hash = (hash << 5) - hash + targetId.charCodeAt(i);
          hash |= 0;
        }
        const bg = bgColors[Math.abs(hash) % bgColors.length];

        CHATS_DATABASE[chatId] = {
          id: chatId,
          profileId: targetId,
          name: displayName,
          contactName: displayName,
          status: '● Registered Sportify User',
          isGroup: false,
          avatarInitial: initials,
          avatarBg: bg,
          unread: 0,
          preview: previewText,
          time: timeStr,
          messages: [],
          isPrivate: true
        };
        changed = true;
      } else {
        CHATS_DATABASE[chatId].profileId = targetId;
        CHATS_DATABASE[chatId].isPrivate = true;
        if (latestMsg && (!CHATS_DATABASE[chatId].messages || CHATS_DATABASE[chatId].messages.length === 0)) {
          CHATS_DATABASE[chatId].preview = previewText;
          CHATS_DATABASE[chatId].time = timeStr;
          changed = true;
        }
      }
    }

    if (changed) {
      renderChatContactList(activeChatFilter);
      console.log('✅ Loaded user private conversations from Supabase:', Object.keys(convoToTarget).length);
    }
  } catch (err) {
    console.error('❌ Exception loading user private conversations:', err);
  }
}

// ── Setup Realtime Subscription for Messages ──────────────────
function setupMessagesRealtimeSubscription() {
  if (typeof supabaseClient === 'undefined') return;

  try {
    supabaseClient
      .channel('public:messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, async (payload) => {
        const newMsg = payload.new;
        if (!newMsg || !newMsg.conversation_id) return;

        const myUserId = await getVerifiedCurrentUserId();
        const myLocalId = String(myUserId || currentUser?.mobile || currentUser?.id || '');

        let targetChatId = null;
        for (const [cId, convId] of Object.entries(PRIVATE_CHAT_SESSIONS)) {
          if (convId === newMsg.conversation_id) {
            targetChatId = cId;
            break;
          }
        }
        if (!targetChatId) {
          for (const [cId, convId] of Object.entries(CONVERSATION_ID_CACHE)) {
            if (convId === newMsg.conversation_id) {
              targetChatId = cId;
              break;
            }
          }
        }

        if (targetChatId && CHATS_DATABASE[targetChatId]) {
          const chat = CHATS_DATABASE[targetChatId];
          const isOutgoing =
            (newMsg.sender_id && newMsg.sender_id === myUserId) ||
            (newMsg.local_sender_id && newMsg.local_sender_id === myLocalId) ||
            (newMsg.sender_name && currentUser?.name && newMsg.sender_name === currentUser.name);

          const existing = (chat.messages || []).find(m => m.id === newMsg.id);
          if (existing) return;

          const dateObj = new Date(newMsg.created_at);
          const timeStr = !isNaN(dateObj)
            ? dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : 'Just now';

          const formatted = {
            id: newMsg.id,
            isOutgoing,
            senderName: isOutgoing ? (currentUser?.name || 'Me') : (newMsg.sender_name || chat.name),
            avatar: isOutgoing ? (currentUser?.initials || 'ME') : chat.avatarInitial,
            avatarBg: isOutgoing
              ? (currentUser?.avatarBg || 'linear-gradient(135deg,#00c853,#1565c0)')
              : chat.avatarBg,
            text: newMsg.content,
            time: timeStr,
            created_at: newMsg.created_at
          };

          if (isOutgoing) {
            // Remove optimistic (pending) message that matches by text, OR by any pending flag
            // This prevents duplicate display when realtime confirms the sent message
            let tempIdx = (chat.messages || []).findIndex(m => m.pending && m.text === newMsg.content);
            if (tempIdx === -1) {
              // Fallback: remove any pending outgoing message with same text
              tempIdx = (chat.messages || []).findIndex(m => m.isOutgoing && m.text === newMsg.content && !m.created_at);
            }
            if (tempIdx !== -1) chat.messages.splice(tempIdx, 1);
          } else {
            // For incoming messages, check if already added (dedup)
            const alreadyExists = (chat.messages || []).some(m => m.id === newMsg.id || (!m.pending && m.text === newMsg.content && !m.isOutgoing));
            if (alreadyExists) return;
          }

          if (!chat.messages) chat.messages = [];
          chat.messages.push(formatted);
          chat.preview = (isOutgoing ? 'You: ' : '') + newMsg.content;
          chat.time = timeStr;

          if (activeChatId !== targetChatId && !isOutgoing) {
            chat.unread = (chat.unread || 0) + 1;
          }

          if (activeChatId === targetChatId) {
            renderChatMessages(targetChatId);
          }
          renderChatContactList(activeChatFilter);
        }
      })
      .subscribe((status) => {
        console.log('SUPABASE: Messages realtime subscription status:', status);
      });
  } catch (err) {
    console.warn('Realtime subscription error:', err);
  }
}

// ── Override sendMessage to route private chats to Supabase ───
const _originalSendMessage = window.sendMessage;

async function sendPrivateChatMessage(chatId, text) {
  if (!text?.trim()) return;

  const conversationId =
    PRIVATE_CHAT_SESSIONS[chatId] ||
    CONVERSATION_ID_CACHE[chatId] ||
    (await getOrCreatePrivateConversation(
      CHATS_DATABASE[chatId]?.profileId || chatId,
      CHATS_DATABASE[chatId]?.name || 'User'
    ));

  if (!conversationId) {
    console.error('❌ No conversation ID — cannot send to Supabase');
    return;
  }

  PRIVATE_CHAT_SESSIONS[chatId] = conversationId;
  CONVERSATION_ID_CACHE[chatId] = conversationId;

  const myUserId = await getVerifiedCurrentUserId();
  const myIsUuid = myUserId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(myUserId);
  const myLocalId = String(myUserId || currentUser?.mobile || currentUser?.id || '');

  const { error } = await supabaseClient.from('messages').insert({
    conversation_id: conversationId,
    sender_id: myIsUuid ? myUserId : null,
    local_sender_id: myIsUuid ? null : myLocalId,
    sender_name: currentUser?.name || '',
    sender_initials: currentUser?.initials || '',
    content: text
  });

  if (error) {
    console.error('❌ SUPABASE send message error:', error.message);
  } else {
    console.log('✅ Message saved to Supabase conversation:', conversationId);
  }
}


/**
 * 18. APPLICATION INITIALIZATION
 */


document.addEventListener("DOMContentLoaded", () => {

  if (!currentUser) {

    console.error(
      "SPORTIFY: No authenticated user. App cannot load."
    );

    return;
  }

  activeViewedProfileId = currentUser.id;

  applyCurrentAthleteToShell(currentUser);

  renderProfileScreen(currentUser);

  renderChatContactList();

  renderChatMessages(activeChatId);

  switchCommunity(currentCommunityId);

  filterBlockedFeedPosts();

  updateSafetyBadges();

  // Asynchronously synchronize profile, private conversations, and active chat from Supabase
  syncCurrentUserFromSupabase().then(async () => {
    // 1. Load all real private conversations from Supabase for current user
    await loadUserPrivateConversationsFromSupabase();

    // 2. Setup Realtime subscription for incoming messages
    setupMessagesRealtimeSubscription();

    // 3. Load active chat messages if one is selected
    if (activeChatId) {
      if (CHATS_DATABASE[activeChatId]?.isPrivate || (typeof activeChatId === "string" && activeChatId.startsWith("private_"))) {
        const chat = CHATS_DATABASE[activeChatId];
        const targetProfileId = chat.profileId || activeChatId.replace("private_", "");
        const conversationId =
          PRIVATE_CHAT_SESSIONS[activeChatId] ||
          CONVERSATION_ID_CACHE[activeChatId] ||
          (await getOrCreatePrivateConversation(targetProfileId, chat.name || "User"));
        if (conversationId) {
          PRIVATE_CHAT_SESSIONS[activeChatId] = conversationId;
          CONVERSATION_ID_CACHE[activeChatId] = conversationId;
          await loadPrivateMessages(activeChatId, conversationId, targetProfileId);
        }
      } else {
        loadChatMessagesFromSupabase(activeChatId);
      }
    }
  });

});
