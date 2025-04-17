let simple_obj = {
    name: "John",
    age: 30,
    "Multi word": true, // we can also define multi word, but within string   
}

console.log(simple_obj.name); // John
console.log(simple_obj.age); // 30
// console.log(simple_obj.multi word); // will give a syntax error

console.log(simple_obj["Multi word"]); // we can't access multi word by dot notation, so we should use square brackets here

// explicit defined key to call an object property

let key = "name";
console.log(simple_obj[key]); // John

console.log(simple_obj.key); // undefined, cause this behaviour doesn't work with dot notation

// Computed property - to use square brackets in object literal, wehn creating an object
let fruit = "apple";

let sack = {
    [fruit] : 5, // the name of the property is taken from the variable fruit
}

console.log(sack.apple); // 5 if fruit=apple
console.log(sack.orange); // undefined, as fruit != orange

// we can print it a bit nicer
let veg = "tomato";
let  bag = {};

bag[veg] = 10 // take property name from the veg variable

// we also can use some complex expression inside brackets


