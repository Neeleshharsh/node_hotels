const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

// POST: Create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('✅ Person saved:', response);
        res.status(201).json(response);
    } catch (err) {
        console.error('❌ Error saving person:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET: Fetch all persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("✅ Persons fetched");
        res.status(200).json(data);
    } catch (err) {
        console.error('❌ Error fetching persons:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET: Fetch worker form persons
router.get('/:workType', async (req, res) => {

    try {
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('Response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error : 'Invalid work Type'});
        }
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


// UPDATE: update the data of a person
router.put('/:id', async (req, res) => {

    try {

        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId , updatedPersonData, {
            new : true,
            runValidators : true    
        })

        if(!response){
            return res.status(404).json({error : "Person not found"});
        }
        console.log('Data Updated');
        res.status(200).json(response);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Delete: delete the data of a person
router.delete('/:id', async (req, res) => {

    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error : "Person not found"});
        }
        console.log('Data deleted');
        res.status(200).json({message :'Person Deleted successfully'});
    } 
    catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});


module.exports = router;