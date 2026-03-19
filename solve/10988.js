const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(char) {
  let n = char.split('').reverse().join('');
  console.log(char===n?1:0);
}

solution(input);


// 처음에 js 함수 사용해서 간단하게 풀었다가 그 정석적인 반복문 활용하는 것도 해보자 해서 해봄
// function solution(char) {
//   let answer = 1;
//   let mid = char.length-1;
  
//   for(let i=0;i<mid/2;i++){
//     if(char[i] !== char[mid-i]) answer = 0;
//   }
//   console.log(answer);
// }
// 얘도 별처럼 mid를 정해서 했다.
// 근데 여기서 개선할 수 있는 점이 있다.
// 일단 mid를 지정하긴 했지만 저걸 굳이 안해도 된다. 걍 len만 지정하고 /2하는게 더 직관적임
// 그리고 이미 answer = 0이 나오고도 반복문이 계속 돌아가게 되므로, if문에 걸리면 break도 주는 것이 좋다.

// function ex(char) {
//   let answer = 1;
//   let len = char.length;
//   for(let i=0;i<len/2;i++){
//     if(char[i] !== char[len - 1 - i]){
//       answer = 0;
//       break;
//     }
//   }
//   console.log(answer);
// }