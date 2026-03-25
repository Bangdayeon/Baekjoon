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

// 정답 금방 맞췄다!
// 아 맞아 사실 처음에 딱 봤을 때 감이 안잡혀서 아이디어를 검색했다..
// 아이디어는 100x100 도화지라는 array를 정의하고, 그걸 0과 1로 만든다는 아이디어이다.

// 반복문을 너무 많이 사용한 것 같은게 걸리는데, js에서 2차원 배열을 초기화할 때는 아래와 같이 할 수도 있다.
// 내가 쓴 것: 
// let black = new Array(100).fill(0);
// for(let i=0;i<100;i++) {
//   black[i] = new Array(100).fill(0);
// }
// let black = Array.from({length: 100}, () => Array(100).fill(0));

// 또한 startx, starty를 처음에 지정할 때 단순 split(' ')을 사용했는데 이러면 얘가 문자열로 시작하게 된다.
// let [startx, starty] = white.split(' ');
// let [endx, endy] = [Number(startx)+10, Number(starty)+10];

// 여기서 아래와 같이 startx, starty부터 숫자로 지정하여 안정성을 높일 수 있다.
// let [startx, starty] = arr[i].split(' ').map(Number);
// let [endx, endy] = [startx+10, starty+10];