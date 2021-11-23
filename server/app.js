// Require group
const express = require('express');
const createError = require('http-errors')
const path = require('path')
const logger = require('morgan')
const indexRouting = require('./routes/index.js')
const userRouting = require('./routes/users.js')
const cors = require('cors')
require('./auth/passport')
const authRouting = require('./routes/auth')
const passport = require('passport')
//Declaration group
const app = express()
const port = 3000

const promBundle = require("express-prom-bundle");
// Add the options to the prometheus middleware most option are for http_request_duration_seconds histogram metric
const metricsMiddleware = promBundle({
 includeMethod: true, 
 includePath: true, 
 includeStatusCode: true, 
 includeUp: true,
 customLabels: {project_name: 'hello_world', project_type: 'test_metrics_labels'},
 promClient: {
 collectDefaultMetrics: {
 }
 }
});
// add the prometheus middleware to all routes
app.use(metricsMiddleware)

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
app.use('/users', passport.authenticate('jwt', {session: false}), userRouting)
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
