const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/CNI')
    .then(
        ()=>{
            console.log('connected');
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )
module.exports = mongoose;  //nemportii biha base chnstaamlha f projet o5rin  