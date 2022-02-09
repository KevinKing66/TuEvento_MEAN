const { Router } = require('express');
const router = Router();
var userController = require('../controllers/userController');

router.post('/login', userController.verifyData);
router.post('/login/auth', userController.verifyToken, userController.verefyTokenPt2);
router.post('/logup', userController.createUser);
module.exports = router;