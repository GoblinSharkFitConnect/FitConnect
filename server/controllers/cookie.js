const path = require('path');
const fetch = require('node-fetch');

const cookieController = {};

/*
==================
 Cookie Controller
==================

Responsible for handling user's browser cookies
-setSSIDCookie
-getCookies
-deleteSSIDCookie
*/

cookieController.setSSIDCookie = (req, res, next) => {
  return next();
};

cookieController.getCookies = (req, res, next) => {
  return next();
};

cookieController.deleteSSIDCookie = (req, res, next) => {
  return next();
};
module.exports = cookieController;
