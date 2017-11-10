//importing modules
var express= require('express');
var mongoose= require('mongoose');
var bodyparser= require('body-parser');
var cors = require('cors');
var path= require('path');
var app= express();
var mongojs= require('mongojs');
var db= mongojs('createuserlist',['createuserlist']);
var db1= mongojs('createtasklist',['createtasklist']);
const route1= require('./routes/cuserroute');
const route2= require('./routes/ctaskroute');
const route3= require('./routes/guserroute');
const route4= require('./routes/gtaskroute');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/createUser');
//on connection 
mongoose.connection.on('connected', function(){
    console.log('connected to database mongodb @ 27017');
});
mongoose.connection.on('error', function(err){
    if(err){
   console.log('Error in Database connection:' +err);
    }
});
//port no
const port= 3000;
//adding middleware - cors
app.use(cors());
//body -parser
app.use(bodyparser.json());
//static files
app.use(express.static(path.join(__dirname, 'public')));
app.get('/cuser', function(req, res){
    console.log("I received a get request");
    db.createuserlist.find(function(err, docs){
            console.log(docs);
            res.json(docs);
    });
});
app.post('/cuser', function(req,res){
        console.log(req.body);
        db.createuserlist.insert(req.body, function(err, doc){
            res.json(doc);
        });
});
app.get('/ctask', function(req, res){
    console.log("I received a get request");
    db1.createtasklist.find(function(err, docs){
            console.log(docs);
            res.json(docs);
    });
});
app.post('/ctask', function(req,res){
        console.log(req.body);
        db1.createtasklist.insert(req.body, function(err, doc){
            res.json(doc);
        });
});


//making routes
app.use('/api', route1);
app.use('/api', route2);
app.use('/api', route3);
app.use('/api', route4);

//testing server
app.get('/', (req,res)=>{
    res.send('foobar');
});
app.listen(port, ()=>{
    console.log('server started at port:'+port);
});