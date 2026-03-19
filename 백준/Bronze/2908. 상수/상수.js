const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(arr) {
  const num1 = arr[0].split('').reverse().join('');
  const num2 = arr[1].split('').reverse().join('');

  console.log( num1 > num2 ? num1 : num2);
}

solution(input);