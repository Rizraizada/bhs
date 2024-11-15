const pool = require('../db');

const User = {
  register: (username, password, full_name, role, callback) => {
    const sql = 'INSERT INTO users (username, password, full_name, role) VALUES (?, ?, ?, ?)';
    pool.query(sql, [username, password, full_name, role], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    pool.query(sql, [username], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);
      callback(null, results[0]);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);
      callback(null, results[0]);
    });
  }
};

module.exports = User;
