// Game Configuration
const GAME_CONFIG = {
    timeLimit: 40,
    languageCreators: [
        { name: "Dennis Ritchie", language: "C", year: 1972 },
        { name: "Bjarne Stroustrup", language: "C++", year: 1983 },
        { name: "James Gosling", language: "Java", year: 1995 },
        { name: "Guido van Rossum", language: "Python", year: 1991 },
        { name: "Brendan Eich", language: "JavaScript", year: 1995 },
        { name: "Yukihiro Matsumoto", language: "Ruby", year: 1995 },
        { name: "Rasmus Lerdorf", language: "PHP", year: 1994 },
        { name: "Anders Hejlsberg", language: "C#", year: 2000 },
        { name: "Martin Odersky", language: "Scala", year: 2004 },
        { name: "Rich Hickey", language: "Clojure", year: 2007 },
        { name: "Graydon Hoare", language: "Rust", year: 2010 },
        { name: "Robert Griesemer", language: "Go", year: 2009 },
        { name: "Ken Thompson", language: "B", year: 1969 },
        { name: "Larry Wall", language: "Perl", year: 1987 },
        { name: "John McCarthy", language: "LISP", year: 1958 },
        { name: "Niklaus Wirth", language: "Pascal", year: 1970 },
        { name: "Alan Kay", language: "Smalltalk", year: 1972 },
        { name: "Don Syme", language: "F#", year: 2005 },
        { name: "Evan Czaplicki", language: "Elm", year: 2012 },
        { name: "Jeremy Ashkenas", language: "CoffeeScript", year: 2009 },
        { name: "Chris Lattner", language: "Swift", year: 2014 },
        { name: "Andres Hejlsberg", language: "TypeScript", year: 2012 },
        { name: "Ryan Dahl", language: "Node.js", year: 2009 },
        { name: "Yehuda Katz", language: "Ember.js", year: 2011 },
        { name: "Evan You", language: "Vue.js", year: 2014 },
        { name: "Jordan Walke", language: "React", year: 2013 },
        { name: "Misko Hevery", language: "Angular", year: 2010 },
        { name: "David Heinemeier Hansson", language: "Ruby on Rails", year: 2004 },
        { name: "Yukihiro Matsumoto", language: "Ruby", year: 1995 },
        { name: "Linus Torvalds", language: "Linux", year: 1991 },
        { name: "Tim Berners-Lee", language: "HTML", year: 1991 },
        { name: "Håkon Wium Lie", language: "CSS", year: 1996 },
        { name: "Bertrand Meyer", language: "Eiffel", year: 1985 },
        { name: "Brad Cox", language: "Objective-C", year: 1984 },
        { name: "Walter Bright", language: "D", year: 2001 },
        { name: "Simon Peyton Jones", language: "Haskell", year: 1990 },
        { name: "Philip Wadler", language: "Haskell", year: 1990 },
        { name: "Joe Armstrong", language: "Erlang", year: 1986 },
        { name: "Robert Virding", language: "Erlang", year: 1986 },
        { name: "Mike Williams", language: "Erlang", year: 1986 },
        { name: "James Strachan", language: "Groovy", year: 2003 },
        { name: "Gavin King", language: "Hibernate", year: 2001 },
        { name: "Rod Johnson", language: "Spring Framework", year: 2002 },
        { name: "Miguel de Icaza", language: "Mono", year: 2001 },
        { name: "Sam Ruby", language: "Apache", year: 1995 },
        { name: "Rasmus Lerdorf", language: "PHP", year: 1994 },
        { name: "Zeev Suraski", language: "PHP", year: 1994 },
        { name: "Andi Gutmans", language: "PHP", year: 1994 },
        { name: "Yukihiro Matsumoto", language: "Ruby", year: 1995 },
        { name: "Matz", language: "Ruby", year: 1995 },
        { name: "Yukihiro Matsumoto", language: "Ruby", year: 1995 },
        { name: "Matz", language: "Ruby", year: 1995 }
    ]
};

