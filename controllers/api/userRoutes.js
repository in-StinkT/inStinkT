const router = require("express").Router();
const { User } = require("../../models");

// api/users/
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    if (!userData) {
      res.status(500).json({ message: "something went wrong" });
      return;  // Will break without this
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({ where: { id: req.params.id } });

    if (userData >= 1) {
      res.status(200).json({
        message: `successfully deleted user with the id ${req.params.id}`,
      });
    } else {
      res
        .status(500)
        .json({ message: `failed to delete user with the specified id` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {

    const dbUserData = await User.findOne({ where: { email: req.body.email } });
    const validPassword = await dbUserData.checkPassword(req.body.password);

    // if dbUserData returns null
    if (!dbUserData) {
      res.status(400).json({ message: "User doesn't exist" });
      return;
    }

    
    // if password given doesnt match the user's password on the database
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: dbUserData, message: "You are now logged in" });
    });

   
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", async (req, res) => {
  req.session.destroy((err) => console.log(err));
  res.status(200).json({ message: "logged out" });
});

module.exports = router;
