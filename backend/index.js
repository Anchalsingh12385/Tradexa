require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});