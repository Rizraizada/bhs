const express = require('express');
const cors = require('cors');
const next = require('next');
const path = require('path');
const db = require('./Backend/db');
const sliderRoutes = require('./Backend/routes/sliderRoutes');
const awardRoutes = require('./Backend/routes/awardRoutes');
const activitiesRoutes = require('./Backend/routes/activitiesRoutes');
const galleryRoutes = require('./Backend/routes/galleryRoutes');
const directorRoutes = require('./Backend/routes/directorRoutes');
const newsRoutes = require('./Backend/routes/newsRoutes');
const authRoutes = require('./Backend/routes/authRoutes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Initialize Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Initialize Express server
const server = express();
const PORT = process.env.PORT || 3000;

// Middleware
server.use(cors());  // Allow Cross-Origin Requests
server.use(express.json());  // Parse JSON bodies
server.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded bodies
server.use(cookieParser());  // Parse cookies

// Serve static files from 'uploads' folder
server.use('/uploads', express.static(path.join(__dirname, 'Backend', 'uploads')));

// API Routes
server.use('/api/slider', sliderRoutes);
server.use('/api/award', awardRoutes);
server.use('/api/activities', activitiesRoutes);
server.use('/api/gallery', galleryRoutes);
server.use('/api/director', directorRoutes);
server.use('/api/news', newsRoutes);
server.use('/api/auth', authRoutes);

// Database Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  } else {
    console.log('Connected to MySQL database');
    connection.release();
  }
});

// Next.js handler
app.prepare()
  .then(() => {
    server.all('*', (req, res) => handle(req, res));
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} in ${dev ? 'development' : 'production'} mode`);
    });
  })
  .catch(err => {
    console.error('Error starting server:', err.stack);
    process.exit(1);
  });
