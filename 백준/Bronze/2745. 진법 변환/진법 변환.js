const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

function solution(arr) {
  let n = arr[0];
  let b = Number(arr[1]);
  let answer = 0;

  for(let i=0;i<n.length; i++) {
    let char = n[i];
    let value;

    if(char >= 'A') {
      value = char.charCodeAt(0) - 55;
    } else {
      value = Number(char);
    }

    answer = answer * b + value;
  }
  console.log(answer);
}

solution(input);