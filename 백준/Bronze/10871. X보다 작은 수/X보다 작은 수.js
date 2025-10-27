const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let [n,m, ...arr] = input.map(Number);

function solution(n, m, arr) {
  const newArr = arr.filter(x=>x<m)
  console.log(newArr.join(' '));
}

solution(n, m, arr);