// // Backend/models/attendanceModel.js

// const pool = require('@/components/config');  // Correct path for backend

// class AttendanceModel {
//   static async markAttendance(userId, date, status, classId, sectionId, subjectId) {
//     const [rows] = await pool.execute(
//       'INSERT INTO attendance (user_id, date, status, class_id, section_id, subject_id) VALUES (?, ?, ?, ?, ?, ?)',
//       [userId, date, status, classId, sectionId, subjectId]
//     );
//     return rows;
//   }

//   static async getAttendanceByDate(date, classId, sectionId) {
//     const [rows] = await pool.execute(
//       'SELECT * FROM attendance WHERE date = ? AND class_id = ? AND section_id = ?',
//       [date, classId, sectionId]
//     );
//     return rows;
//   }

//   static async getAttendanceByUserId(userId) {
//     const [rows] = await pool.execute(
//       'SELECT * FROM attendance WHERE user_id = ?',
//       [userId]
//     );
//     return rows;
//   }

//   static async updateAttendance(id, status) {
//     const [rows] = await pool.execute(
//       'UPDATE attendance SET status = ? WHERE id = ?',
//       [status, id]
//     );
//     return rows;
//   }

//   static async deleteAttendance(id) {
//     const [rows] = await pool.execute('DELETE FROM attendance WHERE id = ?', [id]);
//     return rows;
//   }
// }

// module.exports = AttendanceModel;
