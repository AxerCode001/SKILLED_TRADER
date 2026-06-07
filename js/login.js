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
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // grab inputs (login form has email then password)
  const inputs = loginForm.querySelectorAll('input');
  const email = inputs[0].value.trim();
  const password = inputs[1].value;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const body = await res.json();

    if (!res.ok) {
      const msg = body && body.message ? body.message : 'Login failed';
      return alert(msg);
    }

    // store token and user
    localStorage.setItem('token', body.token);
    localStorage.setItem('user', JSON.stringify(body.data));

    // compatibility flag
    localStorage.setItem('loggedIn', 'true');

    window.location.href = 'dashboard.html';
  } catch (err) {
    console.error('Login error', err);
    alert('Login failed. Please try again.');
  }
});


// SIGNUP
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // inputs: name, email, password
  const inputs = signupForm.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const password = inputs[2].value;

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const body = await res.json();
    if (!res.ok) {
      const msg = body && body.message ? body.message : 'Signup failed';
      return alert(msg);
    }

    alert('Signup successful — you can now sign in.');
    signupForm.reset();
    signupForm.classList.remove('active-form');
    loginForm.classList.add('active-form');
    welcomeTitle.innerText = 'Welcome Back!';
    welcomeText.innerText = 'Welcome back! We are so happy to have you here.';
    toggleBtn.innerText = 'No account yet? Signup.';
    isLogin = true;
  } catch (err) {
    console.error('Signup error', err);
    alert('Signup failed. Please try again.');
  }
});