var express = require('express'), app = express();
const cors = require('cors');
const router = require('./src/routers/router');
const mongoose = require('./src/db/conection')

app.use(express.json({extends: true}));
app.use(cors());
app.use(router);

module.exports = app;