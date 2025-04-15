let a = 10;
let b = "20";

let ans = a+b;

console.log("before conversion explicitly: ",ans); // 1020
// this is because JS is a weakly typed language
// it will convert the number to string and concatenate
// this is called type coercion
// if you want to add the numbers, you have to convert the string to number
let ans2 = a + Number(b);
console.log("after explicit type conversion",ans2); // 30
// this is called type casting
// type casting is the process of converting one data type to another
// type coercion is the process of converting one data type to another automatically
// in JS, type coercion is done automatically by the interpreter


// in other languages, we have to do it manually
// for example, in C++, we have to do it manually
// int a = 10;
// string b = "20";
// int ans = a + b; // this will give an error
