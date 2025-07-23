// teacherModel.js , needed for  id, name, email, password, phone, subejct , address
const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,

    },
    name: {
        type: String,
        required:true,

    },
    email: {
        type: String,
        required: true,

    },
    passowrd:{
        type: String,
        required: false,

    },
    phone:{
        type:Number,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },

})
const Teacher = mongoose.model('Teacher', teacherSchema)
module.exports = Teacher