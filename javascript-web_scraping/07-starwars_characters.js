// Write a script that prints all characters of a Star Wars movie:
//
// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line
// You must use the Star wars API
// You must use the module request

// Import request module
const request = require('request');

// Get movie ID from command-line argument
const movieId = process.argv[2];

if (!movieId) {
    console.error('Usage: ./07-starwars_characters.js <MovieID>');
    process.exit(1);
}

// Construct the API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Fetch movie data
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error fetching movie:', error);
        return;
    }

    try {
        const movieData = JSON.parse(body);
        const characters = movieData.characters;

        // Fetch and print each character's name
        characters.forEach(characterUrl => {
            request(characterUrl, (err, res, charBody) => {
                if (!err) {
                    const character = JSON.parse(charBody);
                    console.log(character.name);
                }
            });
        });
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
