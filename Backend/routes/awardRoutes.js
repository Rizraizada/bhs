// Backend/routes/awardRoutes.js
const express = require('express');
const router = express.Router();
const { getAwards, addAward, upload } = require('../controllers/awardController');

router.get('/awards', getAwards);

router.post('/awards', upload.single('image'), addAward);

module.exports = router;
