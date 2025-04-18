// left shift is as usual
// a << b
// shift bits of a to the left by b positions
// vacant right bits are filled with 0 

let a = -2;
let b = 2;

let c = a << b;
let c_bits = c.toString(2).padStart(8, '0');

// console.log(a << b);
console.log(c_bits);

// right shift is a bit different
// it preserves sign
// a >> b
// shift bits of a to the right by b positions
// but here for positive numbers - fill the empty left bits with 0
//              negative numbers - fill the rmpty left bits to 1
// thus it preserves the sign of a number

let x = 10;
let y = 1;

let right_pos = x >> 2;

console.log(`${x}     : ${x.toString(2).padStart(16, '0')}`);
console.log(`${x} >> ${y}: ${right_pos.toString(2).padStart(16, '0')}`);

// right shift for negative
x = -10;

let right_neg = x >> y;

console.log(`${x}     : ${x.toString(2).padStart(16, '0')},   ${x}`);
console.log(`${x} >> ${y}: ${right_neg.toString(2).padStart(16, '0')},  ${right_neg}`);


// unsigned right shift >>> does exactly the same, but the difference is for both pos and neg, it fills the left empty bits with 0
// so sign is not preserved

x = -10;

let un_right_pos = x >>> 1;

console.log(`${x}     : ${x.toString(2).padStart(16, '0')}, ${x}`);
console.log(`${x} >>> ${y}: ${un_right_pos.toString(2).padStart(16, '0')}, ${un_right_pos}`);