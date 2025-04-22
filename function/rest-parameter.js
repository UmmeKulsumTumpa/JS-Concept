// example : 1
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");
myFun("one", "two", "three");
myFun("one", "two");
myFun("one");

// example : 2
function ignoreFirst(...[, b, c, ...rest]) {
    console.log("rest", rest);
    console.log("b", b);
    console.log("c", c);
    // rest is an array of the remaining arguments
    // b and c are the second and third arguments
    // after the first argument
    // return the sum of b and c
    
    return b + c;
}

console.log(ignoreFirst(1, 2, 3, 4, 5, 6, 7));  // Output: 5

