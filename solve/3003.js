const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  const origin = [1, 1, 2, 2, 2, 8];
  const answer = origin.map((v, i) => v - arr[i]);
  console.log(answer.join(' '));
}

solution(input);

// function solution(arr) {
//   const origin = [1, 1, 2, 2, 2, 8];
//   let answer = [];
//   for(let i=0;i<6;i++){
//     answer [i] = origin[i]-arr[i];
//   }
//   console.log(answer.join(' '));
// }
// 처음에 answer = '' 해서 그냥 문자열에 더하고 .split('').join(' ')으로 처리했더니
// 음수도 - 1 이런식으로 분리되어버리는 불상사가 일어났었음..
// 다 풀고 개선점 힌트를 보니 map을 사용하라고 한다. wow
// answer = origin.map(...)과 같이 작성해서 origin에 ... 작업 한 것을 바로 answer에 넣는 것이다.
// array.map((element, index) => { return 변환값; }) 이것이 map의 기본 문법
// v는 origin의 현재 요소 값,
// index는 현재 인덱스가 된다.
// 따라서 각 배열 요소 v에 대해 -arr[i]를 한 후 그대로 answer에 넣는 것.
