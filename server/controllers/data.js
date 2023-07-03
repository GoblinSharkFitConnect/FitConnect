const path = require('path');
const dbQuery = require('../queries/db.query');

const Workout = require('../models/workoutModel');
const Exercise = require('../models/exerciseModel');

const dataController = {};

/*
==================
  Data Controller
==================

Responsible for handling most data that goes to the DB
-Workout data
  Get, Create, Update, Delete
-Exercise Data
  Get, Create, Update, Delete
*/

// method to get workout from  the database
dataController.getWorkout = async (req, res, next) => {
  // get the member ID
  const {member_id: memberId} = req.query;
  if (!memberId)
    return next({
      log: 'No member ID provided',
      status: 400,
      message: {
        err: 'Error in getWorkout method of dataController, on memberID',
      },
    });
  try {
    const workouts = await Workout.getWorkout(memberId);
    res.locals = workouts;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the getWorkout method of the dataController method',
      },
    });
  }
};

// method to get exercise from the database
dataController.getExercise = async (req, res, next) => {
  const {workout_id: workoutId} = req.query;
  console.log(workoutId);
  if (!workoutId)
    return next({
      log: 'No member ID provided',
      status: 400,
      message: {
        err: 'Error in getExercise method of dataController, on workoutId',
      },
    });
  try {
    const exercises = await Exercise.getExercise(workoutId);
    res.locals = exercises;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the getExercise method of the dataController method',
      },
    });
  }
};

// method to create a workout in the database
dataController.createWorkout = async (req, res, next) => {
  // get the name, goal, complete and day values from the body from the form
  const {name, goal, complete, day} = req.body;

  // check to make sure the fields are not null
  if (!name || !goal || !day || !req.body.hasOwnProperty('complete')) {
    return next({
      log: 'Missing field for the create workout',
      status: 400,
      message: {err: 'Error in the createWorkout method of the dataController'},
    });
  }
  console.log('Creating a new workout..');
  // create a new workout passing in name,goal,complete, and day fields
  const newWorkout = new Workout(name, goal, complete, day);
  try {
    // invoke the createworkout method on our new workout
    newWorkout.createWorkout();
    // logging that it was created successfully so we know
    console.log('New workout created succesfully: ', newWorkout);
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in the createWorkout method of the dataController trying to create a workout',
      },
    });
  }
};

// method to create an exercise in the database
dataController.createExercise = (req, res, next) => {
  const {name, sets, reps, rest} = req.body;
  //workout_id
  if (!name || !sets || !reps || !rest) {
    return next({
      log: 'Fields are missing for some of the body data in createExercise',
      status: 400,
      message: {
        err: 'Missing some field in createExercise method on dataController',
      },
    });
  }

  const newExercise = new Exercise(name, sets, reps, rest);

  try {
    newExercise.createExercise();
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'error trying to set the new exercise to the DB in createExercise method on the controller',
      },
    });
  }
};

dataController.joinExerciseWorkout = (req, res, next) => {
  const {workout_id: workoutId} = req.body;
  if (!workoutId) return next();

  try {
  } catch (error) {}
};

// method to delete a workout from the database
dataController.deleteWorkout = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

// method to delete an exercise from the database
dataController.deleteExercise = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

// method to update a workout in the databse
dataController.updateWorkout = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

// method to update an exercise in the database
dataController.updateExercise = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

module.exports = dataController;
