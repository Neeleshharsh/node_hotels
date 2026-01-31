const mongoose = require("mongoose");
require("dotenv").config();

// cloud URL
const MongoURL = process.env.MONGO_URL;

const connectDB = async () => {
    try{
        await mongoose.connect(MongoURL);
        console.log("MongoDB connected");
    }
    catch(err){
        console.log("MongoDB connection error:", err);    
    }
}

// comment Added for testing purposes
module.exports = connectDB;