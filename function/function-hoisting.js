// example 1:

// function hoisting only works with function declarations, not with function expressions

// hoisting in function declaration
console.log(square(5));

function square(num) {
    return num*num;
};

// example 2:

// but hoisting doesn't work with function expressions

// console.log(another_square(5)); // ReferenceError: Cannot access 'another_square' before initialization

const another_square = function(num){
    return num*num;
};

// example 3:

const f = function f1(num){
    return num*num;
};

console.log(f1(5)); // ReferenceError: f1 is not defined

// function expression is scoped locally
// when we define a named function expression,
// the name is local name --- it's only available inside the function body itself
// outside the function, the only reference is the variable f

// so the question can be: what is the need of function name of any function expression
// ans:
// 1. self-reference(recursion)
// 2. debugging
