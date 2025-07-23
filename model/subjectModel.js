//  subjectModel.js needed for subject id, name, teacher, students , 
const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
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
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
