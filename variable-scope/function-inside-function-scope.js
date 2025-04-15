function sayHello(name){
    function yell(){
        console.log(name.toUpperCase());
        
    }

    yell();
}

sayHello("tumpa"); // this will work
yell(); // this will not work, just like variables, function are scoped to the parent function