const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const n = input;
console.log('long '.repeat(n/4)+'int');
