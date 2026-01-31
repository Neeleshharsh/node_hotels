const mongoose = require("mongoose");

// userSchema
const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    gender:String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;