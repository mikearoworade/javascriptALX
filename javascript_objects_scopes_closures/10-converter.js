// Write a function that converts a number from base 10 to another base passed as argument:
//
// Prototype: exports.converter = function (base)
// You are not allowed to import any file

exports.converter = function (base) {
    // return num => num.toString(base);
    return function (num) {
        return num.toString(base);
    };
}

// exports.converter = function (base) { ... }
//
// This exports a function that takes base as an argument.
//     return function (num) { return num.toString(base); };
//
// The function returns another function that takes a number (num)
// and converts it to the specified base using .toString(base).

// ✅ Higher-order function → It returns another function.
// ✅ Functional programming → No variables declared inside.
// ✅ toString(base) → Converts numbers to different bases efficiently.
// ✅ exports.converter → Allows the function to be used in other files via require()
