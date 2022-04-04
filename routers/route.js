const router = require('express').Router();

// const multer = require('../middleware/multer-config')

const auth = require('../middlewares/authToken');
const imcCtrl = require('../controllers/imc')
const userCtrl = require('../controllers/user')
//insert imc in dataBase
router.post('/myimc',imcCtrl.createImc)
//user signin and login router
router.post('/signin',userCtrl.createUser)
router.post('/login',userCtrl.login);

module.exports = router