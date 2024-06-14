export function initLogInUserModal() {
  const loginModal = document.getElementById("logInUserModal");
  const logInBtn = document.getElementById("logIn");
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");

  const loginSpan = loginModal.getElementsByClassName("close")[0];
  const messageBox = document.getElementById("messageBox");
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  logInBtn.onclick = function () {
    loginModal.style.display = "block";
    showInitialButtons();
  };

  signupBtn.onclick = function () {
    messageBox.classList.add("signup");
    messageBox.classList.remove("login");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  };

  loginBtn.onclick = function () {
    messageBox.classList.add("login");
    messageBox.classList.remove("signup");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  };

  loginSpan.onclick = function () {
    loginModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  };

  document.querySelector("#signupForm form").onsubmit = function (event) {
    event.preventDefault();
    const name = this.querySelector('input[placeholder="Name"]').value;
    const email = this.querySelector('input[placeholder="Email"]').value;
    const password = this.querySelector('input[placeholder="Password"]').value;
    signUpUser(name, email, password);
  };

  document.querySelector("#loginForm form").onsubmit = function (event) {
    event.preventDefault();
    const name = this.querySelector('input[placeholder="Name"]').value;
    const password = this.querySelector('input[placeholder="Password"]').value;
    logInUser(name, password);
  };
}

function showInitialButtons() {
  const messageBox = document.getElementById("messageBox");
  messageBox.classList.remove("signup", "login");
  document.getElementById("initialButtons").style.display = "block";
  document.getElementById("signupForm").classList.remove("active");
  document.getElementById("loginForm").classList.remove("active");
}

function signUpUser(name, email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((user) => user.email === email)) {
    alert("Email already registered");
    return;
  }
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("User registered successfully");
}

function logInUser(name, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.name === name && user.password === password
  );
  if (user) {
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }
}
