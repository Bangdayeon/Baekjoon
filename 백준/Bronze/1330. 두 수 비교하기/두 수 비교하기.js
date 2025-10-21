const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [a, b] = input;
let result;
if(a>b) result = '>';
else if(a<b) result = '<';
else result = '==';

console.log(result);