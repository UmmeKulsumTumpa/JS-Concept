
// const obj = {
//     name: "Test",
//     getName: function() {
//         console.log(this);
        
//       return this;
//     }
//   };
  
// //   const detached = obj.getName;
// //   console.log(detached()); // undefined (strict mode)

// const det = obj.getName;
// console.log(det());

const myFun = ()=> {
    console.log(this);   
}

const o = {
    name: 's',
    f: myFun
}

o.f();

console.log(-4 >>> 3);
console.log(-44 >> 3);
console.log(44 >> 3);