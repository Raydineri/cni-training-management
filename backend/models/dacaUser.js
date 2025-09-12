const mongoose = require('mongoose');

const dacaUser = mongoose.model('dacaUser', {
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
module.exports = dacaUser;  