const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;

function solution(n, arr) {
  let answer = 0;

  for(let i = 0; i<n; i++) {
    let check = true;
    let str = arr[i];
    let seen = new Set();

    seen.add(str[0]);

    for(let j=1; j<str.length; j++) {
      if(str[j] === str[j-1]) continue;

      if(seen.has(str[j])) {
        check = false;
        break;
      }

      seen.add(str[j]);
    }
    if(check) answer++;
  }

  console.log(answer);
}

solution(n, arr);

// function solution(n, arr) {
//   let check = true;
//   let answer = 0;

//   for(let i=0; i<n; i++) {
//     let str = arr[i];
//     let seen = new Array(str.length);
//     seen[0] = str[0];
//     for(let j=1; j<str.length; j++) {
//       if(str[j-1] === str[j]) continue;
//       else {
//         if(seen.includes(str[j])) {
//           check = false;
//           break;
//         } else {
//           seen[j] = str[j];
//           console.log(seen);
//           continue;
//         }
//       }
//     }
//     if(check) {
//       answer++;
//       check = true;
//     }
//   }

//   console.log(answer);
// }

// 처음에 작성한 코드.. 
// 일단 Array 대신 Set을 사용하면 불필요한 빈 칸이 없어진다.
// 다음으로 check 선언을 배열 내에서 하면 매번 초기화를 따로 할 필요가 없다.
// 그리고 continue가 현재 반복을 즉시 종료하고 다음 반복으로 넘어가는 키워드였다. 즉 else if로 나눌 필요가 없다는 사실
// Array, Set에서 사용가능한 함수가 다르다.
// Array : .add() 사용 불가능 / .includes() 사용 가능
// Set: .includes() 사용 불가능 / .has() 사용 가능
// 