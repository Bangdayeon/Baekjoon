const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  const [A, B] = input;
  console.log(A / B);
}

solution(input);