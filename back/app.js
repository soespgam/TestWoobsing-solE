'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')

var user_routes = require('./routes/routes');
app.use(cors());
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());
app.options('*', cors());
app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY ,Origin , X-Requested-With, Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');  

    next();
});

app.use('/api',user_routes)

module.exports =app;
