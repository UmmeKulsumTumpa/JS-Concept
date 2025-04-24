// "use strict";
// --------------- in object method
const person = {
    firstname: "Umme",
    lastName: "Kulsum",
    fullName: function(){
        // without this, here you will catch a referenceError: firstname is not defines
        console.log(`${this.firstname} ${this.lastName}`); // this refers to the person object, object space
        
    }
}

person.fullName();

// ---------------------- alone
console.log(this); // refers to the global/window, as now this is running on the global space

// "use strict"
// console.log(this); // so in strict mode, when used alone, this also refers to the window object

// ----------------------- in function

// function func(){
//     console.log(this); // window, because now in the global space
    
// }

"use strict"; // ekhane use strict dile, 31 line a window object dekhacche, donno why??????
// but opore use strict dile, it workd fine, shows undefined

function func2(){
    console.log(this); // undefined
    
}

// func();
func2();

