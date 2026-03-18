const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, ...arr] = input;

function solution(n, arr) {
  for(let i=0;i<n;i++){
    let [num, str] = arr[i].split(' ');
    let answer = '';
    for(let j=0;j<str.length;j++){
      answer += str[j].repeat(num);
    }
    console.log(answer);
  }
}

solution(n, arr);