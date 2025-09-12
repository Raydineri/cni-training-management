const express = require('express');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const Dossier = require('../models/dossier');


//ajouter dossier
router.post('/ajoutDossier', (req, res) => {
    let data = req.body;
    console.log(data); // afficher data recu 
    let dossier = new Dossier(data);
    dossier.date_creation = new Date();
  
    dossier.save()
      .then((saved) => {
        console.log('Dossier saved successfully'); // afficher message succes
        res.status(200).send(saved);
      })
      .catch((err) => {
        console.log('Error saving dossier: ', err); // afficher message eroor 
        res.status(400).send(err);
      });
  });








//get all dossier
router.get('/getall', (req, res) => {

    Dossier.find()
        .then(
            (dossier) => {
                res.status(200).send(dossier);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
});

//get dossier by id
router.get('/getbyid/:id', (req, res) => {
    let id = req.params.id;
    Dossier.findOne({ _id: id })
        .then(
            (dossier) => {
                res.status(200).send(dossier);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
    


});

//get dossier by entreprise
router.get('/getbyientreprise/:id', (req, res) => {
    let id = req.params.id;
    Dossier.find({ entreprise: id })
        .then(
            (dossier) => {
                res.status(200).send(dossier);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )
    


});
//supprimer dossier
router.delete('/supprimer/:id', (req, res) => {
    let id = req.params.id;
    Dossier.findByIdAndDelete({ _id: id })
        .then(
            (dossier) => {
                res.status(200).send(dossier);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )


});

//update dossier
router.put('/update/:id',(req, res) => {
    let id = req.params.id;
    let data = req.body;
    Dossier.findByIdAndUpdate({ _id: id }, data ,{ new: true } )
        .then(
            (dossier) => {
                res.status(200).send(dossier);
            }
        )
        .catch(
            (err) => {
                res.status(400).send(err);
            }
        )


});





module.exports = router; 
