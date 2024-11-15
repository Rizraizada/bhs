const pool = require('../db');

const Gallery = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM gallery';
    pool.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  add: (imagePath, title, description, category, callback) => {
    const sql = 'INSERT INTO gallery (image, title, description, category) VALUES (?, ?, ?, ?)';
    pool.query(sql, [imagePath, title, description, category], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },
};

module.exports = Gallery;
