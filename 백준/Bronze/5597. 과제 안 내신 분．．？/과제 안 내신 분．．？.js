const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let arr = input.map(Number);

const check = Array(30).fill(0);

for(let num of arr) {
  check[num-1] = true;
}

for(let i=0;i<30;i++) {
  if(!check[i]) console.log(i+1);
}