// local variable available within all non-arrow functions
// 0 indexed, kinda array type
// we can do this argument object work with ... rest parameters now

function func(a){
    arguments[0] = 100; //updating arguments[0] also updates a
    console.log(a);
    
}

func(10); // 100

function func2(a) {
    a = 99; // updating a also updates arguments[0]
    console.log(arguments[0]);
}

func2(9); // 100

// but with default parameters, the same functionality doesn't work
function defFunc(a = 50){
    arguments[0] = 99; // updating arguments[0] does not also update a, as it is set default
    console.log(a);
    
}

defFunc(10); // 10

function defFunc2(a = 55){
    a = 99; // updating a does not also update the arguments[0]
    console.log(arguments[0]);
}

defFunc2(20); // 20
