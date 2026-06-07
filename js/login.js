const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toggleBtn = document.getElementById("toggleBtn");

const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeText = document.getElementById("welcomeText");

let isLogin = true;

// TOGGLE LOGIN/SIGNUP
toggleBtn.addEventListener("click", () => {

  if(isLogin){

    loginForm.classList.remove("active-form");
    signupForm.classList.add("active-form");

    welcomeTitle.innerText = "Hello Friend!";
    welcomeText.innerText =
    "Create your account and start your journey with us.";

    toggleBtn.innerText = "Already have an account? Signin.";

  } else {

    signupForm.classList.remove("active-form");
    loginForm.classList.add("active-form");

    welcomeTitle.innerText = "Welcome Back!";
    welcomeText.innerText =
    "Welcome back! We are so happy to have you here.";

    toggleBtn.innerText = "No account yet? Signup.";
  }

  isLogin = !isLogin;
});


// LOGIN
loginForm.addEventListener("submit", (e) => {

  e.preventDefault();

  localStorage.setItem("loggedIn", "true");

  alert("Login Successful!");

window.location.href = "index.html";
});


// SIGNUP
signupForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Signup Successful!");

  signupForm.classList.remove("active-form");
  loginForm.classList.add("active-form");

  welcomeTitle.innerText = "Welcome Back!";
  welcomeText.innerText =
  "Welcome back! We are so happy to have you here.";

  toggleBtn.innerText = "No account yet? Signup.";

  isLogin = true;
});