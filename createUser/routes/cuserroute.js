const express= require('express');
const router1= express.Router();
const cuser= require('../models/createuser');
//add userdetails
router1.post('/cuser', function(req,res,next){
    var newCreateUser= new cuser({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        contact_no: req.body.contact_no
    });
    newCreateUser.save(function(err, cuser){
        if(err)
        {
            res.json({msg: 'failed to add user'});
        }
        else
        {
            
            res.json({msg: 'user added successfully'});
        }

    });
});
module.exports= router1;