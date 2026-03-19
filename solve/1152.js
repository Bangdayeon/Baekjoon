const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(arr) {
  console.log(arr === "" ? 0 : input.split(" ").length);
}

solution(input);

// 아니 난 안틀렸는데 백준이 틀렸다 함;
// 그래 머.. 애초에 간단한 문제니까..그러려니..
// 원래 input 끝에 .split(" ") 붙여서 arr length를 셌는데 그게 뭐 안먹힐 수도 있다고 그런다.
// function solution(arr) { console.log(arr.length); }