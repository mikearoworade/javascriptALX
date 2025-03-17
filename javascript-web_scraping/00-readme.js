// Write a script that reads and prints the content of a file.
//
// The first argument is the file path
// The content of the file must be read in utf-8
// If an error occurred during the reading, print the error object

const fs = require('fs'); // Import the fs module

// Get the file path from command line arguments
const filepath = process.argv[2];

// Read the file asynchronously
fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        console.error(err); // Print error object if reading fails
    } else {
        console.log(data); // Print file content if successful
    }
});
