// Backend/controllers/attendanceController.js

const AttendanceModel = require('../models/attendanceModel');
const pool = require('../components/config/apiConfig');  // Correct path for backend

const markAttendance = async (req, res) => {
  const { date, status, classId, sectionId, subjectId } = req.body;
  const userId = req.user.id;
  try {
    const newAttendance = await AttendanceModel.markAttendance(userId, date, status, classId, sectionId, subjectId);
    res.status(201).send({ message: 'Attendance marked successfully', newAttendance });
  } catch (err) {
    res.status(500).send({ message: 'Error marking attendance', error: err });
  }
};

const getAttendance = async (req, res) => {
  const { date, classId, sectionId } = req.query;
  try {
    const attendance = await AttendanceModel.getAttendanceByDate(date, classId, sectionId);
    res.status(200).send(attendance);
  } catch (err) {
    res.status(500).send({ message: 'Error fetching attendance', error: err });
  }
};

module.exports = { markAttendance, getAttendance };
