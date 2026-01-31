const mongoose = require("mongoose");

// menuSchema
const menuSchema = new mongoose.Schema({
    itemName:String,
    test:String,
    shelfLife:Number,
    price:Number,
    
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;