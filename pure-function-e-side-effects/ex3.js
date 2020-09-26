let small = 0;
let mid = 2;
let big = 4;

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const double = a => mult(a, 2);

let result = double(mult(big, mid))

console.log(result);