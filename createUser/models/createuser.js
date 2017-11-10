const mongoose= require('mongoose');

const createuserschema= mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    contact_no:{
        type: String,
        required: true
    }
});
const cuser= module.exports= mongoose.model('cuser',createuserschema);