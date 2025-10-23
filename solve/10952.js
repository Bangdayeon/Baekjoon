const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [...arr] = input.map(Number);

function solution(arr) {
  let results = [];
  for(let i=0;i<arr.length-2;i+=2){
    results.push(arr[i]+arr[i+1]);
  }
  console.log(results.join('\n'));
}

solution(arr);