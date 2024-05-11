const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv').config();
const User = require('./schema/User.js');  // Import your User model
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const uri = "mongodb+srv://OronPaz:" + process.env.MongoDBPassword +"@ru-single.63vvotl.mongodb.net/?retryWrites=true&w=majority&appName=ru-single";

app.listen(5050, () => {
  console.log('Server is running on port 5050');
})


mongoose.connect(uri).then(() => {
console.log('Connected to MongoDB');
}).catch((err) => {
console.log('Failed to connect to MongoDB', err);
});



app.get('/userData', async (req, res) => {
  const users = await User.find();
  res.send(users);
});


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({name, email, password});
  await user.save();
  res.send(user);
});
