var express = require('express'), app = express();
const cors = require('cors');

//configurar cabeceras y cors 

app.use(express.json({extends: true}));
app.use(cors())
app.use(require('./routers/router'))

module.exports = app;