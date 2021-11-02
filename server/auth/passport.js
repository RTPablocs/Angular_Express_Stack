const passport = require('passport')
const LocalStrat = require('passport-local').Strategy
const models = require('../models')
const {Op} = require('sequelize')

passport.use('local', new LocalStrat({
    usernameField: 'mail',
    passwordField: 'password'
}, async function (mail, password, cb) {
    return  await models.user.findOne({
        where: {
            [Op.and]: [
                {mail: mail},
                {password: password}
            ]
        }
    }).then(user => {
        console.log(user)
        if (!user) return cb(null, false, {message: 'Wrong parameter given, login impossible'})
        return cb(null, user, {message: 'Login Ok'})
    }).catch(err => cb(err))
}))