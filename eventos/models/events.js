var moongose = require('mongoose');
var Schema = moongose.Schema;
var EV = new Schema({
    nombre: {type: String, require : true},
    activo : {type: Boolean, require : true, default: true},
    ubicacion: {type: String, require : true},
    description: String,
    precio: Number,
});

const evento = moongose.model("evento", EV);

module.exports = evento;