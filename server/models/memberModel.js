// const db = require('../db/dbConnect');
const bcrypt = require('bcryptjs');

class Member {
  constructor(username, password, firstName, lastName) {
    this.username = username;
    this.password = password;
    this.lastName = lastName;
    this.firstName = firstName;
  }

  async save() {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    const query = {
      text: 'INSERT INTO member(username, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
      values: [this.username, hashedPassword, this.firstName, this.lastName],
    };

    try {
      const response = await db.query(query);
      console.log('Member saved successfully');
      return response.rows[0];
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }

  static async findByUsername(username) {
    const query = {
      text: 'SELECT * FROM member WHERE username = $1',
      values: [username],
    };

    try {
      const result = await db.query(query);
      console.log('RESULTS', result.rows[0]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  }

  async comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

module.exports = Member;
