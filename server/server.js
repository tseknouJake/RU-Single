const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const env = require('dotenv').config();

const uri = "mongodb+srv://OronPaz:" + process.env.MongoDBPassword +"@ru-single.63vvotl.mongodb.net/?retryWrites=true&w=majority&appName=ru-single";
console.log(process.env.MongoDBPassword);

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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
