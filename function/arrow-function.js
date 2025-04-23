
// arrow functions as methods
// without strict mode

"use strict";

const obj ={
    i: 10,
    b: () => console.log(this.i, this),
    c(){
        console.log(this.i, this);
        
    },
}

obj.b();
obj.c();