// AI Help System
const AI_HELP = {
    hints: {
        "Anders Hejlsberg": [
            "This person created TypeScript as a superset of JavaScript",
            "They also created C# programming language",
            "They work at Microsoft",
            "They previously worked on Turbo Pascal and Delphi",
            "Their name starts with 'Anders'"
        ],
        "Brendan Eich": [
            "This person created JavaScript in just 10 days",
            "They worked at Netscape Communications",
            "They later co-founded Mozilla",
            "JavaScript was originally called Mocha",
            "Their name starts with 'Brendan'"
        ],
        "Jordan Walke": [
            "This person created React at Facebook",
            "They worked at Facebook/Meta",
            "React was originally used internally at Facebook",
            "They wanted to make UI development easier",
            "Their name starts with 'Jordan'"
        ],
        "Evan You": [
            "This person created Vue.js",
            "They previously worked at Google",
            "Vue.js was created as a personal project",
            "They wanted a progressive framework",
            "Their name starts with 'Evan'"
        ],
        "Ryan Dahl": [
            "This person created Node.js",
            "They wanted to use JavaScript on the server",
            "They also created Deno runtime",
            "They worked on V8 JavaScript engine",
            "Their name starts with 'Ryan'"
        ],
        "Misko Hevery": [
            "This person created Angular at Google",
            "They worked at Google",
            "Angular was originally called AngularJS",
            "They wanted a complete framework",
            "Their name starts with 'Misko'"
        ],
        "Dennis Ritchie": [
            "This person worked at Bell Labs",
            "They created the C programming language",
            "They also created Unix operating system",
            "Their name starts with 'Dennis'"
        ],
        "Bjarne Stroustrup": [
            "This person is from Denmark",
            "They created C++ as an extension of C",
            "They worked at Bell Labs and later at Morgan Stanley",
            "Their name starts with 'Bjarne'"
        ],
        "James Gosling": [
            "This person is known as the 'Father of Java'",
            "They worked at Sun Microsystems",
            "They created Java while working on a project called 'Green'",
            "Their name starts with 'James'"
        ],
        "Guido van Rossum": [
            "This person is from the Netherlands",
            "They created Python and named it after Monty Python",
            "They worked at Google and later at Dropbox",
            "Their name starts with 'Guido'"
        ],
        "Yukihiro Matsumoto": [
            "This person is from Japan",
            "They created Ruby and are known as 'Matz'",
            "They wanted to create a language that makes programmers happy",
            "Their name starts with 'Yukihiro'"
        ],
        "Rasmus Lerdorf": [
            "This person created PHP as a personal home page tool",
            "They are from Greenland",
            "They worked at Yahoo! and later at Etsy",
            "Their name starts with 'Rasmus'"
        ],
        "Graydon Hoare": [
            "This person created Rust while working at Mozilla",
            "They wanted to create a safe systems programming language",
            "They later worked at Microsoft",
            "Their name starts with 'Graydon'"
        ],
        "Robert Griesemer": [
            "This person is one of the creators of Go",
            "They worked at Google",
            "They also worked on the V8 JavaScript engine",
            "Their name starts with 'Robert'"
        ]
    },
    
    getHint: function(creatorName) {
        const hints = this.hints[creatorName];
        if (hints && hints.length > 0) {
            return hints[Math.floor(Math.random() * hints.length)];
        }
        return `This person created ${creatorName.split(' ')[0]} programming language.`;
    }
};

// Game State
let gameState = {
    isPlaying: false,
    currentScore: 0,
    highScore: 0,
    timeLeft: GAME_CONFIG.timeLimit,
    currentChallenge: null,
    timer: null,
    soundEnabled: true,
    combo: 0,
    level: 1,
    streak: 0,
    correctAnswers: 0,
    totalAttempts: 0,
    aiHelpUsed: 0,
    aiHelpAvailable: 3
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('startScreen'),
    gameScreen: document.getElementById('gameScreen'),
    gameOverScreen: document.getElementById('gameOverScreen'),
    startBtn: document.getElementById('startBtn'),
    retryBtn: document.getElementById('retryBtn'),
    newGameBtn: document.getElementById('newGameBtn'),
    soundToggle: document.getElementById('soundToggle'),
    aiHelpBtn: document.getElementById('aiHelpBtn'),
    timer: document.getElementById('timer'),
    currentScore: document.getElementById('currentScore'),
    currentLevel: document.getElementById('currentLevel'),
    currentCombo: document.getElementById('currentCombo'),
    currentStreak: document.getElementById('currentStreak'),
    highScore: document.getElementById('highScore'),
    finalScore: document.getElementById('finalScore'),
    finalHighScore: document.getElementById('finalHighScore'),
    challengeText: document.getElementById('challengeText'),
    typingInput: document.getElementById('typingInput'),
    progressBar: document.getElementById('progressBar')
};

// Audio Elements
const sounds = {
    key: document.getElementById('keySound'),
    success: document.getElementById('successSound'),
    fail: document.getElementById('failSound')
};

// Initialize Game
function initGame() {
    loadHighScore();
    setupEventListeners();
    showStartScreen();
}

// Load high score from localStorage
function loadHighScore() {
    gameState.highScore = parseInt(localStorage.getItem('languageCreatorHighScore')) || 0;
    elements.highScore.textContent = gameState.highScore;
}

