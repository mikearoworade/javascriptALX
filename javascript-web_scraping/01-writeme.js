// Write a script that writes a string to a file.
//
// The first argument is the file path
// The second argument is the string to write
// The content of the file must be written in utf-8
// If an error occurred during while writing, print the error object

const fs = require('fs'); // Import the fs module

// Get the file path and content from command-line arguments
const filePath = process.argv[2];
const fileContent = process.argv[3];

// Write to the file asynchronously
fs.writeFile(filePath, fileContent, (err) => {
    if (err)
        console.log(err);
});
