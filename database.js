const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/hotel");
        console.log("MongoDB connected");
    }
    catch(err){
        console.log("MongoDB connection error:", err);    
    }
};

// comment Added for testing purposes
module.exports = connectDB;