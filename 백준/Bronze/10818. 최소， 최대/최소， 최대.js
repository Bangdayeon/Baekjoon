const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  let min=1000000;
  let max=-1000000;

  for(let i=0;i<n;i++){
    if(arr[i]<min){
      min=arr[i];
    }
    if(arr[i]>max) {
      max=arr[i];
    }
  }
  console.log(min, max);
}

solution(n, arr);