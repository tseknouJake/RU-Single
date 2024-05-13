const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv').config();
const User = require('./schema/User.js');  // Import your User model
const bodyParser = require('body-parser');
const localStorage = require('localStorage');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const uri = "mongodb+srv://OronPaz:" + process.env.MongoDBPassword +"@ru-single.63vvotl.mongodb.net/Users?retryWrites=true&w=majority&appName=ru-single"; // Replace this with your MongoDB URI
//Remember that after the .net/ you need to add the name of the database you want to connect to. In this case, the database is called Users

// Start the server on port 5050
app.listen(5050, () => {
  console.log('Server is running on port 5050');
})


//Connect to MongoDB database
mongoose.connect(uri).then(() => {
console.log('Connected to MongoDB');
}).catch((err) => {
console.log('Failed to connect to MongoDB', err);
});


// Define a route to get all users
app.get('/userData', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Define a route to create a new user
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email }); // Check if name or email already exists
    if (existingUser) {
      //console.error('Email already exists in database');
      return res.status(400).json({ error: 'Email already exists' }); // Respond with error if name or email already exists
    }
    // Store basic information in session/local storage or database
    localStorage.setItem('basicInfo', JSON.stringify({ name, email, password }));
    res.sendStatus(200); // Respond with success status
  } catch (error) {
    console.error('Error storing basic information:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/signup/preferences', async (req, res) => {
  try {
    const { gender, genderPreference } = req.body;
    // Retrieve basic information from session/local storage or database
    const basicInfo = JSON.parse(localStorage.getItem('basicInfo'));
    const userData = { ...basicInfo, gender, genderPreference };
    // Save complete user profile to the database
    const newUser = await User.create(userData);
    res.status(201).json(newUser); // Respond with created user data
  } catch (error) {
    console.error('Error creating user with additional details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});