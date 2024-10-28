const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is Sample website");
});

app.get("/me", (req, res) => {
  res.send("learning the developer tools");
});

app.listen(5000, () => {
  console.log("listening");
});
