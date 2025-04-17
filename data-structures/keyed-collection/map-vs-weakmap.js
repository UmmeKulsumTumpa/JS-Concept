// Map
let person1 = {name: "Umme"};
const map = new Map();
map.set(person1, "This is Umme's data");

person1 = null;

console.log(map.get(person1)); // undefined

map.forEach((value, key) => {
    console.log(key, value); 
});

// for (const [key, value] of map){
//     console.log(key, value); // give the key value pair correctly
    
// }

// WeakMap
let person2 = {name: "Tumpa"};
const weakMap = new WeakMap();
weakMap.set(person2, "This is Tumpa's data")

console.log(weakMap.get(person2));