// Save high score to localStorage
function saveHighScore() {
    if (gameState.currentScore > gameState.highScore) {
        gameState.highScore = gameState.currentScore;
        localStorage.setItem('languageCreatorHighScore', gameState.highScore.toString());
        elements.highScore.textContent = gameState.highScore;
    }
}

// Setup event listeners
function setupEventListeners() {
    elements.startBtn.addEventListener('click', startGame);
    elements.retryBtn.addEventListener('click', startGame);
    elements.newGameBtn.addEventListener('click', () => {
        showStartScreen();
    });
    elements.soundToggle.addEventListener('click', toggleSound);
    elements.aiHelpBtn.addEventListener('click', requestAIHelp);
    elements.typingInput.addEventListener('input', handleTyping);
    elements.typingInput.addEventListener('keydown', handleKeyDown);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !gameState.isPlaying) {
            if (elements.startScreen.classList.contains('hidden')) {
                startGame();
            }
        }
        // AI Help shortcut (H key)
        if (e.key.toLowerCase() === 'h' && gameState.isPlaying) {
            requestAIHelp();
        }
    });
}

// Show start screen
function showStartScreen() {
    gameState.isPlaying = false;
    elements.startScreen.classList.remove('hidden');
    elements.gameScreen.classList.add('hidden');
    elements.gameOverScreen.classList.add('hidden');
    elements.typingInput.value = '';
    elements.typingInput.blur();
}

// Start the game
function startGame() {
    gameState.isPlaying = true;
    gameState.currentScore = 0;
    gameState.combo = 0;
    gameState.streak = 0;
    gameState.level = 1;
    gameState.timeLeft = GAME_CONFIG.timeLimit;
    gameState.correctAnswers = 0;
    gameState.totalAttempts = 0;
    gameState.aiHelpUsed = 0;
    gameState.aiHelpAvailable = 3;
    
    elements.startScreen.classList.add('hidden');
    elements.gameScreen.classList.remove('hidden');
    elements.gameOverScreen.classList.add('hidden');
    
    elements.currentScore.textContent = gameState.currentScore;
    elements.currentLevel.textContent = gameState.level;
    elements.currentCombo.textContent = gameState.combo;
    elements.currentStreak.textContent = gameState.streak;
    elements.timer.textContent = gameState.timeLeft;
    elements.progressBar.style.width = '100%';
    elements.aiHelpBtn.textContent = `🤖 AI Help (${gameState.aiHelpAvailable})`;
    
    generateNewChallenge();
    startTimer();
    elements.typingInput.focus();
}

// Generate new typing challenge
function generateNewChallenge() {
    const randomCreator = GAME_CONFIG.languageCreators[Math.floor(Math.random() * GAME_CONFIG.languageCreators.length)];
    gameState.currentChallenge = randomCreator;
    
    elements.challengeText.innerHTML = `
        <div class="text-center space-y-2">
            <p class="text-sm text-green-300 mb-2">Who created this programming language?</p>
            <div class="text-2xl md:text-3xl font-bold text-blue-400 mb-2">${randomCreator.language}</div>
            <div class="text-sm text-yellow-400">Created in ${randomCreator.year}</div>
            <div class="text-xs text-purple-400 mt-2">
                💡 Press 'H' for AI Help (${gameState.aiHelpAvailable} remaining)
            </div>
        </div>
    `;
    
    elements.typingInput.value = '';
    elements.typingInput.classList.remove('animate-shake');
    elements.typingInput.placeholder = "Type the creator's name...";
}

// Request AI Help
function requestAIHelp() {
    if (gameState.aiHelpAvailable <= 0) {
        showMessage("No AI help remaining!", "red");
        return;
    }
    
    gameState.aiHelpUsed++;
    gameState.aiHelpAvailable--;
    
    // Show AI help with direct name
    elements.challengeText.innerHTML = `
        <div class="text-center space-y-2">
            <p class="text-sm text-green-300 mb-2">Who created this programming language?</p>
            <div class="text-2xl md:text-3xl font-bold text-blue-400 mb-2">${gameState.currentChallenge.language}</div>
            <div class="text-sm text-yellow-400">Created in ${gameState.currentChallenge.year}</div>
            <div class="bg-purple-900/50 p-3 rounded border border-purple-400 mt-3">
                <div class="text-sm text-purple-300 font-bold mb-1">🤖 AI Answer:</div>
                <div class="text-lg text-purple-200 font-bold">${gameState.currentChallenge.name}</div>
            </div>
            <div class="text-xs text-purple-400 mt-2">
                💡 AI Help: ${gameState.aiHelpAvailable} remaining
            </div>
        </div>
    `;
    
    showMessage("AI Help used! -5 points", "purple");
    gameState.currentScore = Math.max(0, gameState.currentScore - 5);
    elements.currentScore.textContent = gameState.currentScore;
    elements.aiHelpBtn.textContent = `🤖 AI Help (${gameState.aiHelpAvailable})`;
}

