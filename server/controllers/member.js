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
  const {username, password, firstname, lastname} = req.body;
  if (!username || !password || !firstname || !lastname) {
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
    // creates the user through the user model
    const member = new Member(username, password, firstname, lastname);
    // member.save will return the user's info (need to get the serial'd ID) from the DB save
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

memberController.checkCredentials = async (req, res, next) => {
  let {username, password} = req.body;
  // need to get the user ID of the user if one exists in the DB
  try {
    const member = await Member.findByUsername(username);
    console.log(member);
    if (member) {
      const passwordCheck = await Member.comparePassword(
        password,
        member.password
      );
      if (passwordCheck) {
        console.log('Password matches');
        // set the ID to the locals so we can check for an active session in middleware
        res.locals.userId = member.id;
        return next();
      } else {
        console.log('Password was incorrect');
        return next({
          log: 'Failed credentials',
          status: 400,
          message: {err: 'Failed matching user credentials'},
        });
      }
    } else {
      return next({
        log: 'Failed credentials',
        status: 400,
        message: {err: 'Failed matching user credentials'},
      });
    }
  } catch (error) {
    return next({
      log: error,
      status: 400,
      message: {
        err: 'Error in checkCredentials method of the memberController',
      },
    });
  }
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
