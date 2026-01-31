const express= require("express");
const router = express.Router();
const User = require("./../models/User");



// post User
router.post("/", async (req, res) => {

  const user = new User({
    firstname:"bill",
    lastname:"gates",
    age:60,
    gender:"Male"
  });

  await user.save();
  res.send("User saved");

});



// Get Users 
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


module.exports = router;