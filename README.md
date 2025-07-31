# 🎮 Language Creator Quiz

A sleek, professional dark-themed quiz game built with HTML, Tailwind CSS, and JavaScript that tests your knowledge of programming language creators and owners.

## 🚀 Features

### 🎯 **Core Gameplay**
- **40-second timer** for intense gameplay
- **Programming language creator identification** - Test your knowledge of who created what
- **Real-time scoring** with combo and streak bonuses
- **Level progression** system
- **High score tracking** with localStorage persistence

### 🤖 **AI Help System**
- **3 AI Help uses** per game
- **Direct answer reveal** - AI shows the creator's name directly
- **Keyboard shortcut** - Press 'H' for instant help
- **Point deduction** - Using AI help costs 5 points
- **Smart hints** for major programming language creators

### 🎨 **Visual Design**
- **Purple Galaxy Theme** - Beautiful dark theme with purple accents
- **Terminal-style interface** with glowing effects
- **Responsive design** - Works on desktop and mobile
- **Smooth animations** and visual feedback
- **Progress bar** showing time remaining

### 🔊 **Audio & Effects**
- **Sound effects** for typing, success, and failure
- **Audio toggle** button
- **Visual feedback** with shake animations for wrong answers
- **Success celebrations** with level-up messages

## 🎮 How to Play

1. **Start the Quiz** - Click "START QUIZ" to begin
2. **Read the Challenge** - See the programming language and creation year
3. **Type the Creator's Name** - Enter the name of who created that language
4. **Use AI Help** - Press 'H' or click the AI Help button if stuck
5. **Score Points** - Get points for correct answers with time and combo bonuses
6. **Beat the Timer** - Complete as many as possible in 40 seconds!

## 📁 Project Structure

```
new project/
├── index.html          # Main game interface
├── script.js           # Game logic and functionality
├── style.css           # Custom styling and themes
└── README.md           # Project documentation
```

## 🎯 Game Commands (Programming Languages)

The game includes a comprehensive database of programming languages and their creators:

### **Classic Languages**
- **C** - Dennis Ritchie (1972)
- **C++** - Bjarne Stroustrup (1983)
- **Java** - James Gosling (1995)
- **Python** - Guido van Rossum (1991)
- **JavaScript** - Brendan Eich (1995)
- **Ruby** - Yukihiro Matsumoto (1995)
- **PHP** - Rasmus Lerdorf (1994)

### **Modern Languages**
- **TypeScript** - Anders Hejlsberg (2012)
- **Rust** - Graydon Hoare (2010)
- **Go** - Robert Griesemer (2009)
- **Swift** - Chris Lattner (2014)
- **Scala** - Martin Odersky (2004)
- **Clojure** - Rich Hickey (2007)

### **Web Technologies**
- **React** - Jordan Walke (2013)
- **Vue.js** - Evan You (2014)
- **Angular** - Misko Hevery (2010)
- **Node.js** - Ryan Dahl (2009)
- **HTML** - Tim Berners-Lee (1991)
- **CSS** - Håkon Wium Lie (1996)

### **And Many More!**
- **C#** - Anders Hejlsberg (2000)
- **Perl** - Larry Wall (1987)
- **LISP** - John McCarthy (1958)
- **Pascal** - Niklaus Wirth (1970)
- **Smalltalk** - Alan Kay (1972)
- **F#** - Don Syme (2005)
- **Elm** - Evan Czaplicki (2012)
- **CoffeeScript** - Jeremy Ashkenas (2009)
- **Objective-C** - Brad Cox (1984)
- **D** - Walter Bright (2001)
- **Haskell** - Simon Peyton Jones & Philip Wadler (1990)
- **Erlang** - Joe Armstrong, Robert Virding, Mike Williams (1986)
- **Groovy** - James Strachan (2003)
- **Ruby on Rails** - David Heinemeier Hansson (2004)
- **Linux** - Linus Torvalds (1991)
- **Eiffel** - Bertrand Meyer (1985)
- **Mono** - Miguel de Icaza (2001)
- **Apache** - Sam Ruby (1995)
- **Hibernate** - Gavin King (2001)
- **Spring Framework** - Rod Johnson (2002)

