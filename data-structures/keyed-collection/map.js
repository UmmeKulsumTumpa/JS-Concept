const sayings = new Map();

// set some values to map
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");

console.log(sayings.size); // 3

// get the properties by key
console.log(sayings.get("dog")); //woof
console.log(sayings.get("fox")); // undefined
console.log(sayings.has("birds")); // false

sayings.delete("dog");
console.log(sayings.has("dog")); // false

for (const [key, value] of sayings) {
    console.log(`${key} goes ${value}`);
    
}

sayings.clear();
console.log(sayings.size);


