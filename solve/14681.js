const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);
const [n, m] = input;

function solution(n, m) {
  const [x, y] = input;

  if(x>0 && y>0) console.log(1);
  else if(x<0 && y>0) console.log(2);
  else if(x<0 && y<0) console.log(3);
  else console.log(4);
}

solution(n, m);

// 백준에 자꾸 런타임에러 (EACCES)로 실패처리 된다. -.-