const div = document.querySelector(".counter");
const p = document.createElement("p");
const stopButton = document.createElement("button");
const startButton = document.createElement("button");

stopButton.className = "stop";
stopButton.textContent = "Stop";
startButton.className = "start";
startButton.textContent = "Start";

div.append(startButton, stopButton, p);

const updateClock = () => {
  const day = new Date();
  const hours = day.getHours().toString().padStart(2, "0");
  const minutes = day.getMinutes().toString().padStart(2, "0");
  const seconds = day.getSeconds().toString().padStart(2, "0");
  p.textContent = `${hours}:${minutes}:${seconds}`;
};

const runInterval = () => {
  updateClock();
  const id = setInterval(updateClock, 1000);
  return id;
};

let intervalId = runInterval();

startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = runInterval();
    div.classList.add("background-active");
  }
});

stopButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    div.classList.remove("background-active");
  }
});
