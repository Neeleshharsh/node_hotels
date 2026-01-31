const express= require("express");
const Menu = require("./../models/Menu");
const router = express.Router();



// Get menu 
router.get("/", async (req, res) => {
  const menuItems = await Menu.find();
  res.json(menuItems);
});


// Get menu item test
router.get("/:test", async (req, res) => {
  const test = req.params.test;

  const allowedTests = ["sweet", "spicy", "sour", "crunchy", "soucy"];
  if (!allowedTests.includes(test)) {
     return res.status(400).json({ message: "Invalid test type" });
  }
  const menuItems = await Menu.find({ test: test });
  res.json(menuItems);
});


// post Menu
router.post("/", async (req, res) => {
  const menu = new Menu({
    itemName:"pasta",
    test:"spicy",
    shelfLife:60,
    price:50,
  });

  await menu.save();
  res.send("Menu saved");
});


// put Menu
router.put("/:_id", async (req, res) => {

    const _id = req.params._id;
    const menu = await Menu.findByIdAndUpdate(_id, req.body, { new: true, runValidators:true });

    if (!menu) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    console.log("Item updated");
    res.json(menu);
  });


  // patch Menu
router.patch("/:_id", async (req, res) => {

    const _id = req.params._id;
    const menu = await Menu.findByIdAndUpdate(_id, req.body, { new: true, runValidators:true });

    if (!menu) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    console.log("Item updated");
    res.json(menu);
  });


 
// delete Menu item
router.delete("/:_id", async (req, res) => {

    const _id = req.params._id;
    const response = await Menu.findByIdAndDelete(_id);

    if (!response) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    console.log("Item deleted");
    res.json({ message: "Item deleted successfully"});
  });

 

module.exports = router;