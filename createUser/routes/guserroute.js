const express= require('express');
const router3= express.Router();
const cuser= require('../models/createuser');

//retrieving userdetails
router3.get('/guser', function(req,res,next){
    cuser.find(function(err, cuser){
        res.json(cuser);
    })
});
module.exports= router3;