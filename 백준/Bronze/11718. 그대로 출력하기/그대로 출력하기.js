const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [...arr] = input;

function solution(arr) {
  console.log(arr.join('\n'));
}

solution(arr);