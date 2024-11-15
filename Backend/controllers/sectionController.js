const SectionModel = require('../models/sectionModel');
const db = require('./Backend/db');


const createSection = async (req, res) => {
  const { sectionName, classId } = req.body;
  try {
    const newSection = await SectionModel.createSection(sectionName, classId);
    res.status(201).send({ message: 'Section created successfully', newSection });
  } catch (err) {
    res.status(500).send({ message: 'Error creating section', error: err });
  }
};

const getSectionsByClassId = async (req, res) => {
  const { classId } = req.params;
  try {
    const sections = await SectionModel.getSectionsByClassId(classId);
    res.status(200).send(sections);
  } catch (err) {
    res.status(500).send({ message: 'Error fetching sections', error: err });
  }
};

module.exports = { createSection, getSectionsByClassId };
