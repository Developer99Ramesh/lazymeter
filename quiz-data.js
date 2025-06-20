// Quiz Data - 105+ Questions with Country-Specific Content

const countries = [
  { code: "IN", name: "India", emoji: "🇮🇳", desiTerm: "Bharat" },
  { code: "PK", name: "Pakistan", emoji: "🇵🇰", desiTerm: "Pakistan" },
  { code: "BD", name: "Bangladesh", emoji: "🇧🇩", desiTerm: "Bangladesh" },
  { code: "LK", name: "Sri Lanka", emoji: "🇱🇰", desiTerm: "Lanka" },
  { code: "NP", name: "Nepal", emoji: "🇳🇵", desiTerm: "Nepal" },
  { code: "BT", name: "Bhutan", emoji: "🇧🇹", desiTerm: "Bhutan" },
  { code: "MV", name: "Maldives", emoji: "🇲🇻", desiTerm: "Maldives" },
  { code: "AF", name: "Afghanistan", emoji: "🇦🇫", desiTerm: "Afghanistan" },
  { code: "US", name: "United States", emoji: "🇺🇸", desiTerm: "America" },
  { code: "CA", name: "Canada", emoji: "🇨🇦", desiTerm: "Canada" },
  { code: "GB", name: "United Kingdom", emoji: "🇬🇧", desiTerm: "UK" },
  { code: "AU", name: "Australia", emoji: "🇦🇺", desiTerm: "Australia" },
  { code: "AE", name: "UAE", emoji: "🇦🇪", desiTerm: "UAE" },
  { code: "SA", name: "Saudi Arabia", emoji: "🇸🇦", desiTerm: "Saudi" },
  { code: "QA", name: "Qatar", emoji: "🇶🇦", desiTerm: "Qatar" },
  { code: "KW", name: "Kuwait", emoji: "🇰🇼", desiTerm: "Kuwait" },
  { code: "OM", name: "Oman", emoji: "🇴🇲", desiTerm: "Oman" },
  { code: "BH", name: "Bahrain", emoji: "🇧🇭", desiTerm: "Bahrain" },
  { code: "MY", name: "Malaysia", emoji: "🇲🇾", desiTerm: "Malaysia" },
  { code: "SG", name: "Singapore", emoji: "🇸🇬", desiTerm: "Singapore" },
  { code: "OTHER", name: "Other Country", emoji: "🌏", desiTerm: "Desi Zone" }
];

