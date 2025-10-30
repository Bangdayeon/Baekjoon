const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
const n = input[0];           // 문자열
const m = Number(input[1]);   // 숫자 (1-based)


console.log(n[m-1])