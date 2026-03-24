const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split('\n');
const [...arr] = input;

function solution(arr) {
  let answer = '';
  let max = 0;

  for(let i=0;i<arr.length;i++) {
    if(arr[i].length > max) max = arr[i].length;
  }

  for(let col = 0; col<max; col++) {
    for(let row = 0; row<5; row++) {
      if(arr[row][col]) answer+= arr[row][col];
    }
  }
  console.log(answer.trim(''));
}

solution(arr);