// parentModel.js needed for parent id , name, email, password, phone, address, children, 
const mongoose = require('mongoose')
const parentSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,

    },
    name: {
        type : String,
        required: true,
    },
    email: {
        type : String,
        required: true,

    },
    password : {
        type : String,
        required: true,

    },
    phone : {
        type: Number,
        required: true
    },
    adress : {
        type: String,
        required: true,

    },
    children : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,

    }],

    

})

const Parent = mongoose.model('Parent', parentSchema);
module.exports = Parent;
