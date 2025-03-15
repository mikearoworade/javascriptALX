// Write a script that prints the addition of 2 integers
//
// The first argument is the first integer
// The second argument is the second integer
// You have to define a function with this prototype: function add(a, b)

function add(a, b) {
    return a + b;
}

// console.log(add(Number(process.argv[2]), Number(process.argv[3])));

num1 = Math.floor(Number(process.argv[2]))
num2 = Math.floor(Number(process.argv[3]))

if (isNaN(num1) || isNaN(num2)) {
    console.log("NaN")
} else {
    const sum = add(num1, num2);
    console.log(sum);
}
