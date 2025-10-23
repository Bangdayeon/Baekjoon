const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [X,N, ...arr] = input.map(Number);

function solution(X,N, arr) {
  let total = 0;
  for(let i=0;i<N*2;i+=2) {
    total += arr[i]*arr[i+1];
  }
  console.log(total === X ? 'Yes' : 'No');
}

solution(X,N, arr);
// 4m