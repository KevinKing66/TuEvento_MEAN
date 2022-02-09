const { Router } = require('express');
const router = Router();
var eventoC = require('../controllers/eventsC');

//C=Controller
router.delete('/delete/:id', eventoC.Deleteevento);

router.get('/evento', eventoC.BuscarEvent); 
router.get('/evento/:_id', eventoC.BuscareventID);
router.get('/imagenes/:file', eventoC.files);


router.post('/created', eventoC.saveevento);

router.put('/evento/subscribe/:id', eventoC.asistir);
router.put('/update/:id', eventoC.Updateevento);
router.put('/d/:id', eventoC.desactivate);



module.exports = router;
