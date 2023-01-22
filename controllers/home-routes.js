const router = require("express").Router();
const { Product, User, Scent } = require("../models");

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

// scent routes to show all products of a certain scent
router.get('/scent=:scent/page=:num', async(req,res)=>{
  try{
    let isFirst = true;
    let notLast = true;
    const pageNum = req.params.num
    const scentData = await Product.findAll(
      {
        limit: 39,
        offset: 39 * (pageNum-1),
        include:[{
          model: Scent,
          attributes: ['name'],
          where: {
            name: req.params.scent,
          },
        }]
      },
    );
    let nextPage = parseInt(req.params.num) + 1;
    let previousPage = parseInt(req.params.num) -1;
    if(scentData.length<39){
      nextPage = null;
      notLast = false;
    }
    if(pageNum>1){
      isFirst = false;
    }
    const scentProducts = scentData.map((scent)=>scent.get({plain:true}));
    const scent = scentProducts[0].scent.name;
    
    
    res.render('scent-products', { scentProducts,
      logged_in: req.session.logged_in, 
      nextP: nextPage,
      previousP: previousPage,
      notLast,
      isFirst,
      scent,
  });
    // res.json(scentProducts[0].scent.name);

  }catch(err){
    console.log(err);
  }
})
// /register
router.get("/register", async (req, res) => {
  res.render("register");
});

module.exports = router;
