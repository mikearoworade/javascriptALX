// Write a script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.
//
// Your script must import dict from the file 12-data.js
// In the new dictionary:
// A key is a number of occurrences
// A value is the list of user ids
// Print the new dictionary at the end

// const dict = require("./12-data").dict;
const { dict } = require("./12-data");
console.log(dict);

// Create the new dictionary
const newDict = {};

for (const key in dict) {
    const occurrences = dict[key];

    if (!newDict[occurrences]) {
        newDict[occurrences] = [];
    }
    newDict[occurrences].push(key);
}

console.log(newDict);
