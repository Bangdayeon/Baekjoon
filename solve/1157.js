const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  let max = 0;
  let result = '';
  let dup = false;
  const count = new Array(26).fill(0);

  for(let ch of n.toUpperCase()){
    let idx = ch.charCodeAt(0)-65;
    count[idx]++;

    if(count[idx] > max){
      max = count[idx]
      result = ch;
      dup = false;
    } else if (count[idx] === max) {
      dup = true;
    }
  }
  console.log(dup ? '?' : result);
}

solution(input);

// 모르겠다!
// 1. toUpperCase()로 대문자로 전부 바꾸기
// 2. 배열 사용하기 -> map 사용하는 것보다 여기서는 단순 배열이 빠르다고 한다.