const Response = require('../../vendor/Response')
const ErrorHandler = require('../../vendor/ErrorHandler')
const User = require('../../app/models/User')
class UserController {

    static registration = async (req, res) => {
        console.log(req.body);
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        User.addUser(newUser, (err, user) => {
            if (err || !user) {
                req.flash('oldData', req.body)
                req.flash('error', err)
                console.log(err);
                res.ErrorHandler(err,false,400,'failed')
            } else {
                res.Response(User,true,200,'success')
            }
        })
    }

     static view = async (req, res) => {

    }
}
module.exports = UserController
