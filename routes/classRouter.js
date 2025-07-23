// classRouter.js  post and get
const express= require('express');
const router = express.Router();
const Class = require('../model/classModel');
// Create a new class
router.post('/class/register' , async (req, res) =>{
    try{
        const classData = new Class(req.body);
        await classData.save();
        res.status(201).send(classData);

    } catch (error) {
        res.status(400).send(error);
    }
})
//  Get all classes
router.get('/classes', async (req, res) =>{
    try{
        const classes = await Class.find().populate('teacher').populate('students');
        res.status(200).send(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;