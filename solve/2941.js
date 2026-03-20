const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  n = n.replace(/dz=/g, 'X');
  n = n.replace(/c=|c-|d-|lj|nj|s=|z=/g, 'X');

  console.log(n.length);
}

solution(input);

// function solution(n) {
//   let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
//   let answer = 0;

//   for(let i=0; i<n.length - 1; i++) {
//     let check = n[i]+n[i+1];
//     let tripleCro = n[i]+n[i+1]+n[i+2];

//     if(croatia.includes(tripleCro)) {
//       answer++;
//       i+=2;
//       if (i===n.length-2) answer++;
//     } else if(croatia.includes(check)) {
//       answer++;
//       i++;
//       if (i===n.length-2) answer++;
//     } else {
//       answer++;
//       if (i===n.length-2) answer++;
//     }
//   }

//   console.log(answer);
// }

// 내가 열심히 생각해서 썼는데 저건 틀린 코드이다. dz= 경우가 if( i === n.length - 2 )에 걸리지 않기 때문이다.
// 반복문을 쓸거면 while을 사용해서 index를 아예 내가 다루는 편이 좋다고 한다. 하지만 그래도 경우의 수가 너무 많아 복잡해진다.
// 가장 간단한 방법이 있는데, 바로 replace 함수를 사용해서 치환하는 것이다.
// 이 때 dz=는 먼저 치환해야 한다. z=에 걸릴 수 있기 때문..