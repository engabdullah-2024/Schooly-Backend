// subjectRouter.js needed for post and get
const express = require('express');
const router = express.Router();
const Subject = require('../model/subjectModel');
// Create a new subject
router.post('/subject/register', async (req, res) => {
    try {
        const subjectData = new Subject(req.body);
        await subjectData.save();
        res.status(201).send(subjectData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all subjects
router.get('/subjects', async (req, res) => {
    try {
        const subjects = await Subject.find().populate('teacher').populate('students');
        res.status(200).send(subjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
