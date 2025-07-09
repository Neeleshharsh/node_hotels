const mongoose = require('mongoose');

require('dotenv').config();
const mongoURL = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connection object
const db = mongoose.connection;

// Event listeners
db.on('connected', () => {
    console.log('✅ Connected to MongoDB server');
});

db.on('disconnected', () => {
    console.log('❌ Disconnected from MongoDB server');
});

db.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
});

module.exports = db;
