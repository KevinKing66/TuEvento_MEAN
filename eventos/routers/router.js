const { Router } = require('express');
const router = Router();
var eventoC = require('../controllers/eventsC');

const fileUpload = require('express-fileupload');
router.use(fileUpload())
//C=Controller
router.delete('/delete/:id', eventoC.Deleteevento);
router.get('/evento', eventoC.BuscarEvent); 
router.get('/evento/:name', eventoC.BuscareventName)
router.post('/created', eventoC.saveevento);
router.put('/update/:id', eventoC.Updateevento);
router.post('/img', eventoC.saveImage)
router.get('', (res, req)=>{res.status(200).send({"saluda": "hola"})})
module.exports = router;
