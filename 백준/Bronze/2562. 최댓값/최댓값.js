const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [...arr] = input.map(Number);

function solution(arr) {
  let max = -Infinity;
  for(num of arr) {
    if(num>max)max=num;
  }
  let count=1;
  for(num of arr) {
    if(num===max) break;
    count++;
  }

  console.log(`${max}\n${count}`);
}

solution(arr);