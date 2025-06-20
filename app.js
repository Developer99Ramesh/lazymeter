// Quiz Application JavaScript

class QuizApp {
  constructor() {
    this.selectedCountry = null;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.selectedAnswer = null;
    this.timeRemaining = 120; // 2 minutes
    this.timerInterval = null;
    this.result = null;
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.renderCountryGrid();
    this.showScreen('country');
  }
  
  setupEventListeners() {
    // Start quiz button
    document.getElementById('start-quiz-btn').addEventListener('click', () => {
      this.startQuiz();
    });
    
    // Navigation buttons
    document.getElementById('prev-btn').addEventListener('click', () => {
      this.previousQuestion();
    });
    
    document.getElementById('next-btn').addEventListener('click', () => {
      this.nextQuestion();
    });
    
    // Retake quiz button
    document.getElementById('retake-btn').addEventListener('click', () => {
      this.retakeQuiz();
    });
    
    // Certificate buttons
    document.getElementById('regenerate-cert-btn').addEventListener('click', () => {
      this.generateCertificate();
    });
    
    document.getElementById('play-applause-btn').addEventListener('click', () => {
      this.playClappingSound();
    });
  }
  
  renderCountryGrid() {
    const grid = document.getElementById('country-grid');
    grid.innerHTML = '';
    
    countries.forEach(country => {
      const button = document.createElement('button');
      button.className = 'country-btn';
      button.innerHTML = `
        <span class="country-emoji">${country.emoji}</span>
        <div>${country.name}</div>
      `;
      button.addEventListener('click', () => {
        this.selectCountry(country.code);
      });
      grid.appendChild(button);
    });
  }
  
