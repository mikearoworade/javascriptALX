// Write a script that prints all characters of a Star Wars movie:
//
// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line in the same order of the list “characters” in the /films/ response
// You must use the Star wars API
// You must use the module request

// To ensure that characters are printed in the same order as they appear in the API response,
// we need to fetch each character sequentially instead of using forEach (which is asynchronous).
const request = require('request'); // Import request module

// Get movie ID from command-line argument
const movieId = process.argv[2];

if (!movieId) {
    console.error('Usage: ./08-starwars_characters.js <Movie_ID>');
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

        // Function to fetch characters sequentially
        function fetchCharacter(index) {
            if (index >= characters.length) return; // Stop when all characters are fetched

            request(characters[index], (err, res, charBody) => {
                if (!err) {
                    const character = JSON.parse(charBody);
                    console.log(character.name);
                    fetchCharacter(index + 1); // Fetch the next character
                }
            });
        }

        // Start fetching characters in order
        fetchCharacter(0);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
