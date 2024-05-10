const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const env = require('dotenv').config();
//const User = require('./schema/User');  // Import your User schema
const router = express.Router();

const uri = "mongodb+srv://OronPaz:" + process.env.MongoDBPassword +"@ru-single.63vvotl.mongodb.net/?retryWrites=true&w=majority&appName=ru-single";

app.listen(5050, () => {
  console.log('Server is running on port 5050');
})

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect(()=>  {
  const database = client.db('ru-single');
  const users = database.collection('users');
  console.log('Connected to the database');
}).then(() => { 
  console.log('Connected to the database');
} ).catch((error) => {
  console.error('Error connecting to the database:', error);
});


