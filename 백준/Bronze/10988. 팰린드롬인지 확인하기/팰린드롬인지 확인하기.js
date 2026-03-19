const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(char) {
  let answer = 1;
  let mid = char.length-1;
  
  for(let i=0;i<mid/2;i++){
    if(char[i] !== char[mid-i]) answer = 0;
  }
  console.log(answer);
}

solution(input);