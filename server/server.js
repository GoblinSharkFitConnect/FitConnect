const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

/* 
===================
  Router Imports:
===================
apiRouter - router for general website functionality (ie. login/logout/signup)
userRouter - router to handle requests that involve getting/posting user related data 
*/

const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');

const app = express();

const PORT = 3000;

// express uses
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// user route handling
app.use('/api/user', userRouter, (req, res) => {
  return res.sendStatus(200);
});

// main api routing
app.use('/api', apiRouter, (req, res) => {
  return res.sendStatus(200);
});

app.use('/', (req, res) => {
  return res.sendStatus(200);
});

// catch-all:
app.use((req, res) => res.status(404).send('incorrect URL'));

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  // overwrite the default error with the error generated from middleware
  const errorObj = Object.assign({}, defaultErr, err);

  return res.status(errorObj.status).json(errorObj.message);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
