const router = require('express').Router();

// const multer = require('../middleware/multer-config')

const auth = require('../middlewares/authToken');
const imcCtrl = require('../controllers/imc')
const userCtrl = require('../controllers/user')
//insert imc in dataBase


router.post('/myimc',auth,imcCtrl.createImc)
router.get('/myimc',auth,imcCtrl.displayImc)
//user signin and login router
router.post('/signin',userCtrl.createUser)
router.post('/login',userCtrl.login);
router.delete('/delete',auth,userCtrl.deleteUser)

module.exports = router