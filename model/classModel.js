// classModel.js needed for class id, name, subject, teacher, students
const mongoose = require('mongoose')
const classSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,

    }]

})
const Class = mongoose.model('Class', classSchema);
module.exports= Class