const router = require('express').Router();
const Favorite = require('../../models/Favorite');
const withAuth = require('../../utils/auth');


// create the favorite at end point /favorites/
router.post('/', withAuth, async (req, res) => {
    try {
        const favorite = await Favorite.create({
            ...req.body,
            userId: req.session.userId,
        })
        res.json(favorite);
    } catch (err) {
        res.status(500).json(err);
    }
})

//delete from favorites
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const favoriteArray = await Favorite.destroy({
            where: {
                id: req.params.id,
            }
        })
        if (favoriteArray > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;