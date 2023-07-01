const path = require('path');
const fetch = require('node-fetch');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  return next();
};

cookieController.getCookies = (req, res, next) => {
  return next();
};

cookieController.deleteSessionCookie = (req, res, next) => {
  return next();
};
module.exports = cookieController;
