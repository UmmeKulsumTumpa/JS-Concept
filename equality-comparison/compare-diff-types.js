console.log(2 < 12);          
// true → Both are numbers. 2 is less than 12.

console.log(2 < "12");        
// true → "12" is a numeric string, so it's converted to number. 2 < 12 → true.

console.log(2 < "John");      
// false → "John" is not a number, converted to NaN. Any comparison with NaN returns false.

console.log(2 > "John");      
// false → Same as above. 2 > NaN → false.

console.log(2 == "John");     
// false → Loose equality (==) converts "John" to NaN. 2 == NaN → false.

console.log("2" < "12");      
// false → Both are strings. String comparison is done alphabetically: "2" > "1", so "2" < "12" is false.

console.log("2" > "12");      
// true → Same string logic: "2" > "1" → true.

console.log("2" == "12");     
// false → Both are strings with different values → not equal.

// -------------------------------------------------
console.log("== and ===");

console.log("2" == 2); 
// true → Loose equality (==) converts "2" to number. 2 == 2 → true.
console.log("2" === 2);
// false → Strict equality (===) checks type and value. "2" is string, 2 is number → not equal.
console.log(2 == 2);
// true → Both are numbers with same value → equal.