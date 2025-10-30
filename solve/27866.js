const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
const n = input[0];           // 문자열
const m = Number(input[1]);   // 숫자 (1-based)

console.log(n[m-1]);

// 문자열 다루는 방법을 거의 까먹었다. 한번 복습을 간단하게 하고 문제를 이어서 풀어봐야겠다.