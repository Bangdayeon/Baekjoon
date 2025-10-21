const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const [n, m] = input;
const a = m%10;
const b = (m%100-a)/10;
const c = Math.trunc(m/100);
console.log(`${n*a}\n${n*b}\n${n*c}\n${n*m}`);