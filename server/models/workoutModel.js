const db = require('../configs/db.config');

class Workout {
  constructor(name, goal, day) {
    this.name = name;
    this.goal = goal;
    this.day = day;
  }

  // starting the session when the user logs in or signs up
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
  // Deleting sessions when the user logs out
  static async deleteWorkout(id) {
    // const query = {
    //   text: 'DELETE FROM session WHERE member_id = $1',
    //   values: [userId],
    // };
    // try {
    //   const result = await db.query(query);
    //   console.log('Delete session results', result.rows[0]);
    //   return result.rows[0] || null;
    // } catch (error) {
    //   console.error('Error finding session:', error);
    //   return error;
    // }
  }
  // verifies the session given the SSID
  static async updateWorkout(id) {
    //   if (!ssid) {
    //     console.error('Error trying to verify session, no ssid');
    //     return null;
    //   }
    //   // execute a table join on members and SSID to return the member information
    //   const query = {
    //     text: `
    //       SELECT m.* FROM member m
    //       LEFT OUTER JOIN session s ON s.user_id = ug.id
    //       WHERE s.ssid = $1;
    //     `,
    //     values: [ssid],
    //   };
    //   try {
    //     const response = await db.query(query);
    //     if (!response.rows[0]) {
    //       console.error('No session was found in the DB');
    //     }
    //     // return the found session from the database
    //     return response.rows[0];
    //   } catch (error) {
    //     console.error(error);
    //     return error;
    //   }
  }
}

module.exports = Workout;