// Show message
function showMessage(message, color = "green") {
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-4 right-4 bg-${color}-900/90 p-3 rounded border-2 border-${color}-400 text-${color}-300 font-bold z-50`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}

// Start countdown timer
function startTimer() {
    if (gameState.timer) clearInterval(gameState.timer);
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timer.textContent = gameState.timeLeft;
        
        // Update progress bar
        const progress = (gameState.timeLeft / GAME_CONFIG.timeLimit) * 100;
        elements.progressBar.style.width = progress + '%';
        
        // Change color based on time remaining
        if (gameState.timeLeft <= 5) {
            elements.timer.classList.add('text-red-500');
            elements.timer.classList.remove('text-red-400');
        } else if (gameState.timeLeft <= 10) {
            elements.timer.classList.add('text-red-400');
            elements.timer.classList.remove('text-green-400');
        }
        
        if (gameState.timeLeft <= 0) {
            gameOver();
        }
    }, 1000);
}

// Handle typing input
function handleTyping(e) {
    if (!gameState.isPlaying) return;
    
    // Play key sound
    if (gameState.soundEnabled) {
        sounds.key.currentTime = 0;
        sounds.key.play().catch(() => {}); // Ignore audio errors
    }
    
    const userInput = e.target.value.trim();
    const correctName = gameState.currentChallenge.name;
    
    // Check if input matches (case insensitive)
    if (userInput.toLowerCase() === correctName.toLowerCase()) {
        // Success!
        if (gameState.soundEnabled) {
            sounds.success.currentTime = 0;
            sounds.success.play().catch(() => {});
        }
        
        gameState.totalAttempts++;
        gameState.correctAnswers++;
        
        // Calculate score with combo bonus
        gameState.combo++;
        gameState.streak++;
        const baseScore = 15;
        const comboBonus = Math.floor(gameState.combo / 3) * 5;
        const streakBonus = Math.floor(gameState.streak / 5) * 3;
        const timeBonus = Math.floor(gameState.timeLeft / 3);
        const totalScore = baseScore + comboBonus + streakBonus + timeBonus;
        
        gameState.currentScore += totalScore;
        elements.currentScore.textContent = gameState.currentScore;
        elements.currentCombo.textContent = gameState.combo;
        elements.currentStreak.textContent = gameState.streak;
        
        // Level up every 100 points
        const newLevel = Math.floor(gameState.currentScore / 100) + 1;
        if (newLevel > gameState.level) {
            gameState.level = newLevel;
            elements.currentLevel.textContent = gameState.level;
            showLevelUpMessage();
        }
        
        // Add bonus time for quick completion
        const timeBonusSeconds = Math.max(2, Math.floor(gameState.timeLeft / 3));
        gameState.timeLeft += timeBonusSeconds;
        
        // Show success message briefly
        elements.challengeText.innerHTML = `
            <div class="text-center space-y-2">
                <div class="text-2xl font-bold text-green-400 mb-2">✓ CORRECT!</div>
                <div class="text-lg text-green-300">${correctName}</div>
                <div class="text-sm text-green-200">+${totalScore} points</div>
            </div>
        `;
        
        setTimeout(() => {
            if (gameState.isPlaying) {
                generateNewChallenge();
            }
        }, 1500);
        
    } else if (userInput.length >= correctName.length * 0.8) {
        // Check for partial matches or wrong input
        const similarity = calculateSimilarity(userInput.toLowerCase(), correctName.toLowerCase());
        
        if (similarity < 0.7) {
            // Wrong input
            if (gameState.soundEnabled) {
                sounds.fail.currentTime = 0;
                sounds.fail.play().catch(() => {});
            }
            
            gameState.totalAttempts++;
            
            // Reset combo and streak
            gameState.combo = 0;
            gameState.streak = 0;
            
            elements.typingInput.classList.add('animate-shake');
            setTimeout(() => {
                elements.typingInput.classList.remove('animate-shake');
            }, 500);
            
            // Show hint
            elements.challengeText.innerHTML = `
                <div class="text-center space-y-2">
                    <div class="text-xl font-bold text-red-400 mb-2">✗ INCORRECT</div>
                    <div class="text-sm text-yellow-400">Hint: ${correctName}</div>
                    <div class="text-xs text-purple-400 mt-2">
                        💡 Press 'H' for AI Help (${gameState.aiHelpAvailable} remaining)
                    </div>
                </div>
            `;
            
            // Clear input for retry
            setTimeout(() => {
                if (gameState.isPlaying) {
                    elements.typingInput.value = '';
                    generateNewChallenge();
                }
            }, 2000);
        }
    }
}

// Calculate similarity between two strings
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

// Levenshtein distance algorithm
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Handle key down events
function handleKeyDown(e) {
    if (!gameState.isPlaying) return;
    
    // Prevent form submission
    if (e.key === 'Enter') {
        e.preventDefault();
    }
}

// Toggle sound
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    elements.soundToggle.textContent = gameState.soundEnabled ? '🔊' : '🔇';
}

// Show level up message
function showLevelUpMessage() {
    const levelUpDiv = document.createElement('div');
    levelUpDiv.className = 'fixed inset-0 flex items-center justify-center z-50';
    levelUpDiv.innerHTML = `
        <div class="bg-green-900/90 p-8 rounded-lg border-2 border-green-400 text-center animate-pulse">
            <h2 class="text-4xl font-bold text-green-400 mb-4">🎉 LEVEL UP! 🎉</h2>
            <p class="text-2xl text-green-300">You reached Level ${gameState.level}!</p>
            <p class="text-lg text-green-200 mt-2">Keep learning about programming language creators!</p>
        </div>
    `;
    document.body.appendChild(levelUpDiv);
    
    setTimeout(() => {
        document.body.removeChild(levelUpDiv);
    }, 2000);
}

// Game over
function gameOver() {
    gameState.isPlaying = false;
    clearInterval(gameState.timer);
    
    if (gameState.soundEnabled) {
        sounds.fail.currentTime = 0;
        sounds.fail.play().catch(() => {});
    }
    
    saveHighScore();
    
    const accuracy = gameState.totalAttempts > 0 ? Math.round((gameState.correctAnswers / gameState.totalAttempts) * 100) : 0;
    
    elements.finalScore.textContent = gameState.currentScore;
    elements.finalHighScore.textContent = gameState.highScore;
    
    // Update game over screen with stats
    const gameOverStats = document.createElement('div');
    gameOverStats.className = 'text-lg space-y-2 mt-4';
    gameOverStats.innerHTML = `
        <p>Correct Answers: <span class="font-bold text-green-400">${gameState.correctAnswers}</span></p>
        <p>Accuracy: <span class="font-bold text-blue-400">${accuracy}%</span></p>
        <p>Max Combo: <span class="font-bold text-purple-400">${gameState.combo}</span></p>
        <p>Max Streak: <span class="font-bold text-yellow-400">${gameState.streak}</span></p>
        <p>AI Help Used: <span class="font-bold text-purple-400">${gameState.aiHelpUsed}</span></p>
    `;
    
    // Remove existing stats if any
    const existingStats = elements.gameOverScreen.querySelector('.text-lg.space-y-2');
    if (existingStats) {
        existingStats.remove();
    }
    
    elements.gameOverScreen.appendChild(gameOverStats);
    
    elements.gameScreen.classList.add('hidden');
    elements.gameOverScreen.classList.remove('hidden');
    
    // Reset timer styling
    elements.timer.classList.remove('text-red-500', 'text-red-400');
    elements.timer.classList.add('text-red-400');
}

// Terminal boot animation
function showBootAnimation() {
    const bootMessages = [
        "Booting up Language Creator Quiz...",
        "Loading programming language database...",
        "Initializing creator knowledge base...",
        "Establishing connection to tech history...",
        "AI Help system activated...",
        "Access granted. Ready to test your knowledge!"
    ];
    
    let messageIndex = 0;
    elements.challengeText.textContent = bootMessages[0];
    
    const bootInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < bootMessages.length) {
            elements.challengeText.textContent = bootMessages[messageIndex];
        } else {
            clearInterval(bootInterval);
            setTimeout(() => {
                elements.challengeText.textContent = "Ready to test your programming language knowledge...";
            }, 1000);
        }
    }, 800);
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    showBootAnimation();
});

// Add some terminal-style effects
document.addEventListener('keydown', (e) => {
    if (gameState.isPlaying && e.key.length === 1) {
        // Add terminal-style cursor effect
        const cursor = document.createElement('span');
        cursor.className = 'text-green-400 animate-blink';
        cursor.textContent = '|';
        elements.challengeText.appendChild(cursor);
        
        setTimeout(() => {
            if (cursor.parentNode) {
                cursor.parentNode.removeChild(cursor);
            }
        }, 100);
    }
}); 