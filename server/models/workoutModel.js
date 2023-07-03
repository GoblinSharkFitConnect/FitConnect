const db = require('../configs/db.config');
const qs = require('../queries/db.query')

const dbQuery = require('../queries/db.query');
class Workout {
  constructor(name, goal, complete, day) {
    this.name = name;
    this.goal = goal;
    this.day = day;
    this.complete = complete;
  }

  // creating the workout
  async createWorkout() {
    const query = {
<<<<<<< HEAD
      // 'INSERT INTO workout(name, goal, day) VALUES ($1, $2, $3) RETURNING *',
      text: qs.createWorkout,
      values: [this.name, , this.goal, this.day],
=======
      text: dbQuery.createWorkout,
      values: [this.name, this.goal, this.day, this.complete],
>>>>>>> dev
    };
    console.log('Query for creating a workout: ', query);
    try {
      const response = await db.query(query);
      console.log('Workout created successfully');
      return response.rows[0];
    } catch (error) {
      console.error('Error creating the workout', error);
      return error;
    }
  }
  // Deleting a workout based on the ID of the workout
  static async deleteWorkout(id) {
    if (!id) {
      return null;
    }
    const query = {
<<<<<<< HEAD
      // 'DELETE FROM workout WHERE id = $1',
      text: qs.deleteWorkout,
=======
      text: dbQuery.deleteWorkout,
>>>>>>> dev
      values: [id],
    };
    try {
      const result = await db.query(query);
      console.log('Delete workout results', result.rows[0]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error deleting workout:', error);
      return error;
    }
  }
  // updating the workout in the DB
  static async updateWorkout(id, name, goal, day) {
<<<<<<< HEAD
    if (!id) {
      console.error('Error trying to verify session, no ssid');
      return null;
    }
    // // execute a table join on members and SSID to return the member information
    const query = {
      // `SELECT m.* FROM member m LEFT OUTER JOIN session s ON s.user_id = ug.id WHERE s.ssid = $1;`,
      text: qs.verifySession,
      values: [ssid],
    };
=======
    // need to figure out how the form submission works here
    return next();
    // if (!id) {
    //   console.error('Error trying to verify session, no ssid');
    //   return null;
    // }
    // // // execute a table join on members and SSID to return the member information
    // const query = {
    //   text: `
    //     SELECT m.* FROM member m
    //     LEFT OUTER JOIN session s ON s.user_id = ug.id
    //     WHERE s.ssid = $1;
    //   `,
    //   values: [ssid],
    // };
>>>>>>> dev
    // try {
    //   const response = await db.query(query);
    //   if (!response.rows[0]) {
    //     console.error('No session was found in the DB');
    //   }
    //   // return the found session from the database
    //   return response.rows[0];
    // } catch (error) {
    //   console.error(error);
    //   return error;
    // }
  }
}

module.exports = Workout;
