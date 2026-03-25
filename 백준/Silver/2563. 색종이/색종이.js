const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split('\n');
let [n, ...arr] = input;

function solution(n, arr) {
  let black = new Array(100).fill(0);
  let answer = 0;

  for(let i=0;i<100;i++) {
    black[i] = new Array(100).fill(0);
  }

  for(let i=0; i<n; i++) {
    let white = arr[i];
    let [startx, starty] = white.split(' ');
    let [endx, endy] = [Number(startx)+10, Number(starty)+10];
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