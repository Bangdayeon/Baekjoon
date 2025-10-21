const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [h, m, t] = input.map(Number);

function solution(h, m, t) {
  // h += Math.trunc(t/60);
  // m += t%60;

  // if(m>59) {m -= 60; h++;}
  // if(h>23) h % 24;

  // console.log(`${h} ${m}`)

  h = (h + Math.trunc((t+m)/60)) % 24;
  m = (m + t) % 60;

  console.log(`${h} ${m}`)
}

solution(h, m, t);
// 시간과 같이 순환하는 수를 작성할 때는 %를 사용하는 것이 안전하다.
// h의 경우, 현재 시각에 최종 분(t + m)을 더하여 % 연산을 진행
// m의 경우, 현재 분에 t을 더하여 % 연산을 진행