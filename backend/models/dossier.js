const mongoose = require('mongoose');
const Dossier = mongoose.model('Dossier', {
    
    idDossier: {
        type: String 
    },
    minestre: {
        type: String 
    },
    entreprise: {
        type: String 
    },
    application: {
        type: String 
    },
    date_creation :{
        type: Date 
    },
    
    nom_vis_a_vis: {
        type: String 
    }, 
    tel_vis_a_vis: {
        type: Number
    }, 
    portable_vis_a_vis: {
        type: Number
    },  
    email : {
        type: String 
    },
    reference_bc: {
        type: String 
    },
    date_bc: {
        type: Date 
    },
    date_bo_bc: {
        type: Date 
    },  
    date_livraison: {
        type: Date 
    },
    date_limite_formation: {
        type: Date 
    },
    date_reel_formation : {
        type: Date 
    },
    formateur: {
        type: String 
    },
    nbre_participants: {
        type: Number 
    },
    realise : {
        type: Boolean 
    },
    Remarque: {
        type: String 
    },
    Etat: {
        type: String 
    },

// "__v": 0 combien de fois le document a ete modifie 

})
module.exports = Dossier;//nexporti biha module ll fichier lo5rin w nayt ll model b require
