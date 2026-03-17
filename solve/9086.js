const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let n = Number(input[0]);
let arr = input.slice(1);

function solution(n, arr) {
  let a=0;
  for(let i=0;i<n;i++){
    const str = arr[i];
    console.log(str[0]+str[str.length-1]);
  }
}

solution(n, arr);

// 백준 오랜만에 했더니 상황에 따라 인풋도 바꿔야되는 것 까먹었었음.
// 그리고 너무 복잡하게 생각해서 문제도 못풀었다.
// 오케오케 감잡기