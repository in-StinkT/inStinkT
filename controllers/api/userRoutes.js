const router = require('express').Router();
const { User } = require('../../models');

// api/users/
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body)

    if(!userData) {
      res.status(500).json({message: 'something went wrong'});
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
})
module.exports = router;