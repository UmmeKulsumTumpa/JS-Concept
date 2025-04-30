// array shift() method - removes the first element and returns it
let arr = [1, 2, 3];
let first = arr.shift();
console.log(arr); // 2, 3
console.log(first); // 1

// array unshift() - adds one or more elements to the beginning of the array
arr.unshift(0, 1);
console.log(arr); // 0, 1, 2, 3

// array splice() - adds/removes element at a sepcified index
const myFish = ["angel", "clown", "mandarian", "sturgeon"];
const removed = myFish.splice(0);

console.log(myFish);
console.log(removed); // empty

// array sort() -- sorts the array in place and optionally with a comparison function
let arr_sort = [3, 9, 0, 5, -10];
arr_sort.sort((a, b) => {
    if(a>b) return 1; // b comes before a
    if(a<b) return -1; // b comes after a
    return 0; // a and b are equal
});

console.log(arr_sort);

arr_sort.reverse();

console.log(arr_sort);


