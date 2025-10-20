const fs = require("fs") ;
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  const bulYear = input;
  console.log(`${bulYear - 543}`);
}

solution(input);