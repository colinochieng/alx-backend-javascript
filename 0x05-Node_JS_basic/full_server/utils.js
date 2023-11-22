const fs = require("fs");

function readDatabase(path) {
  const fs = require("fs");

  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataArr = data.split("\n");

        dataArr.splice(0, 1); // remove csv headers

        // remove  empty lines (at the end) of csv file
        if (dataArr[dataArr.length - 1] === "") {
          dataArr.splice(dataArr.indexOf(""), 1);
        }

        const fieldObj = {};

        dataArr.forEach((element) => {
          let rowData = element.split(",");
          if (fieldObj[rowData[3]]) {
            fieldObj[rowData[3]].push(rowData[0]);
          } else {
            fieldObj[rowData[3]] = [rowData[0]];
          }
        });
        resolve(fieldObj);
      }
    });
  });
}

module.exports = readDatabase;
