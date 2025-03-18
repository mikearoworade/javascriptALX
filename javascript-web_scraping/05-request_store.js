const request = require('request');
const fs = require('fs');

// Get command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Validate inputs
if (!url || !filePath) {
    console.error('Usage: ./05-request_store.js <URL> <file-path>');
    process.exit(1);
}

// Send GET request
request(url, (error, response, body) => {
    if (error) {
        console.error('Error fetching URL:', error);
        return;
    }

    // Write the response body to the file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
    });
});
