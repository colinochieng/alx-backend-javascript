const calculateNumber = require("./0-calcul");
const assert = require('assert')

const testsArr = [[1, 3, 4], [1, 3.7, 5], [1.2, 3.7, 5], [1.5, 3.7, 6]];

describe("Test suite for calculateNumber", function() {
    testsArr.forEach(({a, b, expected}, index) => {
        it(`Test case number ${index + 1}`, function() {
            assert.strictEqual(calculateNumber(a, b), expected);
        })
    })
});
