var app = require('./app'),
mongoose = require('./DB/CBD');

// app.listen(1001, () =>{console.log("SG")});
app.listen(process.env.port || 1001, () =>{console.log("SG")});

