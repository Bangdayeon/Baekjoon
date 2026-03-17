const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  console.log(n.charCodeAt());
}

solution(input);

// 보고 으잉?? 했다.
// 이건 백퍼 함수 사용하는 문제인데 난 아스키코드로 변환하는 함수가 몰라서 검색했다.
// charCodeAt()은 문자을 아스키코드로 변환해주는 함수이다.
// 만약 문자를 여러개 입력하면 가장 첫글자만 변환하므로 charCodeAt(0), charCodeAt(1) 이런식으로 하나하나 다뤄주어야 한다.
// 또한 숫자는 변환이 불가하기 때문에 항상 문자열 입력을 해야한다.