const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  const [a, b, c] = input;
  console.log(`${(a+b)%c}\n${((a%c)+(b%c))%c}\n${(a*b)%c}\n${((a%c)*(b%c))%c}`);
}

solution(input);