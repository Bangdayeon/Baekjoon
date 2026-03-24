const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [...arr] = input.map(Number);

function solution(arr) {
  let max = 0;
  let [n, m] = [0,0];

  for(let i=0; i<81; i++){
    if(arr[i] > max) {
      max = arr[i];
      n = Math.floor(i/9);
      m = i % 9;
    };
  }
  console.log(max);
  console.log(n+1, m+1)
}

solution(arr);