require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const app = express();

// CONNECT TO MONGODB
const URI_LOCAL = process.env.URI_LOCAL;
const URI_CLOUD = process.env.URI_CLOUD;

const options = {
  useNewUrlParser: true,
  // useCreateIndex: true, // not longer supported
  useUnifiedTopology: true,
};
mongoose.connect(URI_LOCAL, options).then(
  () => {
    console.log(`Succesfully connected to Mongo DB `);
  },
  (err) => {
    console.log(`Error connecting to Mongo DB: ${err}`);
    err;
  }
);

app.use(morgan("tiny"));
//'CORS' permite acceder a la app desde otro dominio
app.use(cors());
// 'express.json()', sirve para las respuestas
app.use(express.json());
/*
  application/x-www-form-urlencoded
  para poder trabajar con solicitudes o respuestas de aplicaciones 'www', 'form', 'urlencoded'
*/
app.use(express.urlencoded({ extended: true }));

// ROUTES

app.use(require("./routes/index"));
app.use(require("./routes/movies"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
