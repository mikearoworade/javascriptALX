// Write a script that prints the first argument passed to it:
// If no arguments are passed to the script, print “No argument”

if (typeof(process.argv[2]) === 'undefined' ) {
    console.log("No argument");
} else {
    console.log(process.argv[2]);
}
