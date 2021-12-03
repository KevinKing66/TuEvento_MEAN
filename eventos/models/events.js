var moongose = require('mongoose');
var Schema = moongose.Schema;
var EV = new Schema({
    nombre: {type: String, require : true},
    activo : {type: Boolean, require : true, default: true},
    ubicacion: {type: String, require : true},
    description: {type: String, require : true} ,
    precio: {type: Number, required: true},
    fecha: {type: String, required: true},
    hora: {type: String, required: true},
    
});

const evento = moongose.model("evento", EV);

module.exports = evento;