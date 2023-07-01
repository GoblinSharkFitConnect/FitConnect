const {v4: uuid} = require('uuid');

const HOUR_IN_MILLSECONDS = 3600000;
const defaultCookieOptions = {
  maxAge: 1 * HOUR_IN_MILLSECONDS,
  httpOnly: true,
  secure: true,
};

const cookieController = {};

/*
==================
 Cookie Controller
==================

Responsible for handling user's browser cookies
-setSSIDCookie
-getCookies
-deleteSSIDCookie

Cookies by default expire after one hour
*/

cookieController.setSSIDCookie = (req, res, next) => {
  try {
    // save the SSID to a uuid for a randomly generated session string
    const ssid = uuid();
    // save it to locals so we can reference in the startSession
    res.locals.ssid = ssid;
    // saving the cookie to the user's browser
    res.cookie('ssid', ssid.toString(), defaultCookieOptions);
    return next();
  } catch (error) {
    return next({
      log: 'Error setting cookies to the browser',
      status: 400,
      message: {
        err: 'Error in the setSSIDCookie method of the cookieController',
      },
    });
  }
};

cookieController.getCookies = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

cookieController.deleteSSIDCookie = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};
module.exports = cookieController;
