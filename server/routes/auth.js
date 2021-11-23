const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');


router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(err)
        console.log(user);
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            const r = {}
            r.token = jwt.sign(user, 'your_jwt_secret');
            return res.json(r);
        });
    })(req, res);
});

module.exports = router