const db = require('../configs/db.config');
const dbQuery = require('../queries/db.query');

class Session {
  constructor(ssid, userId) {
    this.ssid = ssid;
    this.userId = userId;
  }

  // starting the session when the user logs in or signs up
  static async startSession(ssid, userId) {
    const query = {
      text: 'INSERT INTO session(ssid, member_id) VALUES ($1, $2) RETURNING *',
      values: [ssid, userId],
    };

    try {
      const response = await db.query(query);
      console.log('Session started successfully');
      return response.rows[0];
    } catch (error) {
      console.error('Error starting the session', error);
      return error;
    }
  }
  // Deleting sessions when the user logs out
  static async deleteSession(userId) {
    const query = {
      text: 'DELETE FROM session WHERE member_id = $1',
      values: [userId],
    };

    try {
      const result = await db.query(query);
      console.log('Delete session results', result.rows[0]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding session:', error);
      return error;
    }
  }
  // verifies the session given the SSID
  static async verifySession(ssid) {
    if (!ssid) {
      console.error('Error trying to verify session, no ssid');
      return null;
    }
    // execute a table join on members and SSID to return the member information
    const query = {
      text: `
        SELECT m.* FROM member m
        LEFT OUTER JOIN session s ON s.member_id = m.id
        WHERE s.ssid = $1;
      `,
      values: [ssid],
    };

    try {
      const response = await db.query(query);
      if (!response.rows[0]) {
        console.error('No session was found in the DB');
      }
      // return the found session from the database
      return response.rows[0];
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Session;
