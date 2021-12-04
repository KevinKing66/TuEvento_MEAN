var express = require('express'), app = express(), Mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
//configurar cabeceras y cors 

app.use(express.json());
app.use(cors())
app.use(require('./routers/router'))

module.exports = app;