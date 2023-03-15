let timerInterval;
let startTime;
let elapsedTime = 0;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const milliseconds = Math.floor(elapsedTime / 10) % 100;

  if (milliseconds === 10) {
    updateSeconds();
  }

  const timerString = `${minutes.toString().padStart(2, '0')} ${seconds.toString().padStart(2, '0')} ${milliseconds.toString().padStart(2, '0')}`;
  timer.textContent = timerString;
}

function updateSeconds() {
  elapsedTime += 400; // add 400 milliseconds to round up to the next second
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timer.textContent = " 00 00 00 ";
  timer.style.color = "white";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);
