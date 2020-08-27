'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname:String,
    phone: Number,
    adress: String,
    email: String
});

module.exports = mongoose.model("user",UserSchema);