## 🎮 Controls

### **Mouse Controls**
- **Start Button** - Begin the game
- **AI Help Button** - Get help (3 uses per game)
- **Sound Toggle** - Turn audio on/off
- **Retry/New Game** - Restart after game over

### **Keyboard Shortcuts**
- **Enter** - Start game from start screen
- **H** - Use AI Help (during gameplay)
- **Any key** - Continue after game over

## 🏆 Scoring System

### **Base Scoring**
- **Correct Answer**: 15 points
- **Time Bonus**: +1 point per 3 seconds remaining
- **Combo Bonus**: +5 points every 3 correct answers
- **Streak Bonus**: +3 points every 5 consecutive correct answers

### **AI Help Penalty**
- **Using AI Help**: -5 points per use
- **Limited Uses**: 3 per game

### **Level Progression**
- **Level Up**: Every 100 points
- **Bonus Time**: +2-10 seconds for quick answers
- **Visual Celebration**: Level-up animation

## 🎨 Customization

### **Theme System**
The game uses CSS variables for easy theme customization:

```css
/* Purple Galaxy Theme (Current) */
.purple-galaxy {
    --primary: #a855f7;
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #e9d5ff;
    --text-secondary: #c084fc;
}
```

### **Available Themes**
- **Purple Galaxy** (Current) - Dark purple aesthetic
- **Green Terminal** - Classic hacker theme
- **Blue Ocean** - Calm blue tones
- **Red Fire** - Intense red theme
- **Orange Sunset** - Warm orange theme
- **Pink Neon** - Vibrant pink theme
- **Cyan Cyber** - Futuristic cyan theme
- **Yellow Gold** - Premium gold theme

## 🎯 Bonus Features

### **Smart Input Recognition**
- **Case-insensitive** matching
- **Partial matching** with similarity algorithm
- **Typo tolerance** using Levenshtein distance
- **Real-time feedback** during typing

### **Statistics Tracking**
- **Correct Answers** count
- **Accuracy percentage**
- **Maximum Combo** achieved
- **Maximum Streak** maintained
- **AI Help usage** tracking

### **Performance Features**
- **Smooth animations** with CSS transitions
- **Responsive design** for all screen sizes
- **Local storage** for persistent high scores
- **Audio optimization** with error handling

## 🚀 Future Enhancements

### **Planned Features**
- **Multiple difficulty levels** (Easy, Medium, Hard)
- **Category-specific quizzes** (Web, Mobile, Systems)
- **Multiplayer mode** with leaderboards
- **Achievement system** with badges
- **Custom quiz creation** for users
- **Dark/Light theme toggle**
- **Sound customization** options
- **Export/Import** high scores

### **Technical Improvements**
- **Progressive Web App** (PWA) support
- **Offline functionality** with service workers
- **Performance optimization** for mobile devices
- **Accessibility improvements** (ARIA labels, keyboard navigation)
- **Internationalization** (i18n) support

## 🛠️ Technical Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **localStorage API** - Client-side data persistence
- **Web Audio API** - Sound effects and audio management

## 📱 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🎮 Game Statistics

### **Current Database**
- **50+ Programming Languages** and technologies
- **40+ Language Creators** with detailed information
- **Decades of Coverage** from 1958 to 2014
- **Multiple Categories** including languages, frameworks, and tools

### **Performance Metrics**
- **40-second** game duration
- **3 AI Help** uses per game
- **Unlimited** retry attempts
- **Persistent** high score tracking

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding more programming languages and creators
- Improving the UI/UX design
- Adding new game modes
- Optimizing performance
- Fixing bugs or issues

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to test your programming language knowledge? Start the quiz and see how many creators you can identify!** 🚀💻✨ 