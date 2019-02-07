var express = require('express');
var router = express.Router();
const Controller = require('../controllers/userController')
const { verifyUser } = require('../middlewares')

router.post('/', Controller.signin)
router.get('/', verifyUser, Controller.findOne)

module.exports = router;
