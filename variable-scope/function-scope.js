const age = 100;

function girl(){
    const hair = "blonde";
    const age = 200; // this is called as a shadow variable
    console.log(age);
    
}

// console.log(age);
// girl(); // girl function call korleo function scope er bahire hair variable use korte parbo na, so laav nai call koreo
// console.log(hair);

girl();

// ------------------------------------------------------

