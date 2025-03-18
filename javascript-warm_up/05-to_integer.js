// Write a script that prints My number: <first argument converted in integer>
// if the first argument can be converted to an integer:
//
// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output

const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' :`My number: ${num}`)
