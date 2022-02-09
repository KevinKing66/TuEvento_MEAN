const { Schema, model } = require("mongoose");
var US = new Schema({
    email: {type: String, require : true, unique: true},
    fullName: {type: String, require : true},
    password: {type: String, require : true},
    misEventos: Array,
    phoneNumber: Number
});

const user = model("users", US);

module.exports = user;