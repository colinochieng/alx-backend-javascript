const countStudents = require("./3-read_file_async");
const http = require("http");

const dbName = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    let response = "This is the list of our students\n";
    countStudents(dbName)
      .then((data) => response + data)
      .then((result) => res.end(result))
      .catch((error) => res.end(error.message));
  }
});

app.listen(1245, "localhost");

module.exports = app;
