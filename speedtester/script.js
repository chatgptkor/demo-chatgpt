// Variables for timer functionality
let timerInterval;
let startTime;
let pausedTime = 0;
let isPaused = false;

// Elements
const sampleTextElement = document.getElementById('sample-text');
const typingInputElement = document.getElementById('typing-input');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const timerElement = document.getElementById('timer');
const charCountElement = document.getElementById('charCount');

// Event listeners
startBtn.addEventListener('click', startTest);
pauseBtn.addEventListener('click', pauseTest);
resetBtn.addEventListener('click', resetTest);
typingInputElement.addEventListener('input', updateCharCount);

// Function to start the typing test
function startTest() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
}

// Function to pause the typing test
function pauseTest() {
    if (isPaused) {
        pausedTime += (new Date().getTime() - startTime);
        pauseBtn.textContent = 'Pause';
        startBtn.disabled = false;
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        clearInterval(timerInterval);
        pauseBtn.textContent = 'Resume';
    }
    isPaused = !isPaused;
}

// Function to reset the typing test
function resetTest() {
    clearInterval(timerInterval);
    startTime = null;
    pausedTime = 0;
    isPaused = false;
    typingInputElement.value = '';
    startBtn.disabled = false;
    pauseBtn.textContent = 'Pause';
    updateTimer();
    updateCharCount();
}

// Function to update the timer display
function updateTimer() {
    const currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime - pausedTime;
    if (elapsedTime < 0) {
        elapsedTime = 0;
    }
    const minutes = Math.floor(elapsedTime / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update character count
function updateCharCount() {
    charCountElement.textContent = typingInputElement.value.length;
}
