// Write a script that prints x times “C is fun”
//
// Where x is the first argument of the script
// If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// You must use console.log(...) to print all output

const x = Math.floor(Number(process.argv[2]));

if(isNaN(x)){
    console.log("Missing number of arguments");
} else {
    for (let i = 1; i <= x; i++) {
        console.log("C is fun");
    }
}
