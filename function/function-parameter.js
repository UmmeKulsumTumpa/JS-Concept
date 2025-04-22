// function expression
// function can also be decalred without name

const sq = function (x) {
    return x*x;
}

// also we can set a name in function expression
const named_sq  = function sqr(x){
    return x*x;
}

// function expressions can also be passed as an argument to another function
function map(f, a){
    const result = new Array(a.length);

    for(let i = 0; i<a.length; i++){
        result[i] = f(a[i]);
    }

    return result;
}

const numbers = [0, 1, 2, 3, 5];
const cubedNumbers = map(function (x){
    return x * x * x;
}, numbers);

console.log(cubedNumbers);


