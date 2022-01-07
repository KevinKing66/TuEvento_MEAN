var moongose = require('mongoose');
var Schema = moongose.Schema;
var EV = new Schema({
    nombre: {type: String, required:true},
    activo : {type: Boolean, required:true, default: true},
    ubicacion: {type: String, required:true},
    description: {type: String, required:true} ,
    precio: {type: Number, required:true},
    fecha: {type: String, required:true},
    hora: {type: String, required:true},
    poster : Object
});

const evento = moongose.model("evento", EV);

module.exports = evento;