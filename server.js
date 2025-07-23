const express = require('express');
const cors = require('cors');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const parentRouter = require('./routes/parentRouter')
const classRouter = require('./routes/classRouter');
const subjectRouter = require('./routes/subjectRouter');
 // Assuming you have a subjectRouter

const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/schooly', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Correct routes
app.use('/', studentRouter);
app.use('/', teacherRouter);
app.use('/', parentRouter);
app.use('/', classRouter);
app.use('/', subjectRouter); // Add subjectRouter

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
