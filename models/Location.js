const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    startLocation : String,
    endLocation : String,
    via : String,
    pollution : Number
});

module.exports = mongoose.model('Col_fyp', locationSchema);