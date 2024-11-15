// const pool = require('../config');

// class SectionModel {
//   static async createSection(sectionName, classId) {
//     const [rows] = await pool.execute(
//       'INSERT INTO sections (section_name, class_id) VALUES (?, ?)',
//       [sectionName, classId]
//     );
//     return rows;
//   }

//   static async getAllSections() {
//     const [rows] = await pool.execute('SELECT * FROM sections');
//     return rows;
//   }

//   static async getSectionsByClassId(classId) {
//     const [rows] = await pool.execute('SELECT * FROM sections WHERE class_id = ?', [classId]);
//     return rows;
//   }

//   static async updateSection(id, sectionName) {
//     const [rows] = await pool.execute(
//       'UPDATE sections SET section_name = ? WHERE id = ?',
//       [sectionName, id]
//     );
//     return rows;
//   }

//   static async deleteSection(id) {
//     const [rows] = await pool.execute('DELETE FROM sections WHERE id = ?', [id]);
//     return rows;
//   }
// }

// module.exports = SectionModel;
