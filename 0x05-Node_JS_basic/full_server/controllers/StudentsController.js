const readDatabase = require("../utils");

const db = process.argv[2];

class StudentsController {
  static async getAllStudents(request, response) {
    response.statusCode = 200;

    response.write("This is the list of our students");

    try {
      const data = await readDatabase(db);
    } catch (error) {
      response.statusCode = 500;
      response.send("Cannot load the database");
    }

    const keys = Object.keys(data).sort();

    keys.forEach((element) => {
      response.write(
        `Number of students in ${element}: ${
          data[element].length
        }. List: ${data[element].join(", ")}`
      );
    });
    response.send();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (["CS", "SWE"].includes(major)) {
      try {
        const data = await readDatabase(db);

        response.status(200).send(`List: ${data[major].join(", ")}`);
      } catch (error) {
        response.status(500).send("Cannot load the database");
      }
    } else {
      response.status(500).send("Major parameter must be CS or SWE");
    }
  }
}

module.exports = StudentsController;
