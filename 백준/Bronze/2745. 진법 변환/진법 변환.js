const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(arr) {
  console.log(parseInt(arr[0], Number(arr[1])));
}

solution(input);