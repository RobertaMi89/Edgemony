const divParent = document.querySelector(".container");
const firstBtn = document.querySelector(".firstBtn");
const secondBtn = document.querySelector(".secondBtn");

divParent.addEventListener("click", (e) => {
  const eventTarget = e.target;
  logName.apply(eventTarget);
  if (eventTarget.classList.contains("firstBtn")) {
    console.log("Ciao sono Luke");
  } else if (eventTarget.classList.contains("secondBtn")) {
    console.log("Ciao sono Leila");
  } else {
    console.log("Luke sono tuo padre");
  }
});
function logName() {
  console.log("ho preso il target", this);
}

//MODALE
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = modal.querySelector(".close");
const yesBtn = modal.querySelector("#yesBtn");
const noBtn = modal.querySelector("#noBtn");
const timerP = document.getElementById("timer");
const nameInput = document.getElementById("name");
const nameDisplay = document.getElementById("nameDisplay");

let sec = 20;
let countdown;

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  sec = 20;

  const updateTimer = () => {
    timerP.textContent = sec;
    sec--;
    if (sec < 0) {
      modal.style.display = "none";
      clearInterval(countdown);
    }
  };
  updateTimer();
  countdown = setInterval(updateTimer, 1000);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  clearInterval(countdown);
});

yesBtn.addEventListener("click", () => {
  console.log("Hai cliccato su YES");
});

noBtn.addEventListener("click", () => {
  console.log("Hai cliccato su NO");
});

nameInput.addEventListener("input", (e) => {
  nameDisplay.textContent = `Benvenuto, ${e.target.value}!`;
});
