'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port ||3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongods://localhost:27017/bdprueba',async (err,res)=>{
    try {
        console.log("conexion establacida");

        app.listen(port,function(){
            console.log("servidor web escuchando en http://localhost:" + port)
        });
    }
    catch (err){
        console.log(err)
    }
        
    
});