const db = require('../configs/db.config');

class Workout {
  constructor(name, goal, day) {
    this.name = name;
    this.goal = goal;
    this.day = day;
  }

  // creating the workout
  async createWorkout() {
    const query = {
      text: 'INSERT INTO workout(name, goal, day) VALUES ($1, $2, $3) RETURNING *',
      values: [this.name, , this.goal, this.day],
    };

    try {
      const response = await db.query(query);
      console.log('Workout created successfully');
      return response.rows[0];
    } catch (error) {
      console.error('Error creating the workout', error);
      return error;
    }
  }
  // Deleting a workout
  static async deleteWorkout(id) {
    if (!id) {
      return null;
    }
    const query = {
      text: 'DELETE FROM workout WHERE id = $1',
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
    // need to figure out how the form submission works here
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
