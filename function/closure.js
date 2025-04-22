// example: 1

function outer() {
    let count = 0;

    function inner(){
        count++;
        console.log(`Count: ${count}`);
        
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2


// example: 2

for(var i=0; i<3; i++){
    setTimeout(function () {
        console.log(i);
        
    }, 0);
};


// the above will all print: 3, 3, 3
// because the var is function scoped, not block-scoped
// so all the three closure shares the same variable i
// also why it prints 3? because the loop run very fast, almost instantly
// that's why when 1000ms passed, the loop is finished already, so the i value is 3

// now, if we use let instead of var, we can see the below result

for(let i=0; i<3; i++){
    setTimeout(function () {
        console.log(i);
        
    }, 0);
};
 
