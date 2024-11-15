const pool = require('../db'); // Import the pool from db.js
const Award = require('../models/Award'); // Import the Award model
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Get all awards
const getAwards = (req, res) => {
  Award.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch awards from database' });
    }
    res.json(results); // Return the full results
  });
};

// Add a new award
const addAward = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  const imagePath = `/uploads/${req.file.filename}`;
  const { title, subtitle } = req.body; // Get title and subtitle from request body

  Award.add(imagePath, title, subtitle, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding award', error: err });
    }
    return res.status(201).json({ message: 'Award added successfully', data: result });
  });
};

module.exports = {
  getAwards,
  addAward,
  upload,
};
