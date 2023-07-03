const path = require('path');
const Workout = require('../models/workoutModel');

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
dataController.getWorkout = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

// method to get exercise from the database
dataController.getExercise = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

// method to create a workout in the database
dataController.createWorkout = async (req, res, next) => {
  const {name, goal, complete, day} = req.body;
  console.log('Create workout called', req.body);
  if (!name || !goal || !day || !req.body.hasOwnProperty('complete')) {
    return next({
      log: 'Missing field for the create workout',
      status: 400,
      message: {err: 'Error in the createWorkout method of the dataController'},
    });
  }
  console.log('Creating a new workout..');
  const newWorkout = new Workout(name, goal, complete, day);
  try {
    newWorkout.createWorkout();
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
  //TODO: Need to do this still
  return next();
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
