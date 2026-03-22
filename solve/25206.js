const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split('\n');
let [...arr] = input;

function solution(arr) {
  const level = {'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0, 'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0.0}
  let top = 0;
  let bottom = 0;

  for(let i=0; i<arr.length; i++) {
    let item = arr[i].split(' ');
    if(item[2] === 'P') continue;
    top += item[1] * level[item[2]];
    bottom += Number(item[1]);
  }
  console.log(top/bottom)
}

solution(arr);

// 야호~! 알고리즘은 최적이라고 한다. O(N)
// 대신 안정성 및 가독성 중심으로 개선할 수 있는 부분이 있다.
// 일단 단순 배열의 반복이므로 for(const line of arr)와 같이 반복문 자체를 수정할 수 있다.
// 또한 구조분해를 통해 가독성 개선을 할 수 있다. 
// const [__dirname, creditStr, grade] = line.split(' ');

// 그리고 현재 문자열 배열에서 떼온 문자열에 수칙 연산을 하고 있으므로, Number로 명시적으로 숫자형으로 변환하여 안정성을 높일 수 있다.
// const credit = Number(creditStr);
// top += credit * level[grade];
// bottom += credit;

// 추가로 소수점 아래로 자를 때는 .toFixed(6)과 같이 toFixed() 함수를 사용할 수 있다.