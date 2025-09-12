const express = require('express');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const dacaUser = require('../models/dacaUser');
const multer = require('multer');//multer nstaamlouh bich yaawena fil upload ysna3 virtual engine ystocki fiha 

//cryptage password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ll image 
filename ='';
const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect) => {
        let date = Date.now();

        let fl = date+ '.' + file.mimetype.split('/')[1];    
        //exemple: 1234567.png
        redirect(null, fl);
        filename = fl;
    
    }
});

const upload = multer({storage: mystorage});



//create account 

router.post('/createaccount', upload.any('image'), (req, res) => {
  let data = req.body;

  if (!data.password) {
    return res.status(400).send('Password is required');
  }

  let dacauser = new dacaUser(data);
  dacauser.image = filename;

  let salt = bcrypt.genSaltSync(10); //generer aleatoire 10 charactere w biha ycripti password
  dacauser.password = bcrypt.hashSync(data.password, salt); // Hash the password

  dacauser.save()
    .then((saved) => {
      filename = '';
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



//login
router.post('/login', (req, res) => {
  let data = req.body;

  dacaUser.findOne({ nom_utilisateur: data.nom_utilisateur })
    .then(dacauser => {
      if (!dacauser) {
        return res.status(404).send('nom_utilisateur or password invalid');
      }

      let validPass = bcrypt.compareSync(data.password, dacauser.password); // true or false password

      if (!validPass) {
        return res.status(401).send('nom_utilisateur or password non valid');
      }

      let payload = {
        _id: dacauser._id,
        nom_utilisateur: dacauser.nom_utilisateur,
        fullname: dacauser.nom + ' ' + dacauser.prenom,
        about: dacauser.about,
      };

      let token = jwt.sign(payload, '1234567'); // payload + secret key
      res.status(200).send({ mytoken: token });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});



//getall
router.get('/getall', (req, res) => {
  dacaUser.find({})
    .then(
      (dacausers) => {
        res.status(200).send(dacausers);
      }
    )
    .catch(
      (err) => {
        res.status(400).send(err);
      }
    );
});



//getbyid
router.get('/getbyid/:id', (req, res) => {
  let id = req.params.id;
  dacaUser.findOne({ _id: id })
    .then(
      (dacauser) => {
        res.status(200).send(dacauser);
      }
    )
    .catch(
      (err) => {
        res.status(400).send(err);
      }
    );
});



//supprimer dacauser
router.delete('/supprimer/:id', (req, res) => {
  let id = req.params.id;
  dacaUser.findByIdAndDelete({ _id: id })
    .then(
      (dacauser) => {
        res.status(200).send(dacauser);
      }
    )
    .catch(
      (err) => {
        res.status(400).send(err);
      }
    );
});



//update dacaUser
router.put('/update/:id', upload.any('image'), (req, res) => {
  let id = req.params.id;
  let data = req.body;

  if (data.tags) {
    data.tags = data.tags.split(',');
  }

  if(filename.length > 0){
    data.image = filename;
  }

  dacaUser.findByIdAndUpdate(id, data, { new: true }) // new: true ==> l9ina data jdida
    .then((dacauser) => {
      filename = '';
      res.status(200).send(dacauser);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});





module.exports = router;  