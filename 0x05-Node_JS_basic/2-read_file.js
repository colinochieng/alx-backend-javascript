/**
 * Reading a file synchronously with Node JS
 * @param {string} path - file path
 */
function countStudents(path) {
  const fs = require("fs");

  try {
    let data = fs.readFileSync(path, "utf8");

    data = data.split("\n");

    if (data[data.length - 1] === "") {
      data.splice(data.indexOf(""));
    }

    data = data.slice(1);

    process.stdout.write(`Number of students: ${data.length}\n`);

    // counting number of students per field
    let dataList = [];

    data.forEach((element) => {
      dataList.push(element.split(","));
    });

    const fieldCount = {};

    dataList.forEach((element) => {
      if (fieldCount.hasOwnProperty(element[3])) {
        fieldCount[element[3]].count += 1;
        fieldCount[element[3]].students.push(element[0]);
      } else {
        fieldCount[element[3]] = {};
        fieldCount[element[3]].count = 1;
        fieldCount[element[3]].students = [element[0]];
      }
    });

    for (const field of Object.keys(fieldCount)) {
      let fieldData = fieldCount[field];
      process.stdout.write(
        `Number of students in ${field}: ${
          fieldData.count
        }. List: ${fieldData.students.join(", ")}\n`
      );
    }
  } catch (error) {
    console.error(error);
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
