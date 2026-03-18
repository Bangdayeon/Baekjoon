const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [n, arr] = input;

function solution(n, arr) {
  let a = 0;
  
  for(let i=0;i<n;i++){
    a += Number(arr[i]);
  }
  console.log(a);
}

solution(n, arr);

// 아 입력받는 거 때문에 자꾸 시간 잡아먹게 됨
// 일단 처음에는 숫자로 입력받았더니 7000000000000000000000000에서 이걸 7e+24였나 그걸로 받아버리길래 NaN이 떠서
// 문자열로 입력받도록 수정했다.