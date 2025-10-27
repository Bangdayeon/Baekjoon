const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let arr = input.map(Number);

function solution(arr) {
  let max = -Infinity;
  let count=0;
  for(let i=0;i<arr.length;i++) {
    if(arr[i] > max){
      max = arr[i];
      count = i + 1;
    };
  }

  console.log(`${max}\n${count}`);
}

solution(arr);