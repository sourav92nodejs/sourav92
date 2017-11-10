const mongoose= require('mongoose');

const createtaskschema= mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
   task:{
        type: String,
        required: true
    }

});
const ctask= module.exports= mongoose.model('ctask', createtaskschema);