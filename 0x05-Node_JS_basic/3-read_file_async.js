function countStudents(path) {
  const fs = require("fs");

  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      } else {
        let dataArr = data.split("\n");

        if (dataArr[dataArr.length - 1] === "") {
          dataArr.splice(dataArr.indexOf(""));
        }

        const dataFields = dataArr.splice(0, 1).toString().split(",");

        let studentsObj = [];

        dataArr.forEach((element) => {
          let studentInfo = element.split(",");
          let tmpObj = {};

          dataFields.forEach((value, index) => {
            tmpObj[value] = studentInfo[index];
          });

          studentsObj.push(tmpObj);
        });

        let result = [`Number of students: ${studentsObj.length}`];

        const fields = {};
        studentsObj.forEach(({ field, firstname }) => {
          if (fields[field]) {
            fields[field].count++;
            fields[field].list.push(firstname);
          } else {
            fields[field] = { count: 1, list: [firstname] };
          }
        });

        for (const field in fields) {
          const { count, list } = fields[field];

          result.push(
            `Number of students in ${field}: ${count}. List: ${list.join(", ")}`
          );
        }

        console.log(result.join("\n"));

        resolve(result.join("\n"));
      }
    });
  });
}

module.exports = countStudents;
