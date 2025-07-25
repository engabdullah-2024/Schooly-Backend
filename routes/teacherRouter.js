// teacherRouter.js for post and get
const express= require('express');
const router = express.Router();
const Teacher = require('../model/teacherModel');
// Create a new teacher 
router.post('/teacher/register', async (req, res) =>{
    try{
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).send(teacher);

    } catch(error){
        res.status(400). json ({message : error.message})
    }
    
})
//  Get all teachers
router.get('/teachers', async (req, res) =>{
    try{
        const teacher = await Teacher.find();
        res.status(200). send(teacher);

    } catch(err){
        res.status(500).json({message : err.message})

    }

})
// update and delete teacher 
router.put('/teachers/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params

.id, req.body, { new: true });
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a teacher
router.delete('/teachers/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports= router

