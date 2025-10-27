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

// 0으로 초기화된 배열을 선언할 때 Array, fill을 사용할 수 있다.
// Array(n).fill(0) => 크기가 n인 array를 0으로 채움

// start, end, ball을 arr을 slice한 크기가 3인 배열로 만들었다.

// 내부 for문에서 각 바구니에 공을 넣는다.