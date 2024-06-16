export function initLogInUserModal() {
  const loginModal = document.getElementById("logInUserModal");
  const logInUserBtn = document.getElementById("logIn");
  const loginSpan = loginModal.querySelector(".close");
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const doLoginBtn = document.getElementById("doLoginBtn");
  const doSignUpBtn = document.getElementById("doSignUpBtn");

  const messageBox = document.getElementById("messageBox");
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  const signupName = document.getElementById("signUpName");
  const signUpEmail = document.getElementById("signUpEmail");
  const signUpPass = document.getElementById("signUpPass");

  const logInName = document.getElementById("logInName");
  const logInPass = document.getElementById("logInPass");

  // Nascondi la modale all'inizio
  loginModal.style.display = "none";
  loginBtn.style.display = "none";

  logInUserBtn.onclick = function () {
    loginModal.style.display = "block";
    messageBox.classList.add("login");
    messageBox.classList.remove("signup");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    signupBtn.style.display = "block";
    loginBtn.style.display = "none";
  };

  signupBtn.onclick = function () {
    messageBox.classList.add("signup");
    messageBox.classList.remove("login");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    loginBtn.style.display = "block";
    signupBtn.style.display = "none";
  };

  loginBtn.onclick = function () {
    messageBox.classList.add("login");
    messageBox.classList.remove("signup");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    signupBtn.style.display = "block";
    loginBtn.style.display = "none";
  };
  doLoginBtn.onclick = function () {
    logInUser(logInName.textContent, logInPass.textContent);
  };

  doSignUpBtn.onclick = function () {
    signUpUser(
      signupName.textContent,
      signUpEmail.textContent,
      signUpPass.textContent
    );
  };
  loginSpan.onclick = function () {
    loginModal.style.display = "none";
  };
}

export function signUpUser(signUpName, signUpEmail, signUpPass) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((user) => user.email === signUpEmail)) {
    alert("Email already registered");
    return;
  }
  users.push({ name: signUpName, email: signUpEmail, password: signUpPass });
  localStorage.setItem("users", JSON.stringify(users));
  alert("User registered successfully");
}

export function logInUser(loginName, loginPass) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.name === loginName && user.password === loginPass
  );
  if (user) {
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }
}
