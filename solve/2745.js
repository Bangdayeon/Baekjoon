const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(arr) {
  console.log(parseInt(arr[0], Number(arr[1])));
}

solution(input);

// 문제 이해도 못했다...
// 진법은 자리수 기반 거듭제곱으로 계산해야한다.
// A = 10, B = 11, ... Z = 36에 35진법이라고 한다면
// answer = answer * 35 + 36 이런식으로 각 자리에 대한 계산을 진행하는 것이다.

// 알고 있는 것으로 예시를 들어보자.
// 123 10진법일 때는
// 1*100 + 2*10 + 3이 123이다.

// 이걸 묶어보면 아래와 같은 형태가 될 수 있다.
// 123 = ((1*10) + 2)*10 + 3
// 이는 즉 answer = answer * 10 + value의 형태이다.
// function solution(arr) {
//   let n = arr[0];
//   let b = Number(arr[1]);
//   let answer = 0;

//   for(let i=0;i<n.length; i++) {
//     let char = n[i];
//     let value;

//     if(char >= 'A') {
//       value = char.charCodeAt(0) - 55;
//     } else {
//       value = Number(char);
//     }

//     answer = answer * b + value;
//   }
//   console.log(answer);
// }
// 외우는 게 빠를듯..

// 근데 사실 이거 코드 한 줄로 끝낼 수도 있다.
// console.log(parseInt(arr[0], Number(arr[1])));

// parseInt(문자열, 진법)으로,
// parseInt는 문자열을 해당 진법으로 해석해서 10진수로 변환하는 함수이다.
// 실제로 진법을 활용할 때는 parseInt(문자열, 진법)을 사용하면 된다.