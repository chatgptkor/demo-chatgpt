let timer;
let isTimerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const displayTimer = () => {
    document.getElementById('timer').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const startTimer = () => {
    if (!isTimerRunning) {
        timer = setInterval(incrementTimer, 1000);
        isTimerRunning = true;
    }
}

const stopTimer = () => {
    clearInterval(timer);
    isTimerRunning = false;
}

const resetTimer = () => {
    clearInterval(timer);
    isTimerRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer();
}

const incrementTimer = () => {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTimer();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

displayTimer();
