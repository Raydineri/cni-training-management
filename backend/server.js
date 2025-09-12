const express = require('express');
const dossierApi = require('./routes/dossier');
const dacauserApi = require('./routes/dacaUser');
//const ufruserApi = require('./routes/ufrUser');
const cors = require('cors');//bich les requettes ma ytbloukwch f chtar thnia
require('./config/connect'); 

const app = express();
app.use(express.json());//bich y9bl type json
app.use(cors());
app.use('/dossier' ,dossierApi);//dossierApi houwa dossier.js
app.use('/dacauser' ,dacauserApi);  
//app.use('/ufruser' ,ufruserApi);  
app.use('/getimage', express.static('uploads'));

app.listen(3000, () => {
  console.log('server works');

});
//nodemon server bich kol ma nbadel hajja ttsajel auto 
//nom de la collection (table) nom du model minscule au pluriel 