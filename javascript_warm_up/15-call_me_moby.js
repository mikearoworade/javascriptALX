// Write a function that executes x times a function.
//
// The function must be visible from outside
// Prototype: function (x, theFunction)

exports.callMeMoby = function (x, theFunction) {
    for (let i = 1; i <= x; i++) {
        theFunction();
    }
}
