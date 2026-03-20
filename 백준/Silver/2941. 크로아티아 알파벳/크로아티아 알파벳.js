const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  n = n.replace(/dz=/g, 'X');
  n = n.replace(/c=|c-|d-|lj|nj|s=|z=/g, 'X');

  console.log(n.length);
}

solution(input);
