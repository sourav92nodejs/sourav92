const express= require('express');
const router2= express.Router();
const ctask= require('../models/createtask');
//add usertaskdetails
router2.post('/ctask', function(req,res,next){
    var newCreateTask= new ctask({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        task: req.body.task
    });
    newCreateTask.save(function(err, ctask){
        if(err)
        {
            res.json({msg: 'failed to add task'});
        }
        else
        {
            
            res.json({msg: 'task added successfully'});
        }

    });
});
module.exports= router2;