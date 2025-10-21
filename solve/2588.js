const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);
const [n, m] = input;

function solution(n, m) {
  const digits = String(m).split("").map(Number);
  console.log(`${n*digits[0]}\n${n*digits[1]}\n${n*digits[2]}\n${n*m}`);
  // const a = m%10;
  // const b = (m%100-a)/10;
  // const c = Math.trunc(m/100);
  // console.log(`${n*a}\n${n*b}\n${n*c}\n${n*m}`);
}

solution(n, m);

// 백준 사이트에서 문제 이미지가 보이지 않아서 그냥 넘길랬는데 '도전중'을 보고 찝찝해서 다시 풀어봤다.
// 결과를 찬찬히 보니 각 자리수 별로 곱한 값과 전체를 곱한 값을 구하는 문제인 것 같았다.
// 단순 계산으로 먼저 풀어봤으나 가독성이 떨어지는 것 같아, 문자열로 변환하여 풀이하는 방식을 추가로 작성해봤다.
// 1. String(m) : 숫자 m을 문자열로 변환 (385 -> "385")
// 2. split("") : 문자열을 한 글자씩 나눈 배열로 변환 ("385" -> ["3", "8", "5"])
// 3. map(Number) : 2에서 만든 배열에 Number함수를 적용하여 숫자로 변환 (["3", "8", "5"] -> [3, 8, 5])
// console.log()는 시간이 오래 걸리는 작업이라고 들어, for문으로 여러번 출력하지 않고 한번에 출력했다.