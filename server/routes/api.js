const express = require('express');
const router = express.Router();

/*
===================
Login/Logout/Signup 
===================
*/

/**
 * Logging the user in
 * - check credentials to verify password matches
 * - set an SSID cookie in the browser
 * - start the session, save the session to the DB
 */
router.post(
  '/login',
  userController.checkCredentials,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res, next) => {
    //TODO: Need to do this still
    res.sendStatus(200);
  }
);

/**
 * Logging out the user
 * - delete the session from the DB
 * - delete the cookie from the browser for cleanup
 */
router.delete(
  '/logout',
  sessionController.deleteSession,
  cookieController.deleteSessionCookie,
  (req, res, next) => {
    //TODO: Need to do this still
    res.sendStatus(200);
  }
);

/**
 * Signing the user up
 * -Create the user and save them to the DB
 * -Double check the users credentials (maybe extraneous?)
 * -Set the SSID cookie in the browser
 * -Save the session in the database
 */

router.post(
  '/signup',
  userController.createUser,
  userController.checkCredentials,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res, next) => {
    //TODO: Need to do this still
    res.sendStatus(200);
  }
);

/*
===================
  Get Information
===================
-Workout
-Exercise
*/

// route to get information about a workout
router.get('/workout', dataController.getWorkout, (req, res, next) => {
  res.sendStatus(200);
});

// route to get information about an exercise
router.get('/exercise', dataController.getExercise, (req, res, next) => {
  res.sendStatus(200);
});

/*
===================
   Creating Stuff
===================
-Workout
-Exercise
*/

// route to create a workout
router.post('/workout', dataController.createWorkout, (req, res, next) => {
  res.sendStatus(200);
});

// route to create an exercise
router.post('/exercise', dataController.createExercise, (req, res, next) => {
  res.sendStatus(200);
});

/*
===================
   Deleting Stuff
===================
-Workout
-Exercise
*/

// route to delete a workout
router.delete('/workout', dataController.deleteWorkout, (req, res, next) => {
  res.sendStatus(200);
});

// route to delete an exercise
router.delete('/exercise', dataController.deleteExercise, (req, res, next) => {
  res.sendStatus(200);
});

/*
===================
  Updating Stuff
===================
-Workout
-Exercise
*/
// route to update a workout
router.patch('/workout', dataController.updateWorkout, (req, res, next) => {
  res.sendStatus(200);
});

// route to update an exercise
router.patch('/exercise', dataController.updateExercise, (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
