const express = require('express');
const router = express.Router();
const Student = require('../model/studentModel');

// Create a new student
router.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    // Send JSON with error message for better client feedback
    res.status(400).json({ message: error.message });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
