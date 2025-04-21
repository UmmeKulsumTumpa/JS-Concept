console.log(Number.MAX_SAFE_INTEGER+1000); // MAX_SAFE-INTEGER tar ssathe any value add korle diff time e diff result dekhacche, need to know the reason

// bigint declaration
const a = 111111111111111111111111111111111111111n;
const b = BigInt("111111111111111111111111111111111111");

// console.log(a, b);

// Supported BigInt operators
// most arithemetic and bitwise operator works just like numbers
console.log(1n + 2n); // 3n
// ... similar other operators

// difference comes at division
// division truncates towards 0, as no floating point divison, always the whole number
console.log(5n / 2n); // 2n

console.log(-5n / 2n); // -2n

// Can't mix bigint and numbers directly
// console.log(1n+2); // TypeError
// must convert explicitly
console.log(Number(1n) + 2);

// allow all bitwise operator except unsigned right shift

// because bigint has no defined sign bit similar to number
// so there's no such thing "sign bit at position 31"
// that makes unsigned logic undefined


