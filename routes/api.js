var express = require('express')
var router = express.Router()
var RegistrationRequest = require('../app/requests/RegistrationRequest')
const UserController = require('../app/controller/UserController')
router.get('/',function (req, res){
    res.send('ok working api')
})
router.post('/registration', RegistrationRequest, UserController.registration)
module.exports = router
