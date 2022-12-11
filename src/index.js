require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/movies", (req, res) => {
  res.send("Hello World");
});

app.post("/movies", (req, res) => {
  res.send("Hello World");
});

app.put("/movies/:id", (req, res) => {
  res.send("Hello World");
});

app.delete("/movies/:id", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
