const db = require('../configs/db.config');
const bcrypt = require('bcryptjs');

class Member {
  constructor(username, password, firstName, lastName) {
    this.username = username;
    this.password = password.toString(); // passwords must be strings
    this.lastName = lastName;
    this.firstName = firstName;
  }

  async save() {
    // hash the password through bcrypt
    const hashedPassword = await bcrypt.hash(this.password, 10);
    // insert the username, password (hashed), first name and last name into the DB
    const query = {
      text: 'INSERT INTO member(username, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *',
      values: [this.username, hashedPassword, this.firstName, this.lastName],
    };

    // run the query
    try {
      const response = await db.query(query);
      console.log('Member saved successfully');
      return response.rows[0];
      // catch any errors
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
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  }

  static async comparePassword(candidatePassword, password) {
    console.log(candidatePassword, password);
    return bcrypt.compare(candidatePassword, password);
  }
}

module.exports = Member;
