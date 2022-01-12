var moongose = require('mongoose');
var Schema = moongose.Schema;
var US = new Schema({
    email: {type: String, require : true, unique: true},
    fullName: {type: String, require : true},
    password: {type: String, require : true},
    phoneNumber: Number
});

const user = moongose.model("users", US);

module.exports = user;