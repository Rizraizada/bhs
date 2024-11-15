// const pool = require('../config');

// class ClassModel {
//   static async createClass(className) {
//     const [rows] = await pool.execute(
//       'INSERT INTO classes (class_name) VALUES (?)',
//       [className]
//     );
//     return rows;
//   }

//   static async getAllClasses() {
//     const [rows] = await pool.execute('SELECT * FROM classes');
//     return rows;
//   }

//   static async getClassById(id) {
//     const [rows] = await pool.execute('SELECT * FROM classes WHERE id = ?', [id]);
//     return rows[0];
//   }

//   static async updateClass(id, className) {
//     const [rows] = await pool.execute(
//       'UPDATE classes SET class_name = ? WHERE id = ?',
//       [className, id]
//     );
//     return rows;
//   }

//   static async deleteClass(id) {
//     const [rows] = await pool.execute('DELETE FROM classes WHERE id = ?', [id]);
//     return rows;
//   }
// }

// module.exports = ClassModel;
