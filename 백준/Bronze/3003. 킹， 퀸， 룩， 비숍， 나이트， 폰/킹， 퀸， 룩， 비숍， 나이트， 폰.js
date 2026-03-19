const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  const origin = [1, 1, 2, 2, 2, 8];
  let answer= new Array(6);
  for(let i=0;i<6;i++){
    answer [i] = origin[i]-arr[i];
  }
  console.log(answer.join(' '));
}

solution(input);