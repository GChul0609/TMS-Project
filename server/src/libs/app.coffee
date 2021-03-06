express = require('express')
path = require('path')
logger = require('morgan')
bodyParser = require('body-parser')
index = require('./../routes/index')

app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', index)

app.use((req, res, next)->
   err = new Error('Not Found')
   err.status = 404
   next(err)
)

app.use((err, req, res, next)->
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') is 'development' ? err : {}
  res.status(err.status or 500)
  res.render('error')
);

module.exports = app;
