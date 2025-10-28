const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let arr = input.map(Number);

const answer = new Set();

for(let num of arr) {
  answer.add(num%42);
}

console.log(answer.size);