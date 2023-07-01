const Member = require('../models/memberModel');

const memberController = {};

/*
==================
Member Controller
==================

Responsible for handling user data that goes to the DB
or that comes from the DB
-createUser
-checkCredentials
-updateUser
-deleteUser

User Data in DB:
-id        SERIAL PRIMARY KEY
-username  VARCHAR(255)
-password  VARCHAR(255)
-firstname VARCHAR(255)
-lastname  VARCHAR(255)
*/

memberController.createMember = async (req, res, next) => {
  //TODO: Double check key/values being sent on body from frontend
  const {username, password, firstName, lastName} = req.body;
  if (!username || !password || !firstName || !lastName) {
    //TODO: Is this supposed to return an error w/ 400
    //TODO: or maybe res.send something back saying invalid credentials?
    return next({
      log: 'TypeError: Missing field for user signup',
      status: 400,
      message: {
        err: 'Error in createUser method in the memberController - missing fields',
      },
    });
  }
  // Save the user to the database
  try {
    //TODO: IMPORT USER MODEL ONCE JEREMY FINISHES
    // creates the user through the user model
    const member = new Member(username, password, firstName, lastName);
    // user.save will return the user's info (need to get the serial'd ID) from the DB save
    const memberInfo = await member.save();
    // set the userInfo to the res.locals to pass to other middleware (for session stuff)
    res.locals.memberInfo = memberInfo;
    return next();
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error trying to create the user in createUser method of memberController',
      },
    });
  }
};

memberController.checkCredentials = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

memberController.updateUser = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};

memberController.deleteUser = (req, res, next) => {
  //TODO: Need to do this still
  return next();
};
module.exports = memberController;
