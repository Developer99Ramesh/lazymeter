# Desi Laziness Quiz - Pure HTML/CSS/JS Version

A fun, interactive personality quiz built with vanilla HTML, CSS, and JavaScript (no frameworks required!) that determines how lazy you really are with a desi cultural twist.

## Features

🌏 **Country Selection**: Choose from 21 countries with localized content
😂 **Country-Specific Humor**: Jokes and questions tailored to your region
📝 **105+ Hilarious Questions**: Random selection of 7 questions per session
⏰ **2-Minute Timer**: Complete the quiz in exactly 2 minutes
🏆 **Personalized Certificates**: Downloadable certificates with your results
👏 **Sound Effects**: Clapping sound when certificate is generated
📱 **Fully Responsive**: Works perfectly on mobile and desktop
🎨 **Desi Styling**: Cultural terminology and vibrant design

## Quiz Result Types

- 🔥 **Dhoom Machale Champion** - The energetic go-getter
- 😎 **Chill but Smart Desi** - Perfectly balanced lifestyle
- 🥔 **Aloo Bukhara Legend** - Master of minimal effort

## How to Use

1. **Open `index.html`** in any modern web browser (sound file already included)
2. **Enjoy the custom sound effect** when you complete the quiz
3. **Select your country** from the available options
4. **Enjoy country-specific jokes** on the welcome screen
5. **Answer 7 random questions** from 105+ hilarious scenarios
6. **Get your results** with personalized certificate and custom sound
7. **Share your score** on social media with #DesiLazy

## File Structure

```
standalone-quiz/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── quiz-data.js        # Questions, jokes, and data
├── app.js             # Main application logic
├── damage.mp3          # Your custom sound file
└── README.md          # This file
```

## Features Breakdown

### Country-Specific Content
- **India**: IPL cricket, train delays, roti making
- **Pakistan**: Cricket matches, chai routine
- **USA**: Super Bowl, Starbucks orders
- **UK**: Tea making, rain weather
- **Bangladesh**: Monsoon logic, Dhaka traffic
- **Others**: 16 more countries with localized humor

### Technical Features
- **Pure JavaScript**: No frameworks or dependencies
- **Custom Audio Support**: MP3/WAV/OGG sound file playback with fallback
- **Canvas API**: Certificate generation
- **Local Storage**: Could be added for score tracking
- **Responsive Design**: CSS Grid and Flexbox
- **Progressive Enhancement**: Works without JavaScript for basic functionality

### Custom Sound Effect

The quiz includes your custom "damage" sound effect that plays when:
- The certificate is generated
- User clicks the "Play Applause" button

**Sound Details:**
- File: `damage.mp3` (your uploaded audio)
- Volume: 80% (adjustable in app.js line 364)
- Format: MP3 with fallback support

To change the sound file, replace `damage.mp3` and update this line in `app.js`:
```javascript
const audio = new Audio('your-new-sound-file.mp3');
```

### Quiz Mechanics
- Random question selection from large pool
- Country-specific questions mixed with global ones
- Scoring system: 1 (active) to 5 (lazy) per answer
- Results calculated as percentage of maximum laziness
- Three distinct personality types based on score ranges

## Browser Compatibility

- **Chrome/Edge**: Full support including Web Audio API
- **Firefox**: Full support
- **Safari**: Full support (may require user interaction for audio)
- **Mobile browsers**: Fully responsive design

## Customization

### Adding More Countries
1. Add country to `countries` array in `quiz-data.js`
2. Add country-specific questions to `countrySpecificQuestions`
3. Add jokes to `countryJokes`

### Adding More Questions
Simply add new question objects to `allQuizQuestions` array:

```javascript
{
  id: 999,
  emoji: "😴",
  question: "Your question here?",
  answers: [
    { text: "Active response", score: 1 },
    { text: "Moderate response", score: 3 },
    { text: "Lazy response", score: 5 }
  ]
}
```

### Styling Changes
Modify CSS custom properties in `styles.css`:

```css
:root {
  --turquoise: #4ECDC4;
  --mint: #A8E6CF;
  --sunny: #FFE135;
  --coral: #FF6B6B;
  --orange: #FFA726;
  --navy: #2C3E50;
  --teal: #26A69A;
}
```

## Social Sharing

Built-in support for:
- Facebook sharing
- Twitter/X posting
- WhatsApp messaging
- Direct link copying
- Native web sharing API (mobile)

## Performance

- **Fast Loading**: No framework overhead
- **Small Size**: Under 100KB total
- **Efficient**: Minimal DOM manipulation
- **Cached**: Static files cache well

## License

Free to use and modify for personal and educational purposes.

## Credits

Created as a fun, cultural quiz experience celebrating desi humor and laziness with global appeal!