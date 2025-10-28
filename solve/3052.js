const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let arr = input.map(Number);

const answer = new Set();

for(let num of arr) {
  answer.add(num%42);
}

console.log(answer.size);

// 처음에 배열로 했다가 문제를 다시 읽어보니 '서로 다른 값의 개수'를 출력하라는 것을 보고
// Set을 사용해야겠다고 생각했다.
// 하지만 Set에서 add를 하는 것까지는 기억했는데 값의 개수를 출력하는 size는 까먹었다.
// 전에 정리했던 블로그를 보고 알았다.
// 왜 배열과 다르게 메서드 이름을 지은 걸까? 너무 헷갈린다.
// 하지만 Set에서 쓰이는 메서드 이름도 잘 숙지해둬야겠다.