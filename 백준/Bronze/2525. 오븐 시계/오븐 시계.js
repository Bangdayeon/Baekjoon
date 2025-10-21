const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [h, m, t] = input.map(Number);

function solution(h, m, t) {
  h = (h + Math.trunc((t+m)/60)) % 24;
  m = (m + t) % 60;

  console.log(`${h} ${m}`)
}

solution(h, m, t);