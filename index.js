const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const URLencodedParser = bodyParser.urlencoded({ extended: false });

const postsRoute = require('./routes/Post');


app.use('/posts', postsRoute);

mongoose.connect(
    'mongodb+srv://fyp2021:fyp@2021@cluster0.4enms.mongodb.net/db_fyp?retryWrites=true&w=majority', 
    {useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        console.log("connected to db");
    })


//load and initialise MessageBird SDK
var messagebird = require('messagebird')('240hIGxR7Pp6gzkITgCgICggN');

app.engine('handlebars',exphbs({defaultLayout: false}));
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static('public'));

app.get('/', function(req,res) {
    res.render('step1');                     //CHECK ANY PAGE HERE
});

//Handle phone number submission
app.post('/step2', function(req,res) {
    var number = req.body.number;

    //Make request to verify API
    messagebird.verify.create(number, {
        template : "Your Verification code is %token."
    }, function(err,response) {
        if(err){
            //request has failed
            console.log(err);
            res.render('step1', {
                error : err.errors[0].description
            });
        } else{
            //request was successful
            console.log(response);
            res.render('step2', {
                id : response.id
            });
        }
    });
});

//verify whether the token is correct
app.post('/step3', function(req,res) {
    var id=req.body.id;
    var token=req.body.token;

    //make request to verify API
    messagebird.verify.verify(id,token, function(err, response) {
        if(err) {
            //verification has failed
            res.render('step2', {
                error: err.errors[0].description,
                id : id
            });
        } else{
            //verification was successful
            res.render('step3', {layout: false});
        }
    });
});

app.post('/step4', function(req,res) {
    console.log(req.body);
    res.render('step4',  {layout: false});
})


app.listen(8080);