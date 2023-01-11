const router = require("express").Router();
const { User } = require("../../models");

// api/users/
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    if (!userData) {
      res.status(500).json({ message: "something went wrong" });
      return;
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

  router.post('/logout', async (req, res) => {
    req.session.destroy(err => console.log(err));
    res.status(200).json({"message" : 'logged out'})
  });
});

module.exports = router;
