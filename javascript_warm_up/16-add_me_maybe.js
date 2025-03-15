// Write a function that increments and calls a function.
//
// The function must be visible from outside
// Prototype: function (number, theFunction)

exports.addMeMaybe = (number, theFunction) => {
    theFunction(++number)
}
