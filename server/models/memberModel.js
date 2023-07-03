const db = require('../configs/db.config');
const bcrypt = require('bcryptjs');
const qs = require('../queries/db.query')

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
      // 'INSERT INTO member(username, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *',
      text: qs.createMember,
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
      // 'SELECT * FROM member WHERE username = $1',
      text: qs.getMember,
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
