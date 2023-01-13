const isEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const validate = (email, password, passwordConfirm) => {
  err = '';

  if(password.length < 8 || passwordConfirm.length < 8) {
    err += 'Password must be 8 or more characters long.\n'
  }

  if(!isEmail(email)) {
    err += 'Email must be valid\n'
  }

  if(err.length > 0) {
    alert(err);
    return false;
  }

  return true;
}

const registrationHandler = async (e) => {
  e.preventDefault();

  const first_name = document.querySelector('#firstNameInput').value.trim();
  const last_name = document.querySelector('#lastNameInput').value.trim();
  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();
  const passwordConfirm = document.querySelector('#passwordConfirmInput').value.trim();

  if(email && first_name && last_name && password && passwordConfirm && password === passwordConfirm) {

    if(!validate(email, password, passwordConfirm)) {
      return;
    }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email, first_name, last_name, password}),
      headers: {'Content-Type': 'application/json'}
    });
    
    if(response.ok) {
      document.location.replace('/')
    }
  }
}

document.querySelector('#registration-form').addEventListener('submit', registrationHandler)