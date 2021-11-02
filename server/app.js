// Require group
const express = require('express');
const createError = require('http-errors')
const path = require('path')
const logger = require('morgan')
const indexRouting = require('./routes/index.js')
const userRouting = require('./routes/users.js')
const hourRouting = require('./routes/hours.js')
const cors = require('cors')
require('./auth/passport')
const authRouting = require('./routes/auth')
const passport = require('passport')
//Declaration group
const app = express()
const port = 3000


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use('/styles', express.static(path.join(__dirname, 'styles')))

app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb' }));
app.use(passport.initialize())
app.disable('etag')

app.use('/', indexRouting)
app.use('/users', userRouting)
app.use('/hours', hourRouting)
app.use('/auth', authRouting)

// Not found error handler
app.use(function (req, res, next) {
    next(createError(404))
})


// Render Errors with pug
app.use(function (err, req, res, next) {
    res.locals.err = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}


    res.status(err.status || 500);
    res.render('error');
})


app.listen(port, () => {
    console.log('ExpressJS is running at port', port);
});
