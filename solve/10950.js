const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  // for(let i=0;i<n*2;i++) {
  //   if(i%2 == 0)
  //     console.log(`${arr[i]+arr[i+1]}`);
  // }
  let result = [];
  for(let i=0;i<n*2;i+=2) {
    result.push(arr[i]+arr[i+1]);
  }
  console.log(result.join('\n'));
}

solution(n, arr);
// 주석 처리한 부분이 처음 내가 작성한 것이다.
// 배열 메서드에 더 익숙해져야 한다.
// console.log는 느린 작업이기 때문에 값을 저장할 result 배열을 선언하고, push로 값을 넣는다.
// 출력할 때는 join을 사용해서 값들 사이에 \n을 넣어 한 번만 출력한다.