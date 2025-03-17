// Write a script that display the status code of a GET request.
//
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request

const request = require('request'); // Import the request module

// Get the URL from the command line
const url = process.argv[2];

// Make a GET request to the given URL
request(url, (error, response) => {
    if (error) {
        console.error(error); // print error if request fails
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});

// ✅ The request module is deprecated, so it's better to use axios or node-fetch.
// ✅ Install request manually if you still want to use it (npm install request).
// ✅ Use axios for better performance and modern features (npm install axios).
// ✅ node-fetch is another lightweight alternative.
