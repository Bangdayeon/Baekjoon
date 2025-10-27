const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  for(let i=0;i<n*2;i++) {
    if(i%2 == 0)
      console.log(`${arr[i]+arr[i+1]}`);
  }
}

solution(n, arr);