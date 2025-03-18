// Write a script that searches the second biggest integer in the list of arguments.
//
// You can assume all arguments can be converted to integer
// If no argument passed, print 0
// If the number of arguments is 1, print 0

const n = process.argv.length;

if(n <= 3)
    console.log(0);
else {
    let arr = []
    for(let i = 2; i < n; i++) {
        arr.push(Math.floor(Number(process.argv[i])));
    }
    arr.sort((a, b) => a - b);
    console.log(arr[arr.length-2]);
}
