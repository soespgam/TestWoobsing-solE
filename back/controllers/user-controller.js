'use strict'

var User = require('../models/user');
var config = require('../config/config')

function createUser(req, res) {
    var user = new User();
    var params = req.body;
   
    user.name = params.name;
    user.surname = params.surname;
    user.phone = params.phone;
    user.adress = params.adress;
    user.email = params.email;
    console.log("user", user)
    
    user.save( (err, userStored) => {
        if (err) {
            return res.status(500).send({ message: config.message.ERROR_GUARDAR, err });
        }
        if (!userStored) {
            return res.status(404).send({ message: config.message.ERROR_USUARIO });
        }
        return res.status(200).send({ user: userStored });
    });
}

function getUsers(req, res) {
    console.log("ENTROOOOOOO")
    User.find( (err, users) => {
        if (err) {
            return res.status(500).send({ message: config.message.ERROR_GETUSERS, err });
        }
        if (!users) {
            return res.status(404).send({ message: config.message.ERROR_USUARIOS });
        }
        return res.status(200).send({ users });
    });
}

function DeleteUser() {
    var idUser = req.params.id;
    User.findByIdAndRemove(idUser,  (err, userRemoved) => {
        if (err) {
            return res.status(500).send({ message: config.message.ERROR_ELIMINAR, err });
        }
        if (!userRemoved) {
            return res.status(404).send({ message: config.message.ERROR_ELIMINAR });
        }
        return res.status(200).send({ userRemoved });

    });
}

module.exports = {
    createUser,
    getUsers,
    DeleteUser
};