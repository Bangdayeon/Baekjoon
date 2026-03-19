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

// 바보같이 풀다가 힌트를 봤다.
// function solution(n) {
//   let answer = 0;
//   for(let i=0;i<n.length;i++){
//     if(n[i] === 'A'||'B'||'C') {answer += 1;}
//     else if(n[i]==='D'||'E'||'F') {answer += 2;}
//     else if(n[i]==='G'||'H'||'I') {answer += 3;}
//     else if(n[i]==='J'||'K'||'L') {answer += 4;}
//     else if(n[i]==='M'||'N'||'O') {answer += 5;}
//     else if(n[i]==='P'||'Q'||'R' || 'S') {answer += 6;}
//     else if(n[i]==='T'||'U'||'V') {answer += 7;}
//     else if(n[i]==='W'||'X'||'Y'||'Z') {answer += 8;}
//     else  {answer += 0;}
//     console.log(n[i]);
//   }
//   console.log(answer+2);
// }
// 심지어 이거 문법적으로 틀려서 저것도 답이 없었음ㅎㅎ
// 일단 물론 이상하다고 생각했지만 이건 key를 사용해서 풀 수 있다. 각 번호마다 매칭된 알파벳 개수가 일정하지 않으므로
// 알파벳을 묶어서 key:value로 매핑해준다. ABC:3 이런식으로..
// 또한 반복문에서도 let a of b를 사용할 수 있다. let 00;~~ 이거 말고..
// n은 문자열, 즉 배열이므로 let char of n으로 각 글자를 뽑아서 사용할 수 있으며, dial의 key도 마찬가지이다.
// key가 char을 포함하고 있다면 answer에 해당하는 dial[key] 값을 더한다.