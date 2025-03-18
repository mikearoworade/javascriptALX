// Write a function that returns the number of occurrences in a list:
//
// Prototype: exports.nbOccurrences = function (list, searchElement)

exports.nbOccurrences = function(list, searchElement) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === searchElement) {
            count++;
        }
    }
    return count;
}
