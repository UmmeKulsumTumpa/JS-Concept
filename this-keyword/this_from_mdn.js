// example : 1
function getThis(){
    return this;
}

const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // now this getThis function is binded with the obj1
console.log(obj2.getThis()); // now this getThis is binded with the obj2

// Note: even though getThis is the same function, but it will refer to the obj before dot

// example: 2

const obj3 = {
    __proto__: obj1,
    name: "obj3",
};

console.log(obj3.getThis()); // here even if the obj3 doesn't have the getThid function, but it inherited the function from obj1
// but this will always refer to the obj before dot, so here we will see this is binded with the obj3

// even when a function is defined inside another function, 
// it will still refer the object before dot

// example 3:

const obj4 = {
    name: "obj4",
    getThisInside(){
        return this;
    }
}

const obj5 = {name: "obj5"};

obj5.getThisInside = obj4.getThisInside;

console.log(obj5.getThisInside()); // refers to obj5

// callbacks
// in most cases, (foreach, promises) callbacks are called with this = undefined in strict mode
// in non-strict, it is global/window

function logThis(){
    "use strict";
    console.log(this);
    
}

const arr = [1, 2, 3];
arr.forEach(logThis); 

// but some api let us set this using an extra argument
arr.forEach(logThis, {value: ""})

// arr.forEach((ele, idx) => console.log(ele, idx));

// .call() / .bind() has no effect on this

