const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(char) {
  let n = char.split('').reverse().join('');
  console.log(char===n?1:0);
}

solution(input);