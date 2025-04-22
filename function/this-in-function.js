// example 1
// function person(){
//     this.age = 0;

//     setInterval(function growUp(){
//         // in non-strict mode the growUp function defines a separate this
//         // as the global object(for node.js) or the window object(for browser), which is different from the outer this
//         // defined by the Person() constructor
//         this.age++;
//         console.log(`Age:  ${this.age}`); // we will see NaN, because this.age is undefined in the growUp function
        
//     }, 1000);

//     console.log(this.age);
    
// }

// const p = new person();


// example 2

function person(){
    const self = this; // saves the correct reference to the Person instance
    self.age = 0;

    setInterval(function growUp(){
        // self is in the outer closure scope.
        //So self.age++ correctly increments the age property of the Person instance.
        self.age++;
        console.log(`Age:  ${self.age}`); 
        
    }, 1000);

    console.log(self.age);
    
}

const p = new person();
