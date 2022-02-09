const { Schema, model } = require("mongoose");
var newUser = new Schema({
    email: String,
    userName: {type: String, minlength: 6},
    password: {type: String, minlength: 6}
});

const user = model("usersInnpactia", newUser);

module.exports = user;