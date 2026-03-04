// Centralized configuration for the Birthday Website

const config = {
    targetName: "Princess",
    targetDate: "2026-03-05T00:00:00", // The big day!

    // 2. Timeline Section
    timeline: [
        {
            date: "20 Dec, 2020",
            title: "The Day We Met",
            image: "/assets/images/20Dec2020.jpeg",
            description: "The moment our story began. Couldn't keep my eyes off of you."
        },
        {
            date: "7 Mar, 2021",
            title: "The Disaster",
            image: "/assets/images/7Mar2021.jpeg",
            description: "The meet you wouldn't wanna remember, sorry for being such an asshole."
        },
        {
            date: "9 Nov, 2021",
            title: "Pre Glow Up Phase",
            image: "/assets/images/9Nov2021.jpeg",
            description: "The time when we started feeling the spark."
        },
        {
            date: "2 Jun, 2022",
            title: "Love grew exponentially",
            image: "/assets/images/2Jun2022.jpeg",
            description: "Jitna bhi cool ban lu, i realise i'm half a heart without you."
        },
        {
            date: "9 Jun, 2023",
            title: "Commitment issues gone",
            image: "/assets/images/9Jun2023.jpeg",
            description: "Uff You made this day so special for us and you look so pyaara."
        },
        {
            date: "7 Jul, 2023",
            title: "Our Adventure",
            image: "/assets/images/7Jul2023.jpeg",
            description: "Besides all the chutiyapa, this trip is special and wholesome, dedicated to our friends."
        },
        {
            date: "8 Jan, 2024",
            title: "Dhal gaya din",
            image: "/assets/images/8Jan2024.jpeg",
            description: "You never fail to come see me off, I'm so blessed in life."
        },
        {
            date: "17 Jun, 2024",
            title: "Our first Trip",
            image: "/assets/images/17Jun2024.jpeg",
            description: "The whole trip was so fun and thrilling, i loved how our friends bonded."
        },
        {
            date: "28 Dec, 2024",
            title: "Holidays Together",
            image: "/assets/images/28Dec2024.jpeg",
            description: "Always look up to college vacations only for this."
        },
        {
            date: "15 Oct, 2025",
            title: "Celebration Time",
            image: "/assets/images/15Oct2025.jpeg",
            description: "This day is so close to my heart, Never felt so loved in life."
        },
        {
            date: "15 Feb, 2026",
            title: "Best Valentine's ever",
            image: "/assets/images/15Feb2026.jpeg",
            description: "This is undoubtedly the best day of my life, Words feel short for what i felt, still pinching myself."
        }
    ],

    // 3. Memory Vault
    vault: {
        passphrase: "bugglypuggly",
        quiz: [
            { question: "Where was our first date?", answer: "coffee shop" },
            { question: "What is my nickname for you?", answer: "princess" }
        ],
        hiddenImages: [
            "/assets/images/secret1.jpg",
            "/assets/images/secret2.jpg"
        ]
    },

    // 4. Gifts Countdown
    gifts: [
        {
            id: "gift-1",
            title: "First Surprise",
            unlockDate: "2026-03-05T09:00:00", // Unlocks at 9 AM on birthday
            image: "/happycat.jpg",
            message: "Start the day right!",
            clue: "Check the kitchen table."
        },
        {
            id: "gift-2",
            title: "Midday Treat",
            unlockDate: "2026-03-05T13:00:00", // Unlocks at 1 PM
            image: "/assets/images/gift2.jpg",
            message: "A little something to keep you going.",
            clue: "Look inside your favorite mug."
        },
        {
            id: "gift-3",
            title: "Evening Sparkle",
            unlockDate: "2026-03-05T18:00:00", // Unlocks at 6 PM
            image: "/assets/images/gift3.jpg",
            message: "Get ready for tonight...",
            clue: "Hidden behind the mirror."
        },
        {
            id: "gift-4",
            title: "The Main Event",
            unlockDate: "2026-03-05T20:00:00", // Unlocks at 8 PM
            image: "/assets/images/gift4.jpg",
            message: "You're the best thing that ever happened to me.",
            clue: "I have it with me right now."
        }
    ],

    // 5. Letter Paragraphs (formerly Love Notes)
    loveNotes: [
        "Words cannot truly capture how much you mean to me, but I wanted to try. From the moment you walked into my life, everything became brighter, warmer, and endlessly beautiful.",
        "You have the most beautiful smile that can light up my darkest days.",
        "Every single day with you is a gift that I cherish deeply.",
        "I love how kind your heart is, your chaos, and how you support my wildest dreams.",
        "On this special day, I just want you to know that I appreciate you more than you'll ever know."
    ],

    // 6. Reasons
    reasons: [
        "I love your laugh.",
        "I love your smile.",
        "I love how pretty you are.",
        "I love your presence.",
        "I love your sense of humor.",
        "I love your beautiful eyes.",
        "I love your kind heart.",
        "I love your soft lips.",
        "I love your body.",
        "I love your determination.",
        "I love your warm hugs.",
        "I love your passion for life.",
        "I love your silly jokes.",
        "I love your creativity.",
        "I love your adventurous spirit.",
        "I love your gentle nature.",
        "I love your unending support.",
        "I love your beautiful voice.",
        "I love your chaotic energy.",
        "I love your sweet texts.",
        "I love your taste in music.",
        "I love your naughtiness."
    ]
};

export default config;
