const router = require("express").Router();
const { Product, User } = require("../models");

// /
router.get("/", async (req, res) => {
  try {
    const data = { statusCode: res.statusCode, message: "hello" };
    res.render("index", {
      data,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /login
router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id,
  });
});

// /logout
router.get("/logout", async (req, res) => {
  const response = await fetch("http://localhost:8000/api/users/logout", {
    method: "POST",
  });
  if (response.ok) {
    res.redirect("/");
  }
});

router.get('/profile', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id)
    const profileData = {email : dbUserData.email, first_name: dbUserData.first_name, last_name: dbUserData.last_name, logged_in: req.session.logged_in, user_id: req.session.user_id}

    res.render('profile', profileData)
  } catch (err) {

  }
})

// /register
router.get("/register", async (req, res) => {
  res.render("register");
});

module.exports = router;
