const express = require('express');
const router = express.Router();
const { getSliderImages, addSlider, editSlider, deleteSlider, upload } = require('../controllers/sliderController');

// Route to get all slider images
router.get('/sliders', getSliderImages);

// Route to add a new slider image (using multer for file upload)
router.post('/sliders', upload.single('image'), addSlider);  // Change 'image' to match your form field name

// Route to edit an existing slider image
router.put('/sliders',upload.single('image'),editSlider);

// Route to delete a slider image
router.delete('/sliders/:id', deleteSlider);

module.exports = router;
