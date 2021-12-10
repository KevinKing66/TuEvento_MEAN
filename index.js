require("dotenv").config();

var app = require('./app'),
port = 1000  || process.env.PORT,
mongoose = require('./DB/CBD');
app.listen(port , () =>{console.log("SG")});