const allQuizQuestions = [
  {
    id: 1,
    emoji: "🛏️",
    question: "What's your ideal Sunday morning?",
    answers: [
      { text: "🏃‍♂️ Early morning jog followed by a productive day", score: 1 },
      { text: "🥞 Leisurely breakfast while scrolling through my phone", score: 3 },
      { text: "😴 What morning? I'm still in bed at 2 PM", score: 5 }
    ]
  },
  {
    id: 2,
    emoji: "🚗",
    question: "When you see a parking spot far from the entrance:",
    answers: [
      { text: "🚶‍♂️ Perfect! I need the exercise", score: 1 },
      { text: "🤷‍♀️ It's fine, I don't mind walking a bit", score: 3 },
      { text: "🔄 Keep driving until I find something closer", score: 5 }
    ]
  },
  {
    id: 3,
    emoji: "🍕",
    question: "Your approach to cooking dinner:",
    answers: [
      { text: "👨‍🍳 Fresh ingredients, homemade from scratch", score: 1 },
      { text: "📦 Pre-made meals with some fresh additions", score: 3 },
      { text: "🚚 Food delivery is my best friend", score: 5 }
    ]
  },
  {
    id: 4,
    emoji: "🏃‍♀️",
    question: "Your relationship with exercise:",
    answers: [
      { text: "💪 Daily workouts are part of my routine", score: 1 },
      { text: "🚶‍♀️ I walk sometimes, maybe hit the gym occasionally", score: 3 },
      { text: "📺 Does reaching for the remote count?", score: 5 }
    ]
  },
  {
    id: 5,
    emoji: "📱",
    question: "When your phone battery is at 5%:",
    answers: [
      { text: "🔌 I charge it immediately", score: 1 },
      { text: "⏰ I'll charge it when I remember", score: 3 },
      { text: "🤞 Living dangerously until it dies", score: 5 }
    ]
  },
  {
    id: 6,
    emoji: "🧹",
    question: "Your cleaning style:",
    answers: [
      { text: "✨ Daily tidying, everything has its place", score: 1 },
      { text: "📅 Weekly cleaning sessions work for me", score: 3 },
      { text: "🔍 Clean only when I can't find anything", score: 5 }
    ]
  },
  {
    id: 7,
    emoji: "🛒",
    question: "Grocery shopping approach:",
    answers: [
      { text: "📝 Detailed list, multiple stores for best deals", score: 1 },
      { text: "📋 One store, rough list in my head", score: 3 },
      { text: "🛍️ Online delivery, obviously", score: 5 }
    ]
  },
  {
    id: 8,
    emoji: "🎬",
    question: "Your Netflix browsing strategy:",
    answers: [
      { text: "🎯 I research and pick something specific", score: 1 },
      { text: "⏱️ Browse for 10-15 minutes then decide", score: 3 },
      { text: "🔄 Scroll for hours, end up rewatching The Office", score: 5 }
    ]
  },
  {
    id: 9,
    emoji: "🚿",
    question: "Getting ready in the morning:",
    answers: [
      { text: "⏰ Up early, full routine, ready to conquer", score: 1 },
      { text: "🕐 Normal routine, out the door on time", score: 3 },
      { text: "💨 Snooze button champion, dry shampoo hero", score: 5 }
    ]
  },
  {
    id: 10,
    emoji: "💼",
    question: "Your work-from-home outfit:",
    answers: [
      { text: "👔 Fully dressed like I'm going to the office", score: 1 },
      { text: "👕 Casual but presentable", score: 3 },
      { text: "👕 Business on top, pajamas on bottom", score: 5 }
    ]
  },
  {
    id: 11,
    emoji: "🚪",
    question: "When someone knocks on your door unexpectedly:",
    answers: [
      { text: "🏃‍♂️ Immediately open it with a smile", score: 1 },
      { text: "👀 Peek through the window first", score: 3 },
      { text: "🤫 Pretend I'm not home and hide", score: 5 }
    ]
  },
  {
    id: 12,
    emoji: "🍽️",
    question: "Washing dishes after dinner:",
    answers: [
      { text: "🧽 Immediately after eating", score: 1 },
      { text: "⏰ Before going to bed", score: 3 },
      { text: "🗑️ When I run out of clean plates", score: 5 }
    ]
  },
  {
    id: 13,
    emoji: "🛍️",
    question: "When shopping for clothes:",
    answers: [
      { text: "👗 Try everything on multiple times", score: 1 },
      { text: "👕 Quick try-on and decide", score: 3 },
      { text: "🛒 Buy online and hope for the best", score: 5 }
    ]
  },
  {
    id: 14,
    emoji: "🌡️",
    question: "When it's too hot/cold in the room:",
    answers: [
      { text: "⚙️ Adjust the thermostat immediately", score: 1 },
      { text: "🧥 Add or remove layers", score: 3 },
      { text: "😤 Complain but do nothing", score: 5 }
    ]
  },
  {
    id: 15,
    emoji: "📧",
    question: "Checking and replying to emails:",
    answers: [
      { text: "⚡ Instantly, within minutes", score: 1 },
      { text: "📅 Once or twice a day", score: 3 },
      { text: "📬 When I remember, maybe next week", score: 5 }
    ]
  },
  {
    id: 16,
    emoji: "🎵",
    question: "When a song you don't like comes on:",
    answers: [
      { text: "⏭️ Immediately skip or change it", score: 1 },
      { text: "⏱️ Wait a bit, then change", score: 3 },
      { text: "😑 Suffer through the whole song", score: 5 }
    ]
  },
  {
    id: 17,
    emoji: "📚",
    question: "Reading a book:",
    answers: [
      { text: "📖 Daily reading habit", score: 1 },
      { text: "📕 Occasionally when I find time", score: 3 },
      { text: "📱 Does scrolling social media count?", score: 5 }
    ]
  },
  {
    id: 18,
    emoji: "🚿",
    question: "Taking a shower:",
    answers: [
      { text: "🏃‍♂️ Quick 5-minute efficiency shower", score: 1 },
      { text: "🚿 Normal 10-15 minute shower", score: 3 },
      { text: "🎤 45-minute concert performance", score: 5 }
    ]
  },
  {
    id: 19,
    emoji: "🎮",
    question: "When you lose a game multiple times:",
    answers: [
      { text: "💪 Keep trying until I win", score: 1 },
      { text: "🔄 Try a few more times then take a break", score: 3 },
      { text: "😤 Rage quit and watch YouTube instead", score: 5 }
    ]
  },
  {
    id: 20,
    emoji: "🍔",
    question: "When you're hungry but the kitchen is messy:",
    answers: [
      { text: "🧽 Clean first, then cook", score: 1 },
      { text: "🍳 Cook around the mess", score: 3 },
      { text: "📱 Order food instead", score: 5 }
    ]
  },
  // Continue with more questions...
  {
    id: 21,
    emoji: "📺",
    question: "When the remote is just out of reach:",
    answers: [
      { text: "🏃‍♂️ Get up and grab it", score: 1 },
      { text: "🏹 Try to reach it with something long", score: 3 },
      { text: "📺 Watch whatever's on", score: 5 }
    ]
  },
  {
    id: 22,
    emoji: "🛏️",
    question: "Making your bed:",
    answers: [
      { text: "✨ Every single morning", score: 1 },
      { text: "🏠 When guests are coming over", score: 3 },
      { text: "🤷‍♂️ I'm getting back in it anyway", score: 5 }
    ]
  },
  {
    id: 23,
    emoji: "🧹",
    question: "When you spill something:",
    answers: [
      { text: "🧽 Clean it up right away", score: 1 },
      { text: "📄 Put a napkin on it for now", score: 3 },
      { text: "👀 Walk around it, someone else's problem", score: 5 }
    ]
  },
  // Daily Routine & Habits
  {
    id: 24,
    emoji: "📱",
    question: "What's the first thing you do after waking up?",
    answers: [
      { text: "🏃‍♂️ Get up and start my day", score: 1 },
      { text: "☀️ Check the time, then get ready", score: 3 },
      { text: "📱 Scroll reels for 30 minutes in bed", score: 5 }
    ]
  },
  {
    id: 25,
    emoji: "🦷",
    question: "Do you brush before breakfast... or skip both?",
    answers: [
      { text: "🦷 Always brush first, then breakfast", score: 1 },
      { text: "🍞 Breakfast first, brush later", score: 3 },
      { text: "🤷‍♂️ Skip both, who's checking?", score: 5 }
    ]
  },
  {
    id: 26,
    emoji: "💻",
    question: "Ever attended Zoom meeting in pajamas with camera off?",
    answers: [
      { text: "👔 Always dressed professionally", score: 1 },
      { text: "👕 Decent top, casual bottom", score: 3 },
      { text: "😴 Full pajama mode, camera definitely off", score: 5 }
    ]
  },
  {
    id: 27,
    emoji: "⏰",
    question: "How long can you stay in bed after waking up?",
    answers: [
      { text: "⚡ Up immediately when I wake", score: 1 },
      { text: "⏱️ 10-15 minutes max", score: 3 },
      { text: "🛏️ Hours... why get up?", score: 5 }
    ]
  },
  {
    id: 28,
    emoji: "😅",
    question: "Do you ever fake 'I'm busy' just to avoid work?",
    answers: [
      { text: "💼 Never, always honest about availability", score: 1 },
      { text: "🤔 Sometimes when overwhelmed", score: 3 },
      { text: "🎭 It's basically my life motto", score: 5 }
    ]
  },
  {
    id: 29,
    emoji: "🍳",
    question: "Breakfast or brunch? Or skip both?",
    answers: [
      { text: "🌅 Proper breakfast every morning", score: 1 },
      { text: "🥐 Brunch when I can", score: 3 },
      { text: "☕ Coffee counts as breakfast", score: 5 }
    ]
  },
  {
    id: 30,
    emoji: "😴",
    question: "How many naps is 'too many' in your day?",
    answers: [
      { text: "☀️ No naps, sleep at night only", score: 1 },
      { text: "🛌 One afternoon nap is perfect", score: 3 },
      { text: "💤 Life is just naps with small breaks", score: 5 }
    ]
  },
  {
    id: 31,
    emoji: "🚚",
    question: "Do you order food because you're too lazy to cook?",
    answers: [
      { text: "👨‍🍳 Always cook fresh meals", score: 1 },
      { text: "🍝 Cook sometimes, order sometimes", score: 3 },
      { text: "📱 Delivery apps are life", score: 5 }
    ]
  },
  {
    id: 32,
    emoji: "🍿",
    question: "Have you ever slept with food in your mouth?",
    answers: [
      { text: "😳 Never! That's dangerous", score: 1 },
      { text: "😅 Maybe dozed off while chewing", score: 3 },
      { text: "🤤 Food coma is real", score: 5 }
    ]
  },
  // Entertainment & Scrolling
  {
    id: 33,
    emoji: "📺",
    question: "What's your longest binge-watch streak?",
    answers: [
      { text: "⏰ 2-3 episodes max", score: 1 },
      { text: "📱 One season in a day", score: 3 },
      { text: "🌙 48 hours straight, what's sleep?", score: 5 }
    ]
  },
  {
    id: 34,
    emoji: "🛁",
    question: "Have you ever skipped bath to finish a Netflix episode?",
    answers: [
      { text: "🚿 Hygiene always comes first", score: 1 },
      { text: "⏰ Maybe delayed it by 30 minutes", score: 3 },
      { text: "📺 'Just one more episode' - 3 days later", score: 5 }
    ]
  },
  {
    id: 35,
    emoji: "📱",
    question: "How many hours do you scroll reels 'without realizing'?",
    answers: [
      { text: "⏱️ Maybe 30 minutes total daily", score: 1 },
      { text: "📲 1-2 hours, I track my time", score: 3 },
      { text: "🌀 Time is a social construct", score: 5 }
    ]
  },
  {
    id: 36,
    emoji: "⏭️",
    question: "Do you skip intros or sleep through them?",
    answers: [
      { text: "🎵 Always watch the intro, respect the art", score: 1 },
      { text: "⏩ Skip after watching once", score: 3 },
      { text: "😴 Intros are nap time", score: 5 }
    ]
  },
  {
    id: 37,
    emoji: "🍜",
    question: "Do you watch food vlogs but eat instant noodles?",
    answers: [
      { text: "👨‍🍳 I cook what I watch", score: 1 },
      { text: "🍝 Sometimes try simple recipes", score: 3 },
      { text: "🍜 Living vicariously through food videos", score: 5 }
    ]
  },
  // Sleep & Chill
  {
    id: 38,
    emoji: "⏰",
    question: "What's your average weekend wake-up time?",
    answers: [
      { text: "🌅 7-8 AM, routine is routine", score: 1 },
      { text: "☀️ 10-11 AM, reasonable sleep-in", score: 3 },
      { text: "🌇 2 PM is morning, right?", score: 5 }
    ]
  },
  {
    id: 39,
    emoji: "👕",
    question: "Do you sleep in the same clothes for 3 days straight?",
    answers: [
      { text: "👔 Fresh clothes every day", score: 1 },
      { text: "🔄 2 days max, then change", score: 3 },
      { text: "🤷‍♂️ If it's not dirty, why change?", score: 5 }
    ]
  },
  {
    id: 40,
    emoji: "⏰",
    question: "How many alarms do you need to finally wake up?",
    answers: [
      { text: "⚡ One alarm, up immediately", score: 1 },
      { text: "🔢 2-3 alarms as backup", score: 3 },
      { text: "📱 15 alarms every 5 minutes", score: 5 }
    ]
  },
  {
    id: 41,
    emoji: "💭",
    question: "Do you dream about sleeping more?",
    answers: [
      { text: "🌟 I dream about adventures", score: 1 },
      { text: "😴 Sometimes dream about naps", score: 3 },
      { text: "🛌 My dreams have beds in them", score: 5 }
    ]
  },
  // Chores & Work
  {
    id: 42,
    emoji: "🧹",
    question: "Do you clean your room only when guests are coming?",
    answers: [
      { text: "✨ Clean daily, it's therapeutic", score: 1 },
      { text: "📅 Weekly cleaning schedule", score: 3 },
      { text: "👥 What guests? Room's always messy", score: 5 }
    ]
  },
  {
    id: 43,
    emoji: "👂",
    question: "Do you pretend not to hear 'Mom calling' for housework?",
    answers: [
      { text: "🏃‍♂️ Always help immediately", score: 1 },
      { text: "⏰ Finish what I'm doing first", score: 3 },
      { text: "🎧 Sorry, music was too loud", score: 5 }
    ]
  },
  {
    id: 44,
    emoji: "🪑",
    question: "Is your chair a wardrobe now?",
    answers: [
      { text: "👔 Clothes go in closet immediately", score: 1 },
      { text: "🔄 Sometimes temporary storage", score: 3 },
      { text: "🪑 Chair? That's my clothing mountain", score: 5 }
    ]
  },
  {
    id: 45,
    emoji: "🥄",
    question: "Have you ever used a spoon from the sink to avoid washing another?",
    answers: [
      { text: "🧽 Always use clean utensils", score: 1 },
      { text: "💧 Quick rinse is fine", score: 3 },
      { text: "🥄 Sink spoon special, extra flavor", score: 5 }
    ]
  },
  // Fitness & Movement
  {
    id: 46,
    emoji: "🚶‍♂️",
    question: "Do you count walking to the fridge as your step goal?",
    answers: [
      { text: "🏃‍♂️ Proper exercise routine daily", score: 1 },
      { text: "🚶‍♀️ Some real walking plus daily activities", score: 3 },
      { text: "🧊 Fridge trips are cardio", score: 5 }
    ]
  },
  {
    id: 47,
    emoji: "🧘‍♀️",
    question: "Have you ever done stretching while lying down?",
    answers: [
      { text: "🧘‍♂️ Proper yoga mat, proper form", score: 1 },
      { text: "🪑 Chair stretches count", score: 3 },
      { text: "🛌 Horizontal yoga is still yoga", score: 5 }
    ]
  },
  {
    id: 48,
    emoji: "🦶",
    question: "Have you opened your door using your foot?",
    answers: [
      { text: "🖐️ Always use hands properly", score: 1 },
      { text: "🦶 Sometimes when hands are full", score: 3 },
      { text: "🦵 Feet are multipurpose tools", score: 5 }
    ]
  },
  // Excuses & Social
  {
    id: 49,
    emoji: "📶",
    question: "Do you fake buffering during online meetings?",
    answers: [
      { text: "📡 Stable connection always", score: 1 },
      { text: "🤔 Maybe blamed connection once", score: 3 },
      { text: "📶 'Can you hear me now?' is my catchphrase", score: 5 }
    ]
  },
  {
    id: 50,
    emoji: "🚗",
    question: "Ever sent 'On my way' while still in bed?",
    answers: [
      { text: "⏰ Only send when actually leaving", score: 1 },
      { text: "🚿 Send while getting ready", score: 3 },
      { text: "🛌 Time is relative", score: 5 }
    ]
  },
  {
    id: 51,
    emoji: "🤧",
    question: "What's your go-to excuse to skip plans?",
    answers: [
      { text: "✅ Never cancel, always show up", score: 1 },
      { text: "😷 Genuine reasons only", score: 3 },
      { text: "🤒 Sudden mysterious illness", score: 5 }
    ]
  },
  {
    id: 52,
    emoji: "📱",
    question: "Have you texted someone in the same house?",
    answers: [
      { text: "🗣️ Always talk face to face", score: 1 },
      { text: "📢 Call out their name first", score: 3 },
      { text: "💬 WhatsApp family group for everything", score: 5 }
    ]
  },
  // Food Laziness
  {
    id: 53,
    emoji: "🍜",
    question: "Do you wish Maggi cooked itself?",
    answers: [
      { text: "👨‍🍳 Cooking is enjoyable", score: 1 },
      { text: "⏱️ 2-minute noodles are quick enough", score: 3 },
      { text: "🤖 Where's my food robot?", score: 5 }
    ]
  },
  {
    id: 54,
    emoji: "😴",
    question: "Have you ever skipped eating because too lazy to chew?",
    answers: [
      { text: "🍽️ Never skip meals", score: 1 },
      { text: "🥤 Sometimes just smoothies", score: 3 },
      { text: "😪 Chewing is exhausting", score: 5 }
    ]
  },
  {
    id: 55,
    emoji: "📦",
    question: "Do you reuse delivery boxes instead of plates?",
    answers: [
      { text: "🍽️ Proper plates and utensils always", score: 1 },
      { text: "🔄 Sometimes for easy cleanup", score: 3 },
      { text: "📦 Box is plate, why dirty dishes?", score: 5 }
    ]
  },
  // Desi & Cultural
  {
    id: 56,
    emoji: "📺",
    question: "Have you asked your sibling to fetch the remote?",
    answers: [
      { text: "🏃‍♂️ Get it myself always", score: 1 },
      { text: "🤝 We take turns", score: 3 },
      { text: "👶 Younger sibling remote service", score: 5 }
    ]
  },
  {
    id: 57,
    emoji: "🏏",
    question: "Ever watched cricket lying on floor for 5 hours?",
    answers: [
      { text: "🪑 Proper seating always", score: 1 },
      { text: "🛋️ Couch potato mode", score: 3 },
      { text: "🏏 Floor cricket marathons are life", score: 5 }
    ]
  },
  {
    id: 58,
    emoji: "📅",
    question: "Ever told your mom 'I'll do it tomorrow' for 7 days?",
    answers: [
      { text: "✅ Do tasks immediately when asked", score: 1 },
      { text: "⏰ Maybe delayed by a day or two", score: 3 },
      { text: "📅 Tomorrow is my favorite day", score: 5 }
    ]
  },
  {
    id: 59,
    emoji: "🛵",
    question: "Do you sit on your bike for 10 mins before starting?",
    answers: [
      { text: "🏁 Start immediately and go", score: 1 },
      { text: "⏱️ Quick phone check first", score: 3 },
      { text: "🧘‍♂️ Bike meditation time", score: 5 }
    ]
  },
  {
    id: 60,
    emoji: "🔋",
    question: "Ever left phone charging and waited till 2% to plug in?",
    answers: [
      { text: "🔌 Charge at 20-30%", score: 1 },
      { text: "⚡ 10-15% charging threshold", score: 3 },
      { text: "💀 Living dangerously at 1%", score: 5 }
    ]
  },
  {
    id: 61,
    emoji: "⏰",
    question: "Do you say 'bas 5 min aur' every time someone wakes you?",
    answers: [
      { text: "⚡ Up immediately when called", score: 1 },
      { text: "🕐 Actually wake up in 5 minutes", score: 3 },
      { text: "⏰ 5 minutes = 2 hours in sleep math", score: 5 }
    ]
  },
  {
    id: 62,
    emoji: "🍔",
    question: "Do you scroll Swiggy for 30 mins and not order?",
    answers: [
      { text: "🎯 Quick decision, place order", score: 1 },
      { text: "🤔 Compare options, then order", score: 3 },
      { text: "📱 Professional food app browser", score: 5 }
    ]
  },
  {
    id: 63,
    emoji: "🤔",
    question: "Is 'Kya khaun?' your biggest daily struggle?",
    answers: [
      { text: "📋 Meal planning for the week", score: 1 },
      { text: "🍽️ Decide day by day", score: 3 },
      { text: "😵 Food decisions are impossible", score: 5 }
    ]
  },
  // Random & Relatable
  {
    id: 64,
    emoji: "🐕",
    question: "Do you talk to your pet more than people?",
    answers: [
      { text: "👥 Balanced social life with humans", score: 1 },
      { text: "🐱 Pets are great listeners", score: 3 },
      { text: "🐶 My pet understands me better", score: 5 }
    ]
  },
  {
    id: 65,
    emoji: "🧦",
    question: "Do you reuse socks to avoid finding new ones?",
    answers: [
      { text: "👕 Fresh clothes daily", score: 1 },
      { text: "🔄 2-day max rule", score: 3 },
      { text: "👃 Sniff test is my laundry detector", score: 5 }
    ]
  },
  {
    id: 66,
    emoji: "📝",
    question: "Is your 'To Do List' now 'Too Done List'?",
    answers: [
      { text: "✅ Complete all tasks daily", score: 1 },
      { text: "📋 Most tasks get done eventually", score: 3 },
      { text: "📝 Lists are just wishful thinking", score: 5 }
    ]
  },
  {
    id: 67,
    emoji: "🌅",
    question: "Do you say 'Tomorrow is a fresh start' every day?",
    answers: [
      { text: "💪 Make progress every day", score: 1 },
      { text: "🔄 Some days are reset days", score: 3 },
      { text: "📅 Professional tomorrow planner", score: 5 }
    ]
  },
  {
    id: 68,
    emoji: "👏",
    question: "Ever clapped to turn off lights that weren't smart lights?",
    answers: [
      { text: "💡 Always use proper switches", score: 1 },
      { text: "🤔 Maybe tried it once as a joke", score: 3 },
      { text: "👏 Still trying to make it work", score: 5 }
    ]
  },
  {
    id: 69,
    emoji: "📞",
    question: "Ever ignored 10 calls and replied 'busy'?",
    answers: [
      { text: "📱 Always answer calls promptly", score: 1 },
      { text: "⏰ Call back when free", score: 3 },
      { text: "📵 Calls are just suggestions", score: 5 }
    ]
  },
  {
    id: 70,
    emoji: "🧱",
    question: "Ever stared at the wall for 30 minutes doing nothing?",
    answers: [
      { text: "💪 Always productive", score: 1 },
      { text: "🧘‍♂️ Sometimes meditation", score: 3 },
      { text: "👁️ Wall-staring champion", score: 5 }
    ]
  }
];

