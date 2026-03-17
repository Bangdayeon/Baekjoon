const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let n = Number(input[0]);
let arr = input.slice(1);

function solution(n, arr) {
  let a=0;
  for(let i=0;i<n;i++){
    const str = arr[i];
    console.log(str[0]+str[str.length-1]);
  }
}

solution(n, arr);