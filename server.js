const express = require("express");
const connectDB = require("./database");
const userRoutes = require("./routes/userRoutes");
const menuRoutes = require("./routes/menuRoutes");
require("dotenv").config();
const PORT = process.env.PORT;


const app = express();

// middleware
app.use(express.json());

// Connection
connectDB();

// home page
app.get("/", (req, res) => {
    res.send("Welcome to home Page!")
});

// Routes
app.use("/user", userRoutes);
app.use("/menu", menuRoutes);
    



//  Start the server
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
});