const countrySpecificQuestions = {
  IN: [
    {
      id: 201,
      emoji: "🏏",
      question: "During IPL season, your productivity level is:",
      answers: [
        { text: "📈 Still focused on work, cricket is just background", score: 1 },
        { text: "📱 Check scores during breaks, manageable distraction", score: 3 },
        { text: "📺 What work? It's basically a national holiday!", score: 5 }
      ]
    },
    {
      id: 202,
      emoji: "🚆",
      question: "When the train is 2 hours late:",
      answers: [
        { text: "📞 Call alternative transport immediately", score: 1 },
        { text: "☕ Get chai and wait patiently", score: 3 },
        { text: "😴 Perfect time for a platform nap", score: 5 }
      ]
    },
    {
      id: 203,
      emoji: "🍛",
      question: "Making rotis from scratch:",
      answers: [
        { text: "👩‍🍳 Round, perfect rotis every time", score: 1 },
        { text: "🗺️ Slightly map-shaped but edible", score: 3 },
        { text: "🛒 Why make when you can buy ready-made?", score: 5 }
      ]
    }
  ],
  PK: [
    {
      id: 211,
      emoji: "🏏",
      question: "During Pakistan vs India match:",
      answers: [
        { text: "📺 Watch calmly, it's just a game", score: 1 },
        { text: "🎉 Get excited but stay reasonable", score: 3 },
        { text: "🚁 Cancel everything, this is LIFE!", score: 5 }
      ]
    },
    {
      id: 212,
      emoji: "🫖",
      question: "Your daily chai routine:",
      answers: [
        { text: "⏰ 2-3 cups at fixed times", score: 1 },
        { text: "☕ Whenever I feel like it", score: 3 },
        { text: "🫖 Chai is basically water, drink constantly", score: 5 }
      ]
    }
  ],
  US: [
    {
      id: 221,
      emoji: "🏈",
      question: "During Super Bowl Sunday:",
      answers: [
        { text: "🎯 Watch for the actual game strategy", score: 1 },
        { text: "🍕 Mainly here for the food and ads", score: 3 },
        { text: "😴 Perfect nap time, wake me for halftime", score: 5 }
      ]
    },
    {
      id: 222,
      emoji: "☕",
      question: "Your Starbucks ordering style:",
      answers: [
        { text: "☕ Simple black coffee, quick and efficient", score: 1 },
        { text: "🥤 Medium complexity, seasonal drinks", score: 3 },
        { text: "📝 Complex order with 5+ modifications", score: 5 }
      ]
    }
  ],
  GB: [
    {
      id: 231,
      emoji: "☕",
      question: "Making the perfect cup of tea:",
      answers: [
        { text: "⏱️ Precise timing, proper milk, perfect ritual", score: 1 },
        { text: "☕ Good enough, as long as it's hot", score: 3 },
        { text: "🫖 Microwave water, tea bag, done", score: 5 }
      ]
    },
    {
      id: 232,
      emoji: "🌧️",
      question: "When it's raining (again):",
      answers: [
        { text: "☂️ Proper umbrella, prepared as always", score: 1 },
        { text: "🧥 Hood up, power through", score: 3 },
        { text: "🏠 Cancel plans, it's a sign to stay in", score: 5 }
      ]
    }
  ]
};

