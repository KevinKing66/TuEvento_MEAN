const { Router } = require('express');
const router = Router();
var eventoC = require('../controllers/eventsC');
const fileUpload = require('express-fileupload');

router.use(fileUpload());
//C=Controller
router.delete('/delete/:id', eventoC.Deleteevento);
router.get('/evento', eventoC.BuscarEvent); 
router.get('', (res, req)=>{res.status(200).send({"saluda": "hola"})})
router.get('/evento/:ubicacion', eventoC.BuscareventName);


router.get('/i', (req,res) => res.sendFile(__dirname+'/templates/up.html'))
router.post('/i', eventoC.saveevento)

router.post('/created', eventoC.saveevento);

router.put('/update/:id', eventoC.Updateevento);


//subir imagenes con multer

// router.post('/img',upload.single("poster"),  (req, res)=>{
//     console.log(req.body.poster)
//     res.send("no problem")
// })

module.exports = router;
