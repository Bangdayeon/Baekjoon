const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  let result = [];
  for(let i=0;i<n*2;i+=2){
    result.push(arr[i]+arr[i+1]);
  }
  console.log(result.join('\n'));
}

solution(n, arr);