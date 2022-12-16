require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
// const path = require("path");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const app = express();

// CONNECT TO MONGODB
connectDB();
// const URI_LOCAL = process.env.URI_LOCAL;
// const URI_CLOUD = process.env.URI_CLOUD;

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
