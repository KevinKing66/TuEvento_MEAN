var moongose = require('mongoose');
var Schema = moongose.Schema;
var US = new Schema({
    _id:  {type: String, required: true},
    email: {type: String, require : true, unique: true},
    fullName: {type: String, require : true},
    password: {type: String, require : true},
    phoneNumeber: Number
});

const user = moongose.model("user", US);

module.exports = user;