const express = require("express");
const countStudents = require("./3-read_file_async");

const dbName = process.argv[2];

const app = express();

app.get("/", (req, res) => {
  res.write("Hello Holberton School!");
  res.end();
});

app.get('/students', (req, res) => {
    let response = "This is the list of our students\n";
    countStudents(dbName)
    .then((data) => response + data)
    .then((result) => res.end(result))
    .catch((error) => res.end(error.message));
});

app.listen(1245, "127.0.0.1");

module.exports = app;
