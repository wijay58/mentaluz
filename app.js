const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

var db = require('./routes/db');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const agentsRouter = require('./routes/agents');
const tasksRouter = require('./routes/tasks');
const paymentsRouter = require('./routes/payments');
const favoritesRouter = require('./routes/favorites');
const specialistsRouter = require('./routes/specialists');
const questionsRouter = require('./routes/questions');

const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(allowCrossDomain);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/agents', agentsRouter);
app.use('/tasks', tasksRouter);
app.use('/favorites', favoritesRouter);
app.use('/payments', paymentsRouter);
app.use('/specialists', specialistsRouter);
app.use('/questions', questionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  })
});


module.exports = app;
