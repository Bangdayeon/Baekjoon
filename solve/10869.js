const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  const [a, b] = input;
  console.log(`${a+b}\n${a-b}\n${a*b}\n${Math.floor(a/b)}\n${a%b}`);
}

solution(input);

// 소수점을 없애기 위해 Math.floor를 사용했다.
// 소수점을 버릴 때에는 Math.floor, Math.trunc 을 사용할 수 있다.

// Math.floor : 주어진 수보다 작거나 같은 가장 큰 정수를 반환
// Math.trunc : 소수점 이하를 단순히 잘라냄

// 문제에 음수가 포함되었다면 두 함수를 사용할 때 값이 달라졌을 것이다.
// -13 / 3 = -4.33333333...
// Math.floor(-13/3) // -5
// Math.trunc(-13/3) // -4