const logoutHandler = async (e) => {
  const response = await fetch('/api/users/logout',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if(response.ok) {
    document.location.replace('/');
  }
}
const logoutButton = document.querySelector('#header-logout');

if(logoutButton) {
  logoutButton.addEventListener('click', logoutHandler)
}