const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.write("Hello Holberton School!");
  res.end();
});

app.listen(1245, "127.0.0.1");

module.exports = app;
