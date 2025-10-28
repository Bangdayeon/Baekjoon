const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let arr = input.map(Number);

function solution(arr) {
  const check = Array(30).fill(0);
  for(let i=0;i<=30;i++) {
    for(let j=0;j<=30;j++) {
      if(arr[i] === j) {
        check[j-1] = arr[i];
      }
    }
  }
  for(let i=0;i<=30; i++) {
    if(check[i] === 0)
      console.log(i+1);
  }
}

solution(arr);