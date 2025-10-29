const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);
const max = Math.max(...arr);
const sum = arr.reduce((acc, num)=>acc+(num/max)*100, 0);
const average = sum/n;
console.log(average);