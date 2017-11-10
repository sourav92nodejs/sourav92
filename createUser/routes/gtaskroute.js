const express= require('express');
const router4= express.Router();
const ctask= require('../models/createtask');

//retrieving usertaskdetails
router4.get('/gtask', function(req,res,next){
    ctask.find(function(err, ctask){
        res.json(ctask);
    })
});
module.exports= router4;