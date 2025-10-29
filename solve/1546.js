const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  // let max = 0;
  // for(let num of arr) {
  //   if(max<num)max=num;
  // }
  const max = Math.max(...arr);

  // let average = 0;
  // for(let i=0;i<n;i++){
  //   average += arr[i]/max*100;
  // }

  const sum = arr.reduce((acc, num)=>acc+(num/max)*100, 0);
  const average = sum/n;
  console.log(average);
}

solution(n, arr);

// Math.max()를 사용하면 최댓값을 쉽게 구할 수 있다.
// reduce를 사용하면 한 줄로 합계 계산이 가능하다.
// reduce는 js에서 배열을 하나의 값으로 축약할 때 사용하는 메서드이다.
// arr.reduce((누적값, 현재 순회 중인 배열 요소) => { return 누적값 + 현재 배열 요소}, acc의 초기값)
// 문제는 쉽게 풀었으나, 메서드들을 활용하지 못했다.
// 메서드를 익히자.