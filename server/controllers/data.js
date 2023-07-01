const path = require('path');
const fetch = require('node-fetch');

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
dataController.createWorkout = (req, res, next) => {
  //TODO: Need to do this still
  return next();
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
