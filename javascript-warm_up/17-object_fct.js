// update this script by adding a new function incr that increments the integer value.

const myObject = {
    type: 'object',
    value: 12
};
console.log(myObject);
// YOUR CODE HERE
myObject.incr = function() {
    // this.value += 1;
    this.value++;
}
// End

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
