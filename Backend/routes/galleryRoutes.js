// Backend/routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const { getGallery, addGalleryImage, upload } = require('../controllers/galleryController');

// GET all gallery images
router.get('/', getGallery);

// POST a new gallery image
router.post('/', upload.single('image'), addGalleryImage);

module.exports = router;
