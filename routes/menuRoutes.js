const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menu');


// POST: Create a new menu item
router.post('/', async (req, res) => {
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

// GET: Fetch all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("✅ Menu items fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET: Fetch all menu items by their taste {sweet , spicy , sour}
router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
            const response = await MenuItem.find({taste: tasteType});
            console.log('Response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error : 'Invalid Taste Type'});
        }
    }
    catch (err) {
        console.error('❌ Error fetching menu items:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;