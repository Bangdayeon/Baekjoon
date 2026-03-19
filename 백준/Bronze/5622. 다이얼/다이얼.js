const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  const dial = {ABC: 3, DEF:4, GHI:5, JKL: 6, MNO: 7, PQRS: 8, TUV: 9, WXYZ:10};
  let answer = 0;
  for(let char of n){
    for(let key in dial) {
      if(key.includes(char)){
        answer += dial[key];
        break;
      }
    }
  }
  console.log(answer);
}

solution(input);