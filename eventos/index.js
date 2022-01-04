var app = require('./app'),
mongoose = require('./DB/CBD');

app.listen(process.env.port || 1001, () =>{console.log("SG")});

