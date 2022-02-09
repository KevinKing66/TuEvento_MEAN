var mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect( process.env.db ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, (err, res) =>{
    if(err){
        console.log('la conexion a la base de datos fue incorrecta...');
        throw err;
    }else{
        console.log('la conexion a la base de datos fue correcta...');
    }
});

module.exports = mongoose;