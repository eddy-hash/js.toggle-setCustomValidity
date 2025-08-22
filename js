<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Professional Login Form</title>
<style>
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    position: relative;
  }

  /* iPhone-style dark mode toggle */
  .dark-switch {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .dark-switch label {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 25px;
    cursor: pointer;
  }

  .dark-switch input {
    display: none;
  }

  .slider {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: #ccc;
    border-radius: 25px;
    transition: background 0.3s;
  }

  .slider::before {
    content: "";
    position: absolute;
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }

  .dark-switch input:checked + .slider {
    background: #2575fc;
  }

  .dark-switch input:checked + .slider::before {
    transform: translateX(25px);
  }

  .login-container {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    width: 380px;
    transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  }

  .login-container h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #007BFF;
  }

  .input-group {
    position: relative;
    margin-bottom: 25px;
  }

  .input-group input {
    width: 90%;
    padding: 14px 20px;
    border: 1px solid #ccc;
    border-radius: 15px;
    outline: none;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px 1px #007BAA;
    background: #fff;
    color: #000;
  }

  .input-group input:focus {
    border-color: #2575fc;
  }

  .input-group label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #aaa;
    pointer-events: none;
    transition: 0.3s;
    font-size: 14px;
  }

  .input-group input:focus + label,
  .input-group input:not(:placeholder-shown) + label {
    top: -6px;
    font-size: 12px;
    color: #2575fc;
    background: inherit;
    padding: 0 5px;
  }

  .input-group .eye-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 24px;
    height: 20px;
    fill: none;
    stroke: #555;
    stroke-width: 1;
    transition: stroke 0.3s;
  }

  .input-group .eye-icon:hover {
    stroke: black;
  }

  button {
    width: 100%;
    padding: 12px 25px;
    border: none;
    border-radius: 15px;
    background: black;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    font-weight: bold;
    box-shadow: 0 2px 5px 1px #007BAA;
  }

  button:hover {
    background: #6a11cb;
  }

  a {
    display: inline-block;
    text-decoration: none;
    font-family: 'Georgia', sans-serif;
    margin: 45px;
    margin-top: 20px;
    margin-bottom: 1px;
  }

  a:hover {
    color: green;
  }

  p {
    margin-top: 18px;
    text-align: center;
    font-family: 'Georgia', sans-serif;
    font-size: 12px;
  }

  #message {
    text-align: center;
    color: green;
    font-weight: bold;
    font-family: 'Georgia', sans-serif;
    font-size: 12px;
  }

  /* Dark mode for container */
  .login-container.dark-mode {
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 15px 40px rgba(0,0,0,0.7);
  }

  .login-container.dark-mode input {
    border-color: #555;
    color: #fff;
    background: transparent;
    box-shadow: 0 2px 5px 1px #222;
  }

  .login-container.dark-mode label {
    background: #1e1e1e;
    color: #57a1ff;
  }
</style>
</head>
<body>

<!-- iPhone-style dark mode toggle -->
<div class="dark-switch">
  <label>
    <input type="checkbox" id="darkModeToggle">
    <span class="slider"></span>
  </label>
</div>

<div class="login-container">
  <h2>Administration Login</h2>
  <form class="login-form" id="form">
    <div class="input-group">
      <input type="text" id="username" name="username" placeholder="">
      <label for="username">Username</label>
    </div>
    <div class="input-group">
      <input type="password" id="password" name="password" placeholder="">
      <label for="password">Password</label>
      <svg id="togglePassword" class="eye-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3.5"/>
      </svg>
    </div>
    <button type="submit">Login</button>
    <a href="#">Forgot Password?</a>
    <a href="#">Sign Up</a>
    <p>&copy; 2025 company reserved</p>
  </form>
  <div id="message"></div>
</div>

<script>
const toggle = document.getElementById('togglePassword');
const form = document.getElementById('form');
const messageDiv = document.getElementById('message');
const username = form.elements['username'];
const password = form.elements['password'];

// Reset custom validity on input
username.addEventListener('input', () => username.setCustomValidity(''));
password.addEventListener('input', () => password.setCustomValidity(''));

// Form submission validation
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password.value)) {
    password.setCustomValidity("Password must be 8+ chars, include uppercase, number & special char");
  }

  if(!/^[a-zA-Z0-9_]{9,15}$/.test(username.value.trim())) {
    username.setCustomValidity("Username must be 8-15 chars: letters, numbers, or _");
  }

  if(form.checkValidity()) {
    form.reportValidity();
    messageDiv.innerHTML = "&#9989; submitted successful... " + username.value.trim();
  } else {
    form.reportValidity();
  }
});

// Toggle password visibility
toggle.addEventListener('click', () => {
  const isPassword = password.type === 'password';
  password.type = isPassword ? 'text' : 'password';
  toggle.innerHTML = isPassword
    ? '<path d="M6.06 17.94L17.94 6.06M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
    : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
});

// Dark mode toggle only for container
const darkToggle = document.getElementById('darkModeToggle');
const container = document.querySelector('.login-container');

darkToggle.addEventListener('change', () => {
  container.classList.toggle('dark-mode');
});
</script>

</body>
</html>
