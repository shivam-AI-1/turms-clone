
const form = document.getElementById('userForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.getElementById('userName').value;
  const email = document.getElementById('email').value;


  responseMessage.textContent = `Thank you, ${name}! We have received your email: ${email}`;
  responseMessage.classList.remove('hidden');
});
