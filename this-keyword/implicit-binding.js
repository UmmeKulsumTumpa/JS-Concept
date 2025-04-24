// implicit binding: this is bound to the object before the dot when the function is called.

// object inside object, and will see this refers to which

let person = function(name, age) {
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
            
        },
        // another object
        father: {
            name: "Mr. AAA",
            printName: function(){
                console.log(this.name);
            }
        }
    }
}

let p1 = person("Tumpa", 22);
p1.printName();
p1.father.printName(); // this time this refers to father, not p1, 

