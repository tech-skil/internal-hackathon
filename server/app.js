require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/examples', exampleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
