// example - 1
// function isCool(name){
//     let cool;
//     var inside_func = true;

//     if(name === "tumpa"){
//         const cool = true;
//         var tempter = false;
//     }

//     console.log(cool); // it will show undefined, as the cool is declared, but not initialized with any values
//     console.log(tempter); // it will work, because var variable is not block scoped, it is function scoped
    
//     return cool;
// }

// isCool("tumpa");
// console.log(inside_func); // will show error, because inside_func is function scoped



// ----------------------------------------
// example - 2

const cat = "milo";

function logCat(){
    console.log(cat);
    
}

function nameCat(){
    const cat = "peu";
    logCat();
}

nameCat();
