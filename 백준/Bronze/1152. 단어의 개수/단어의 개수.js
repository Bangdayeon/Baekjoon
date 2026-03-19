const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(arr) {
  console.log(arr === "" ? 0 : input.split(" ").length);
}

solution(input);