console.log(typeof document); // object
console.dir(document);

console.log(typeof document.title); // string, read html element
document.title = "Hello JS"; // change html element

console.log(document.all); // though it seem like array, but its actually not an array
console.log( typeof document.all); // undefined

// though it is not an array, but it has Symbol.Iterator
// so we can loop through it

for(let ele of document.all){
    console.log(ele);
}
