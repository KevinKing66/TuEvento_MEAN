const { Router } = require('express');
const router = Router();
var userC = require('../controllers/usersC');
//C=Controller
router.delete('/delete/:id', userC.DeleteUser);
router.get('/user', userC.BuscarUsuario); 
router.get('/user/:id', userC.BuscarUsurioid);
router.post('/created', userC.saveUser);
router.put('/update/:id', userC.UpdateUser);

router.post('/login', userC.verifyData);
router.post('/login/auth', userC.verifyToken, userC.verifyTokenPt2);

module.exports = router;
