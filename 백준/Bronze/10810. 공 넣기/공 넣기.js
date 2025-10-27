const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, m, ...arr] = input.map(Number);

function solution(n, m, arr) {
  const basket = Array(n).fill(0);
  for(let i=0; i<arr.length; i+=3) {
    const [start, end, ball] = arr.slice(i, i+3);
    for(let j = start-1; j<end; j++) {
      basket[j] = ball;
    }
  }
  console.log(basket.join(' '));
}

solution(n, m, arr);