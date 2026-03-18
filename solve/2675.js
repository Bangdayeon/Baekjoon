const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, ...arr] = input;

function solution(n, arr) {
  for(let i=0;i<n;i++){
    let [num, str] = arr[i].split(' ');
    let answer = '';
    for(let j=0;j<str.length;j++){
      answer += str[j].repeat(num);
    }
    console.log(answer);
  }
}

solution(n, arr);

// 처음에는 분명 다른 js 함수가 있을거라 생각했지만 모르겠어서 일단 반복문 몸빵했다.
// for(let i=0;i<n;i++){
//   let num = arr[i].split(' ')[0];
//   let str = arr[i].split(' ')[1];

//   let answer = '';
//   for(let j=0;j<str.length;j++){
//     for(let k=0;k<num;k++){
//       answer += str[j];
//     }
//   }
//   console.log(answer);
// }

// 이런 상황에서 k 반복문 자리에서 사용할 수 있는 것은 repeat(num) 함수이다.
// answer += str[j].repeat(num); 이런식으로 사용할 수 있다.

// 또한 처음에는 구조분해를 생각하지 못해서 num, str을 하나하나 할당했다.
//  let num = arr[i].split(' ')[0];
//  let str = arr[i].split(' ')[1];
// 하지만 이럴 때에 구조분해를 사용할 수 있다.
// let [num, str] = arr[i].split(' ');