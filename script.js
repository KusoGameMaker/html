let timer;
let timeLeft = 0; // 初始時間為 0
const timeDisplay = document.getElementById("time-display");
const timeInput = document.getElementById("time-input");
const setTimeBtn = document.getElementById("set-time-btn");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("時間到！");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 0;
    updateDisplay();
}

function setCustomTime() {
    const customMinutes = parseInt(timeInput.value, 10);
    if (!isNaN(customMinutes) && customMinutes > 0) {
        timeLeft = customMinutes * 60;
        updateDisplay();
    } else {
        alert("請輸入有效的分鐘數！");
    }
}

setTimeBtn.addEventListener("click", setCustomTime);
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkModeToggle.textContent = "切換為亮模式";
    } else {
        darkModeToggle.textContent = "切換為黑暗模式";
    }
});

// 初始化
updateDisplay();
