// parentRouter.js post and get
const express = require('express')
const router = express.Router();
const Parent = require('../model/parentModel');
// Create a new parent
router.post('/parent/register', async (req, res) =>{
    try{
        const parent = new Parent(req.body);
        await parent.save();
        res.status(201).send(parent);

    } catch(error) {
        res.status(400).json({message: error.message})

    }

})
// Get all parents
router.get('/parents', async (req, res) =>{
    try{
        const parents = await Parent.find().populate("children");
        res.status(200).send(parents);
    } catch(error) {
        res.status(400).json({message: error.message})
    }
})
module.exports = router;