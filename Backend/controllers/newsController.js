const pool = require('../db');
const News = require('../models/News');
const multer = require('multer');
const path = require('path');

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

const getNews = (req, res) => {
  News.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch activities from database' });
    }
    res.json(results);
  });
};

const addNews = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  const imagePath = `/uploads/${req.file.filename}`;
  const { title, image, description } = req.body;

  News.add(image, title, description, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding activity', error: err });
    }
    return res.status(201).json({ message: 'Activity added successfully', data: result });
  });
};

module.exports = {
  getNews,
  addNews,
  upload,
};