const countryJokes = {
  IN: [
    "Why did the programmer from India break up with his girlfriend? Because she didn't understand his 'return' statement! 😂",
    "Indian weather forecast: Hot, Hotter, Monsoon, and 'Why is it cold in December?' 🌡️",
    "Traffic rules in India: Suggestions that everyone politely ignores while honking melodiously! 🚗🎵",
    "Indian mothers: 'Beta, you look thin. Are you eating properly?' *serves enough food for 10 people* 🍛",
    "Indian summer logic: It's so hot that even the fan is asking for a fan! 🔥"
  ],
  PK: [
    "Why don't Pakistani cricket fans ever get stressed? Because they're used to nail-biting finishes! 🏏😅",
    "Pakistani chai addiction level: When someone asks 'How are you?', you reply 'Just had chai, feeling fantastic!' ☕",
    "Traffic in Karachi: Where lane markers are more like gentle suggestions! 🚗",
    "Pakistani weddings: Where 'short and simple' means only 3 days and 500 guests! 💒"
  ],
  US: [
    "Why do Americans love drive-throughs? Because walking is basically a foreign concept! 🚗🍔",
    "American portion sizes: When 'small' is medium, 'medium' is large, and 'large' is basically a week's worth of food! 🍟",
    "Only in America: Where people drive to the gym to walk on a treadmill! 🏋️‍♀️",
    "American weather apps: 50% chance of rain means pack sunscreen and an umbrella! 🌦️"
  ],
  GB: [
    "British summer: That one day in July when it doesn't rain! ☀️",
    "Why do Brits talk about weather so much? Because it's the only thing that changes more than their government! 🌧️",
    "British queue etiquette: More sacred than any religious text! 📏",
    "Tea emergency protocol: When you're out of milk, it's basically a national crisis! ☕"
  ],
  BD: [
    "Bangladeshi monsoon logic: Why use an umbrella when you can just accept becoming one with the water? 🌧️",
    "Traffic in Dhaka: Where GPS just gives up and says 'Good luck, you're on your own!' 🚗",
    "Bengali fish love: When your relationship with hilsa is stronger than most human relationships! 🐟"
  ],
  OTHER: [
    "Why do lazy people make the best employees? Because they find the most efficient way to do everything! 😎",
    "Procrastination level: Waiting for the laptop to die so you have an excuse not to work! 💻",
    "Global lazy truth: The snooze button was humanity's greatest invention after the bed itself! ⏰"
  ]
};

