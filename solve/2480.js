const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  arr.sort((a,b)=>b-a);
  const isSame = new Set(arr);
  if(isSame.size ===1) console.log(10000+arr[0]*1000);
  else if(isSame.size === 2) console.log(1000+arr[1]*100);
  else console.log(arr[0]*100)
}

solution(input);
// Set은 중복을 허용하지 않는다.
// 키 없이 값이 저장되며, 단순 배열이 아니므로 아이템 개수를 얻기 위해서 size 메서드를 사용해야한다.
// sort().reverse()는 배열 요소를 문자열 크기 역순으로 정렬한다. 해당 문제는 주사위여서 그냥 사용할 수 있었다.
// 안전한 정렬을 하려면 sort((a,b) => b - a)와 같은 조건을 작성해야한다.