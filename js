const toggle = document.getElementById('toggle');
const container = document.querySelector('.container'); 
const form = document.getElementById('myF');
const username = form.elements['username'];
const password = form.elements['password'];
const messageDiv = document.getElementById('message');

toggle.addEventListener('change', function() {
container.classList.toggle('dark-mode', toggle.checked);
});

form.addEventListener('submit' , function(event){
  event.preventDefault();
  
  username.setCustomValidity("");
  password.setCustomValidity("");
  messageDiv.textContent = '';
  
  if(!username.value.trim()){
    username.setCustomValidity("username can not be blank");
  }
  if(!password.value.trim()){
    password.setCustomValidity("password can not be blank");
  }
  if(form.checkValidity()){
    form.reportValidity();
    messageDiv.innerHTML = ' &#10003; login sucessful...   '+username.value.trim();
    form.reset();
  }
});

 
 
