/**
 * function prints in STDOUT the string argument 
 * @param {string} str - message to print
 */
function displayMessage(str) {
    process.stdout.write(str + '\n', function(error) {
        if (error) {
            console.error(error);
        }
    });
};

module.exports = displayMessage
