const mongoose = require('mongoose');

// Define MongoDB connection URL (no space!)
const mongoURL = 'mongodb://localhost:27017/mydatabase';

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
