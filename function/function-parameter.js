// function expression
// function can also be decalred without name

const sq = function (x) {
    return x*x;
}

// also we can set a name in function expression
const named_sq  = function sqr(x){
    return x*x;
}

// function expressions can also be passed as an argument to another function
function map(f, a){
    const result = new Array(a.length);

    for(let i = 0; i<a.length; i++){
        result[i] = f(a[i]);
    }

    return result;
}

const numbers = [0, 1, 2, 3, 5];
const cubedNumbers = map(function (x){
    return x * x * x;
}, numbers);

console.log(cubedNumbers);


// using argument.length in cases when we don't know the total number of arguments passed to that function
function conCat(separator){
    let ans = "";

    // iterate over arguments
    // we start from 1, because we consider that the 1st argument is the seperator
    for(let i=1; i<arguments.length; i++){
        ans += arguments[i] + separator;
    }

    return ans;
}

console.log(conCat(", ", "red", "green", "blue", "white"));

console.log(conCat(", ", "red", "green", "blue", "white", "yellow", "cyan", "orange", "black"));

// default parameters
// js by default set all function parameters to undefined
// so if some value is not passed, we can not get the desired arguemnt
// here comes the default parameter

// without default
 function add(a, b){
    return a+b;
 }

 console.log(add(5)); // NaN, because 5+undefined 

 // with default 
 function subtract(a, b=1){
    return a-b;
 }

console.log(subtract(5)); // 4, because we set a default value(1) to b
console.log(subtract(5, 2)); // 3, because we passed a value(2) to b
console.log(subtract(5, undefined)); // 4, because we passed a value(undefined), to b so the default value (1) is applied
console.log(subtract(5, null)); // 5, because we passed a value(null), to b so the default value (1) is not applied
console.log(subtract(5, "")); // 5, because we passed a value(""), to b so the default value (1) is not applied


// falsy values null/"" do not trigger the default value
// so if we pass null or "" to the function, it will be considered as a value
// and the default value will not be applied
// so we can use null or "" as a value
function test(num = 1){
    console.log(num);
}

test(""); // ""
test(null) // null

// rest parameters (...name)
function multiply(multiplier, ...theArgs){
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3, 4);
console.log(arr);

