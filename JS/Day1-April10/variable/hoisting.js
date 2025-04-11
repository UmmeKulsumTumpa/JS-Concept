 // JS declartions are only hoisted
// the intialization is not hoisted

var x=5;
var y=7;

console.log(x, y); // this will show x and y values

// -------------------
var x=5;
console.log(x, y); // this will show y as undefined
var y=10;

