var moongose = require('mongoose');
var Schema = moongose.Schema;
var US = new Schema({
    _id:  {type: String, required: true},
    email: {type: String, require : true, unique: true},
    fullName: {type: String, require : true},
    status : {type: Boolean, require : true, default: false},
    password: {type: String, require : true},
});

const user = moongose.model("user", US);

module.exports = user;