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

// 잘 모르겠어서 힌트를 얻어서 진행했다.
// 1. 입력을 문자열 배열로 받는다
// 2. 최대 길이를 구한다.
// 3. col 기준으로 돌면서 각 row를 순회하며 '존재할 경우 이어붙인다'
// 해서 일단 문자열 배열로 입력을 받았고, 최대길이는 한 단어당 최대 15글자라는 조건이 있긴했지만 쓸모없이 도는 건 아닐까 해서
// 그냥 따로 max로 구해봤다.

// 그럼 이제 0부터 max까지 해당하는 열에 문자가 있는지 체크하고, 존재할 경우 answer에 이어붙인다.
