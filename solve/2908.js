const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(arr) {
  const num1 = arr[0].split('').reverse().join('');
  const num2 = arr[1].split('').reverse().join('');

  console.log( num1 > num2 ? num1 : num2);
}

solution(input);


// function solution(arr) {
//   let num1='';
//   let num2 = '';
//   num1+= arr[0][2];
//   num1+= arr[0][1];
//   num1+= arr[0][0];

//   num2+= arr[1][2];
//   num2+= arr[1][1];
//   num2+= arr[1][0];

//   console.log( Number(num1) > Number(num2) ? num1 : num2);
// }
// 이것이 처음 작성한 코드.. 무지성입니다.
// 하지만 역시 js 함수를 사용하면 더 간결하게 표현할 수 있다.
// split('')으로 각 문자를 분해 -> '123' => ['1', '2', '3']
// reverse()로 전체 문자를 뒤집음 -> ['3', '2', '1'];
// join('')으로 각 문자를 합침 -> '321'
// 또한 비교할 때 문자열을 굳이 숫자로 변환하지 않아도 비교가 된다.