  selectCountry(countryCode) {
    this.selectedCountry = countryCode;
    
    // Update visual selection
    document.querySelectorAll('.country-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    event.target.closest('.country-btn').classList.add('selected');
    
    // Auto-advance to welcome screen after a short delay
    setTimeout(() => {
      this.showWelcomeScreen();
    }, 500);
  }
  
  showWelcomeScreen() {
    const country = findCountryByCode(this.selectedCountry);
    const jokes = getCountryJokes(this.selectedCountry, 2);
    
    // Update country greeting
    const greeting = document.getElementById('country-greeting');
    greeting.innerHTML = `
      <span class="country-flag">${country.emoji}</span>
      <span>Greetings from <span class="country-name">${country.name}</span>!</span>
    `;
    
    // Update jokes section
    const jokesSection = document.getElementById('jokes-section');
    jokesSection.innerHTML = `
      <h3>Quick Laughs from ${country.desiTerm}! 😂</h3>
      ${jokes.map((joke, index) => `
        <div class="joke-item" style="animation-delay: ${index * 0.3}s">
          ${joke}
        </div>
      `).join('')}
    `;
    
    this.showScreen('welcome');
  }
  
  startQuiz() {
    this.currentQuestions = getRandomQuestions(7, this.selectedCountry);
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.selectedAnswer = null;
    this.timeRemaining = 120;
    
    this.showScreen('quiz');
    this.renderQuestion();
    this.startTimer();
  }
  
  renderQuestion() {
    const question = this.currentQuestions[this.currentQuestionIndex];
    const questionSection = document.getElementById('question-section');
    
    questionSection.innerHTML = `
      <div class="question-header">
        <div class="question-emoji">${question.emoji}</div>
        <div class="question-text">${question.question}</div>
      </div>
      <div class="answers-grid">
        ${question.answers.map((answer, index) => `
          <button class="answer-btn" data-index="${index}">
            ${answer.text}
          </button>
        `).join('')}
      </div>
    `;
    
    // Add answer button listeners
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectAnswer(parseInt(e.target.dataset.index));
      });
    });
    
    // Update progress and navigation
    this.updateProgress();
    this.updateNavigation();
  }
  
  selectAnswer(answerIndex) {
    this.selectedAnswer = answerIndex;
    
    // Update visual selection
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    document.querySelector(`[data-index="${answerIndex}"]`).classList.add('selected');
    
    // Auto-advance after a short delay
    setTimeout(() => {
      this.answers[this.currentQuestionIndex] = this.currentQuestions[this.currentQuestionIndex].answers[answerIndex].score;
      
      if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.renderQuestion();
      } else {
        this.finishQuiz();
      }
    }, 500);
  }
  
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.selectedAnswer = null;
      this.renderQuestion();
    }
  }
  
  nextQuestion() {
    if (this.selectedAnswer !== null) {
      this.answers[this.currentQuestionIndex] = this.currentQuestions[this.currentQuestionIndex].answers[this.selectedAnswer].score;
      
      if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.renderQuestion();
      } else {
        this.finishQuiz();
      }
    }
  }
  
  updateProgress() {
    const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `${this.currentQuestionIndex + 1} / ${this.currentQuestions.length}`;
  }
  
  updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = this.currentQuestionIndex === 0;
    nextBtn.disabled = this.selectedAnswer === null;
  }
  
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimer();
      
      if (this.timeRemaining <= 0) {
        this.finishQuiz();
      }
    }, 1000);
  }
  
  updateTimer() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  finishQuiz() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    
    this.showScreen('loading');
    
    // Calculate results
    const result = calculateLazinessScore(this.answers, this.currentQuestions.length);
    this.result = result;
    
    // Show results after loading delay
    setTimeout(() => {
      this.showResults();
    }, 2000);
  }
  
  showResults() {
    const resultData = resultTypes[this.result.type];
    const country = findCountryByCode(this.selectedCountry);
    const celebrationJokes = getCountryJokes(this.selectedCountry, 1);
    
    // Update result display
    document.getElementById('result-emoji').textContent = resultData.emoji;
    document.getElementById('result-title').textContent = resultData.title;
    document.getElementById('result-score').textContent = this.result.score;
    document.getElementById('result-desc').textContent = resultData.description;
    
    // Update celebration joke
    document.getElementById('celebration-joke').innerHTML = `
      🎉 ${celebrationJokes[0]}
    `;
    
    this.showScreen('results');
    
    // Generate certificate
    setTimeout(() => {
      this.generateCertificate();
    }, 500);
  }
  
  generateCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');
    const country = findCountryByCode(this.selectedCountry);
    const resultData = resultTypes[this.result.type];
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#4ECDC4'); // turquoise
    gradient.addColorStop(0.5, '#A8E6CF'); // mint
    gradient.addColorStop(1, '#FFE135'); // sunny
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
    
    // Border
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 760, 560);
    
    // Inner border
    ctx.strokeStyle = '#4A4A4A';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 720, 520);
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LAZINESS CERTIFICATE', 400, 100);
    
    // Subtitle
    ctx.font = 'italic 24px Arial, sans-serif';
    ctx.fillText('Official Desi Laziness Assessment', 400, 130);
    
    // Main content
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText('This certifies that', 400, 200);
    
    // Name placeholder
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.fillText('[Your Name Here]', 400, 240);
    
    // Country
    ctx.fillStyle = '#2C3E50';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText(`from ${country.name} ${country.emoji}`, 400, 280);
    
    // Achievement
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.fillText('has achieved the rank of', 400, 320);
    
    // Result type
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 40px Arial, sans-serif';
    ctx.fillText(`${resultData.emoji} ${resultData.title}`, 400, 370);
    
    // Score
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText(`with a laziness score of ${this.result.score}%`, 400, 410);
    
    // Achievement description
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText(resultData.achievement, 400, 450);
    
    // Footer
    ctx.font = 'italic 18px Arial, sans-serif';
    ctx.fillText('Certified by the International Desi Laziness Council', 400, 500);
    
    // Date
    const today = new Date().toLocaleDateString();
    ctx.fillText(`Issued on: ${today}`, 400, 530);
    
    // Decorative elements
    ctx.font = '60px Arial, sans-serif';
    ctx.fillText('🏆', 100, 350);
    ctx.fillText('🏆', 700, 350);
    
    // Play clapping sound
    this.playClappingSound();
  }
  
  playClappingSound() {
    try {
      // Using your custom damage sound effect
      const audio = new Audio('damage.mp3');
      
      // Optional: Set volume (0.0 to 1.0)
      audio.volume = 0.8;
      
      // Play the sound
      audio.play().catch(error => {
        console.log('Could not play audio:', error);
        // Fallback: create a simple beep sound
        this.createFallbackSound();
      });
      
    } catch (error) {
      console.log('Audio not supported');
      this.createFallbackSound();
    }
  }
  
  // Fallback sound if audio file fails to load
  createFallbackSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('No audio support available');
    }
  }
  
  retakeQuiz() {
    this.selectedCountry = null;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.selectedAnswer = null;
    this.timeRemaining = 120;
    this.result = null;
    
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    
    // Reset country selection
    document.querySelectorAll('.country-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    
    this.showScreen('country');
  }
  
  showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(`${screenName}-screen`).classList.add('active');
  }
}

// Social sharing functions
function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`I just took the Desi Laziness Quiz and scored ${app.result.score}%! I'm a ${resultTypes[app.result.type].title}! Take the quiz and see how lazy you really are! #DesiLazy`);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareToTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`I just took the Desi Laziness Quiz and scored ${app.result.score}%! I'm a ${resultTypes[app.result.type].title}! #DesiLazy`);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareToWhatsApp() {
  const text = encodeURIComponent(`I just took the Desi Laziness Quiz and scored ${app.result.score}%! I'm a ${resultTypes[app.result.type].title}! Take the quiz: ${window.location.href} #DesiLazy`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLink() {
  const text = `I just took the Desi Laziness Quiz and scored ${app.result.score}%! I'm a ${resultTypes[app.result.type].title}! Take the quiz: ${window.location.href} #DesiLazy`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    });
  } else {
    // Fallback
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Link copied to clipboard!');
  }
}

function shareResults() {
  const shareData = {
    title: 'Desi Laziness Quiz Challenge',
    text: `I just took the Desi Laziness Quiz and scored ${app.result.score}%! I'm a ${resultTypes[app.result.type].title}! Take the quiz and see how lazy you really are! #DesiLazy`,
    url: window.location.href
  };
  
  if (navigator.share) {
    navigator.share(shareData);
  } else {
    copyLink();
  }
}

// Initialize the app
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new QuizApp();
});