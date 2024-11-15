const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.post('/logout', authenticateToken, (req, res) => {
  res.clearCookie('authToken');
  res.json({ message: 'Logged out successfully' });
});

// Verify token route
router.get('/verifyToken', authenticateToken, (req, res) => {
  // If the token is valid, the user data will be attached to req.user by the authenticateToken middleware
  res.json(req.user);  // Sending user data as response
});

module.exports = router;