const resultTypes = {
  low: {
    emoji: "🔥",
    title: "Dhoom Machale Champion",
    description: "Yaar, you're pure energy! While others are still thinking 'kal karenge', you've already finished the task and moved on to the next one. You're like that friend who actually gets up for morning walks and makes everyone else feel guilty. Total go-getter vibes!",
    achievement: "Full Dhoom Machale - You bring the energy wherever you go!"
  },
  medium: {
    emoji: "😎",
    title: "Chill but Smart Desi",
    description: "Perfect balance, bhai! You know when to hustle and when to relax. You're productive when needed but also know the art of 'jugaad' - finding smart shortcuts. You're that friend who gets things done but also knows how to enjoy life. Ekdum perfect!",
    achievement: "Master of Desi Balance - You've cracked the code of smart living!"
  },
  high: {
    emoji: "🥔",
    title: "Aloo Bukhara Legend",
    description: "Arre bhai, you've mastered the fine art of 'araam se'! Your philosophy is simple: 'Jaldi kya hai?' You believe in taking life slowly and finding the most comfortable way to do everything. You're the undisputed champion of minimal effort, maximum comfort!",
    achievement: "Certified Aloo Bukhara - You've earned the respect of lazy legends everywhere!"
  }
};

// Helper Functions
function getRandomQuestions(count = 7, countryCode = 'OTHER') {
  let questionPool = [...allQuizQuestions];
  
  // Add country-specific questions if available
  if (countrySpecificQuestions[countryCode]) {
    questionPool = [...questionPool, ...countrySpecificQuestions[countryCode]];
  }
  
  // Shuffle and select questions
  const shuffled = questionPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getCountryJokes(countryCode, count = 3) {
  const jokes = countryJokes[countryCode] || countryJokes['OTHER'];
  const shuffled = [...jokes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function calculateLazinessScore(answers, questionCount = 7) {
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  const maxPossibleScore = questionCount * 5;
  const percentage = Math.round((totalScore / maxPossibleScore) * 100);
  
  let type = 'low';
  if (percentage >= 70) type = 'high';
  else if (percentage >= 40) type = 'medium';
  
  return { score: percentage, type };
}

function findCountryByCode(code) {
  return countries.find(c => c.code === code) || countries.find(c => c.code === 'OTHER');
}