require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();

const dbConnection = require("./config/db");

// MIDDLEWARES
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

// CONNECT TO MONGODB
dbConnection();

// ROUTES
app.use(require("./routes/index"));
app.use(require("./routes/movies.routes"));
app.use(require("./routes/user.routes"));

app.listen(PORT, () => {
  console.log(`\x1b[32m ***************************************** \x1b[0m`);
  console.log(`\x1b[32m ** SERVER RUNNING ON PORT ${PORT} ** \x1b[0m`);
  console.log(`\x1b[32m ***************************************** \x1b[0m`);
});
