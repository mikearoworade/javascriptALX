// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
//
// The first argument is the movie ID
// You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// You must use the module request

const request = require("request");

// Get the movie ID from command-line arguments
const movieId = process.argv[2];

// Construct the api URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to Star Wars API
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error); // Print error if request fails
    } else if (response.statusCode !== 200) {
        console.log(`Error: ${response.statusCode}`); // Handle invalid movie IDs
    } else {
        const data = JSON.parse(body); // Parse the JSON response
        console.log(data.title );
    }
})
