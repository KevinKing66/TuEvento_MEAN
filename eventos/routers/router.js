const { Router } = require('express');
const router = Router();
var eventoC = require('../controllers/eventsC');

//C=Controller
router.delete('/delete/:id', eventoC.Deleteevento);

router.get('/evento', eventoC.BuscarEvent); 
router.get('', (res, req)=>{res.status(200).send({"saluda": "hola"})})
router.get('/evento/:ubicacion', eventoC.BuscareventName);
router.get('/imagenes/:file', eventoC.files)


router.post('/created', eventoC.saveevento);
router.post('/evento/subscribe', eventoC.asistir)

router.put('/update/:id', eventoC.Updateevento);
router.put('/d/:id', eventoC.desactivate)



module.exports = router;
