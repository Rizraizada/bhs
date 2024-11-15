// const ClassModel = require('../models/classModel');
// const db = require('./Backend/db');


// const createClass = async (req, res) => {
//   const { className } = req.body;
//   try {
//     const newClass = await ClassModel.createClass(className);
//     res.status(201).send({ message: 'Class created successfully', newClass });
//   } catch (err) {
//     res.status(500).send({ message: 'Error creating class', error: err });
//   }
// };

// const getAllClasses = async (req, res) => {
//   try {
//     const classes = await ClassModel.getAllClasses();
//     res.status(200).send(classes);
//   } catch (err) {
//     res.status(500).send({ message: 'Error fetching classes', error: err });
//   }
// };

// module.exports = { createClass, getAllClasses };
