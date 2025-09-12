const mongoose = require('mongoose');

const ufrUser = mongoose.model('ufrUser', {
    nom : {
        type: String 
    },
    prenom : {
        type: String 
    },
    nom_utilisateur : {
        type: String,
        unique: true
    },
    password : {
        type: String 
    },
    about : {
        type: String 
    },
    image : {
        type: String 
    },

});
module.exports = ufrUser;  