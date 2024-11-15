const express = require('express');
const { createClass, getAllClasses } = require('../controllers/classController');
const router = express.Router();

router.post('/', createClass);
router.get('/', getAllClasses);

module.exports = router;
