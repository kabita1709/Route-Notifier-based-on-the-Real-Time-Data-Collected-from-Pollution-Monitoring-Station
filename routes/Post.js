const express = require ('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const mongodb = require('mongodb');

const bodyParser = require('body-parser');
const URLencodedParser = bodyParser.urlencoded({ extended: false });

const Location = require('../models/Location');
  
const client = mongodb.MongoClient;

router.get('/', URLencodedParser, async(req,res) => {
    const location = new Location({
        startLocation: req.body.startLocation,
        endLocation: req.body.endLocation
    });
    try{
        console.log(location);
        const posts = await Location.find();
        res.json(posts);
    }catch (err) {
        res.json({message : err});
    }
});

router.post('/',URLencodedParser , async (req,res) => {
    const location = new Location({
        startLocation: req.body.startLocation,
        endLocation: req.body.endLocation
    });
    try{
        const savedLocation = await location.save();
        res.json(savedLocation);

    }catch (err){
        res.json({ message : err});
    }
});

module.exports = router;