const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [...arr] = input.map(Number);

function solution(arr) {
  let max = 0;
  let [n, m] = [0,0];

  for(let i=0; i<81; i++){
    if(arr[i] > max) {
      max = arr[i];
      n = Math.floor(i/9);
      m = i % 9;
    };
  }
  console.log(max);
  console.log(n+1, m+1)
}

solution(arr);

// 처음에 대체 왜 틀린거지;; 하고 뜯어봤는데
// 함수 사용 문제였다. n을 구하기 위해서 i/9에 toFixed()를 붙였었는데, 
// 이건 반올림을 해서 첫번째 열에서 중간부터 0이 아니라 1이 들어가버리는 것이었다.
// Math.trunc(i/9)로 작성하면 소수점 아래를 깔끔하게 날려버릴 수 있다.
// Math.floor를 사용할 수도 있다. 이건 아래로 내리는 방식으로, 값에 음수가 들어간다면 차이가 발생하나,
// 인덱스 넘버가 음수가 될 일은 없다. 실무에서는 보통 floor를 더 많이 쓴다고 하니 floor로 사용해보자.
// 초기값 max를 0으로 지정하면 음수일 경우에는 최댓값 업데이트가 불가능하나, 문제 조건으로 음수가 없으므로 -Infinite를 사용할 필요는 없다.