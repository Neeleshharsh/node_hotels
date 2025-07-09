const express = require('express');
const db = require('./db'); // MongoDB connection
const app = express();
const MenuItem = require('./models/menu');
const bodyParser = require('body-parser');

const PORT = 3000;

// Middleware
app.use(bodyParser.json());

app.get('/' , function(req, res){
    res.send("welcome to my hotel")
})

// POST: Create a new menu item
app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('✅ Menu item saved:', response);
        res.status(201).json(response);
    } catch (err) {
        console.error('❌ Error saving menu item:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Import router
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// use person routers 
app.use('/person', personRoutes);

// use menu routers
app.use('/menu', menuRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});


// comment Added