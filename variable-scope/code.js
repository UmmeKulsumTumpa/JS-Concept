function hello(){
    if(true){
        var a="JS";
        let b="C++";
        const c="Python";

        console.log(a);
        console.log(b);
        console.log(c);
        
    }

    console.log("Outside the if block");
    console.log(a);
    console.log(b); // block scoped
    console.log(c); // block scoped
    // the block scoped let and const will give error
}

hello();
