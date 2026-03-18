const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, ...arr] = input;

function solution(n, arr) {
  for(let i=0;i<n;i++){
    let num = arr[i].split(' ')[0];
    let str = arr[i].split(' ')[1];

    let answer = '';
    for(let j=0;j<str.length;j++){
      for(let k=0;k<num;k++){
        answer += str[j];
      }
    }
    console.log(answer);
  }
}

solution(n, arr);