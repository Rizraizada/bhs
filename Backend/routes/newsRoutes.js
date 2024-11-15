// Backend/routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const { getNews, addNews, upload } = require('../controllers/newsController');

// GET all news entries
router.get('/news', getNews);

// POST a new news entry with an image upload
router.post('/news', upload.single('image'), addNews);

module.exports = router;
