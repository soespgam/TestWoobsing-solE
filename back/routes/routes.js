'use strict'

var express = require('express');
var userController =require('../controllers/user-controller');

var api= express.Router();

api.post('/saveUser',userController.createUser);
api.get('/getUsers',userController.getUsers);
api.delete('/deleteuser/:id',userController.DeleteUser);

module.exports = api;