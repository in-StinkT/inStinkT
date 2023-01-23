
const loginHandler = async (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if(email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    });
    
    if(response.ok) {
      document.location.replace('/')
    }
  }
}

document.querySelector('#login-form').addEventListener('submit', loginHandler)