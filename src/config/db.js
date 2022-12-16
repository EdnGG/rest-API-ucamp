require("dotenv").config();
const mongoose = require("mongoose");

// CONNECT TO MONGODB
const URI_LOCAL = process.env.URI_LOCAL;
const URI_CLOUD = process.env.URI_CLOUD;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connetDB = async () => {
  try {
    await mongoose.connect(URI_CLOUD, options);
    console.log(`Succesfully connected to Mongo DB `);
  } catch (error) {
    console.log(`Error connecting to Mongo DB: ${error}`);
  }
};

module.exports = connetDB;
