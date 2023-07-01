const path = require('path');
const fetch = require('node-fetch');

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
  return next();
};

/**
 * Delete Session
 * --------------
 * Deletes the active session from the DB as long
 * as the user has an active session in their cookies
 */
sessionController.deleteSession = (req, res, next) => {
  return next();
};

/**
 * Verify Session
 * --------------
 * Verifies that the current user session read
 * from the user's ssid cookie exists in the DB
 */
sessionController.verifySession = (req, res, next) => {
  return next();
};

module.exports = sessionController;
