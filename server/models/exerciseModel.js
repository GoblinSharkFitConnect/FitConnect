const db = require('../configs/db.config');

class Exercise {
  constructor(name, goal, day) {
    this.name = name;
    this.goal = goal;
    this.day = day;
  }

  // creating the Exercise
  async createExercise() {
    const query = {
      text: 'INSERT INTO Exercise(name, goal, day) VALUES ($1, $2, $3) RETURNING *',
      values: [this.name, , this.goal, this.day],
    };

    try {
      const response = await db.query(query);
      console.log('Exercise created successfully');
      return response.rows[0];
    } catch (error) {
      console.error('Error creating the Exercise', error);
      return error;
    }
  }
  // Deleting an Exercise
  static async deleteExercise(id) {
    if (!id) {
      return null;
    }
    const query = {
      text: 'DELETE FROM Exercise WHERE id = $1',
      values: [id],
    };
    try {
      const result = await db.query(query);
      console.log('Delete Exercise results', result.rows[0]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error deleting Exercise:', error);
      return error;
    }
  }
  // updating the Exercise in the DB
  static async updateExercise(id, name, goal, day) {
    // need to figure out how the exercise form is submitted here
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
    //   // return the found exercise from the database
    //   return response.rows[0];
    // } catch (error) {
    //   console.error(error);
    //   return error;
    // }
  }
}

module.exports = Exercise;
