const pool = require('../db');
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Backend/uploads/'); // Path to store uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Get all gallery images
const getGallery = (req, res) => {
  const sql = 'SELECT * FROM gallery';
  pool.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch gallery images' });
    }
    res.json(results);
  });
};

// Add a new gallery image
const addGalleryImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  const imagePath = `/uploads/${req.file.filename}`;
  const { title, description } = req.body;

  const sql = 'INSERT INTO gallery (image, title, description) VALUES (?, ?, ?)';
  pool.query(sql, [imagePath, title, description], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add image' });
    }
    res.status(201).json({ message: 'Image added successfully', data: result });
  });
};

module.exports = { getGallery, addGalleryImage, upload };
