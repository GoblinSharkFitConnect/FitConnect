const path = require('path');

const sessionController = {};

/*
==================
Session Controller
==================

Responsible for handling user session with the database
and verifying the existing session is active in the DB
-startSession
-deleteSesssion
-verifySession
*/

/**
 *  Start Session
 * ---------------
 * Starts a session by saving it to the postgres DB
 */

sessionController.startSession = (req, res, next) => {
  const ssid = res.locals.ssid;
  if (!ssid)
    return next({
      log: 'Error, no SSID',
      status: 400,
      message: {
        err: 'Error in the startSession method of the sessionController',
      },
    });
  try {
  } catch (error) {}

  return next();
};

/**
 * Delete Session
 * --------------
 * Deletes the active session from the DB as long
 * as the user has an active session in their cookies
 */
sessionController.deleteSession = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

/**
 * Verify Session
 * --------------
 * Verifies that the current user session read
 * from the user's ssid cookie exists in the DB
 */
sessionController.verifySession = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

module.exports = sessionController;
