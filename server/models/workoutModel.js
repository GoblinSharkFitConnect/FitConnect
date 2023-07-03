const db = require('../configs/db.config');
const dbQuery = require('../queries/db.query');

class Workout {
  constructor(name, goal, complete, day) {
    this.name = name;
    this.goal = goal;
    this.day = day;
    this.complete = complete || false;
  }

  static async getWorkout(memberId) {
    try {
      const query = {
        text: dbQuery.getAllWorkouts,
        values: [memberId],
      };
      const response = await db.query(query);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  // creating the workout
  async createWorkout() {
    // query for creating a workout
    const query = {
      text: dbQuery.createWorkout,
      values: [this.name, this.goal, this.day, this.complete],
    };

    try {
      // try inserting the workout into the DB
      const response = await db.query(query);
      console.log('Workout created successfully');
      // *** hardcoding in member id for now
      Workout.subscribeMemberToWorkout(8, response.rows[0].id);
      return response.rows[0];
    } catch (error) {
      console.error('Error creating the workout', error);
      return error;
    }
  }
  // Deleting a workout based on the ID of the workout
  static async deleteWorkout(id) {
    // if no ID return null
    if (!id) {
      return null;
    }
    // query for the deletion
    const query = {
      text: dbQuery.deleteWorkout,
      values: [id],
    };
    try {
      // delete the workout
      const result = await db.query(query);
      console.log('Delete workout results', result.rows[0]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error deleting workout:', error);
      return error;
    }
  }

  static async subscribeMemberToWorkout(member_id, workout_id) {
    const query = {
      text: dbQuery.createMemberWorkout,
      values: [member_id, workout_id],
    };

    try {
      // try inserting the workout into the DB
      const response = await db.query(query);
      console.log('Workout join created successfully');
      return response.rows[0];
    } catch (error) {
      console.error('Error creating the workout join', error);
      return error;
    }
  }
  // updating the workout in the DB
  static async updateWorkout(id, name, goal, day) {
    // need to figure out how the form submission works here
    return next(); // returning next for now
    // if (!id) {
    //   console.error('Error trying to verify session, no ssid');
    //   return null;
    // }
  }
}

module.exports = Workout;
