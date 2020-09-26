let small = 0;
let mid = 2;
let big = 4;

const kill = (greemlinA, greemlinB) => greemlinA + greemlinB;
const eat = (greemlinA, greemlinB) => greemlinA * greemlinB;

let result = kill(eat(kill(big, small), mid), eat(big, mid));

console.log(result);