// model/studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true

    },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
   
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  rollNumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
