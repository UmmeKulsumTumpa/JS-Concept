### Prototype

- a prototype is just another object, that your object can borrow properties from, this is how inherirence work in js

- classical OOP(class based OOP) like: python, c++, java
- prototypical OOP(prototype based OOP) like: Java

- prototype: an object another object inherit from
- [[prototype]]: hidden link to the prototype(conceptual)
- Object.prototype: the root object - everything inherits from this(unless set to null)
- Inheritence: if an object doesn't have a property, JS looks up its prototype


- can an object have no prototype?
-> yes, but it's rare, example
```
let empty = Object.create(null);
console.log(empty.toString); // undefined
```
