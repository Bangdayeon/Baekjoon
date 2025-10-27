const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, m, ...arr] = input.map(Number);

function solution(m, arr) {
  // const basket=[];
  // for(let i=0;i<n;i++) basket[i]=i+1;
  const basket = Array.from({length:n}, (_, i)=>i+1);
  
  // for(let i=0; i<arr.length; i+=2) {
  //   let temp;
  //   temp = basket[arr[i]-1];
  //   basket[arr[i]-1] = basket[arr[i+1]-1];
  //   basket[arr[i+1]-1] = temp;
  // }
  for(let i=0;i<arr.length;i+=2) {
    const a = arr[i] - 1;
    const b = arr[i+1]-1;
    [basket[a], basket[b]] = [basket[b], basket[a]];
  }
  console.log(basket.join(' '));
}

solution(m, arr);

// Array.from으로 초기화 가독성을 개선할 수 있다.
// 길이 n이며, 각 요소에는 i+1을 넣음

// arr[i]-1, arr[i+1]-1은 너무 복잡하므로, 변수에 할당하여 더 간결하게 작성할 수 있다.
// 또한 최신 문법에서 구조분해할당으로 보다 간단하게 값 교환이 가능하다.