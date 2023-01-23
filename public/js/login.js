// const validatePass = async (pass) => {
//   const user = await fetch('/api/')
// }

const loginHandler = async (e) => {
  e.preventDefault();
  try {
    const email = document.querySelector("#emailInput").value.trim();
    const password = document.querySelector("#passwordInput").value.trim();

    if (email && password) {

      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Incorrect password");
      }
    }
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
};

document.querySelector("#login-form").addEventListener("submit", loginHandler);
