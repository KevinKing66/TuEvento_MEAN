var express = require('express'), app = express();
const cors = require('cors');
//configurar cabeceras y cors 

// app.use(express.json());
// app.use(express.urlencoded())
// app.use(express.urlencoded({ limit: '100MB', extended: true }));
app.use(
    express.json({
        limit: '20mb'
    })
)
// for parsing application/x-www-form-urlencoded
app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)

//Set Request Size Limit
// app.use(express.bodyParser({limit: '50mb'}));

app.use(cors())
app.use(require('./routers/router'))

module.exports = app;