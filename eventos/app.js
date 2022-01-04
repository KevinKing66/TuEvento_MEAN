var express = require('express'), app = express();
const cors = require('cors');

//configurar cabeceras y cors 

app.use(express.json());
app.use(cors())
app.use(require('./routers/router'))


module.exports = app;