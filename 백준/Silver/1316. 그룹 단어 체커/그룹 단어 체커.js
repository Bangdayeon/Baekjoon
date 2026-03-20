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