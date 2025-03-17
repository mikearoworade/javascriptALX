// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
//
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request

const request = require('request');

// Get the API URL from the command-line argument
const apiUrl = process.argv[2];

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error); // Print error if request fails
        return;
    }

    if(response.statusCode !== 200) {
        console.log(`Error: ${response.statusCode}`); // Handle invalid API response
        return;
    }

    const data = JSON.parse(body); // Parse the JSON response
    // console.log(data);
    const movies = data.results; // Extract the list of movies
    // console.log(movies);

    // Filter movies where Wedge Antilles (ID 18) appears
    const count = movies.filter(movie =>
        movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')).length;

    console.log(count);

})
