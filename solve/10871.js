const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n,m, ...arr] = input.map(Number);

function solution(n, m, arr) {
  const newArr = arr.filter(x=>x<m)
  console.log(newArr.join(' '));
}

solution(n, m, arr);