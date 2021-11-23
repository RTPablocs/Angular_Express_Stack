const passport = require('passport')
const LocalStrat = require('passport-local').Strategy
const models = require('../models')
const {Op} = require('sequelize')
const passportJWT = require("passport-jwt")
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

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
        return cb(null, user.toJSON(), {message: 'Login Ok'})
    }).catch(err => cb(err))
}))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
},
function (jwtPayload, cb) {

    return models.user.findOne({where: {id: jwtPayload.id}})
        .then(user => {
            return cb(null, user)
        })
        .catch(err => {
            return cb(err)
        })
}
))