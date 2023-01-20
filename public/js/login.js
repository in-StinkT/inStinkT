// const registrationHandler = async (e) => {
//   e.preventDefault();

//   const first_name = document.querySelector('#firstNameInput').value.trim();
//   const last_name = document.querySelector('#lastNameInput').value.trim();
//   const email = document.querySelector('#emailInput').value.trim();
//   const password = document.querySelector('#passwordInput').value.trim();
//   const passwordConfirm = document.querySelector('#passwordConfirmInput').value.trim();

//   if(email && first_name && last_name && password && passwordConfirm && password === passwordConfirm) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({email, first_name, last_name, password}),
//       headers: {'Content-Type': 'application/json'}
//     });
    
//   }
// }

// document.querySelector('#registration-form').addEventListener('submit', registrationHandler)
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