let str = "Hello";
console.log(str.length); // autoboxes str to String object

str.test = "Test";

console.log(str.test); // undefined, the explanation is given on the autoboxing.md file
console.log(str);

console.log(typeof str); // string, because even if js autoboxes it to object, it still behaves like primitive


// it is not recommended to manually autobox primitives
// primitive and object comparison

let name1 ="tumpa"; // string, primitive
let name2 = new String("tumpa"); // object

console.log(name1 == name2); // true, because only value is compared
console.log(name1 === name2); // false, because (type+value) is compared


