// Write a script that prints a message depending on the number of arguments passed:
// If no arguments are passed to the script, print “No argument”
// If only one argument is passed to the script, print “Argument found”
// Otherwise, print “Arguments found”

const count = process.argv.length;
if(count === 2){
    console.log("No argument");
} else if (count === 3) {
    console.log("Argument Found");
} else {
    console.log("Arguments Found");
}
