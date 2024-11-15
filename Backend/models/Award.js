const pool = require('../db');

const Award = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM awards';
    pool.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
  
  add: (imagePath, title, subtitle, callback) => {
    const sql = 'INSERT INTO awards (image, title, subtitle) VALUES (?, ?, ?)';
    pool.query(sql, [imagePath, title, subtitle], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },
};

module.exports = Award;
