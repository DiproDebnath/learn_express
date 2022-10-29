const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/new", (req, res) => {
  res.render("user");
});

router.post("/", (req, res) => {
    const isValid = false;

    if(isValid){
        users.push({name: req.body.firstName})
        console.log(users);
        res.redirect(`/users/${users.length - 1 }`)
    }else{
        res.render('user', {firstName : req.body.firstName})
    }

})

// router.get('/:id', (req, res)=>{
//   res.send("user with an ID" + req.params.id)
// })

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("get user with id " + req.user.name);
  })
  .put((req, res) => {
    res.send("update user with id " + req.params.id);
  });

//middleware

const users = [{name: "dipro"}, {name: "myth"}]
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
