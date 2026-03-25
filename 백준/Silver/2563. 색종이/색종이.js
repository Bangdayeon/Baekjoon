const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split('\n');
let [n, ...arr] = input;

function solution(n, arr) {
  let black = Array.from({length: 100}, () => Array(100).fill(0));
  let answer = 0;

  for(let i=0; i<n; i++) {
    let [startx, starty] = arr[i].split(' ').map(Number);
    let [endx, endy] = [startx+10, starty+10];
    
    for(let j=startx; j<endx; j++) {
      for(let k=starty; k<endy; k++) {
        black[j][k] = 1;
      }
    }
  }

  for(let i=0;i<100;i++) {
    for(let j=0;j<100;j++) {
      if(black[i][j]) answer++;
    }
  }

  console.log(answer);
}

solution(n, arr);