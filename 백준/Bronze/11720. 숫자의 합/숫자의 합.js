const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [n, arr] = input;

function solution(n, arr) {
  let a = 0;
  
  for(let i=0;i<n;i++){
    a += Number(arr[i]);
  }
  console.log(a);
}

solution(n, arr);