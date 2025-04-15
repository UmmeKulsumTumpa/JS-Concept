// primitives are immutable
console.log("Immutable numbers");

let a = 100;
let b = a;

b = 200;

console.log(a); // 100
console.log(b); // 200, the re-assignment of b won't change the value of a, becuause primitives are immutable and copied by value

//------------------
console.log("Immutable strings");

let str1="Hello";
let str2=str1;

str2="World";

console.log(str1); // Hello
console.log(str2); // World

// ############################################################

// mutable Array/Object
console.log("Mutable Objects");

let obj1 = {
    name: "Tumpa",
};

let obj2 = obj1; // copied by reference, so share the same memory location ig
obj2.name = "Umme";

console.log(obj1); // will change from Tumpa to Umme
console.log(obj2);

// ----------------------------------------------
console.log("Mutable arrays");

let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // also adds 4 at the end, as array is mutable
console.log(arr2);

// making immutavle copies
console.log("... spread operator makes new copy of object, not by reference");

let user1 = {name:"Tom"};
let user2 = {...user1 };

user2.name = "Cruise";

console.log(user1);
console.log(user2);

