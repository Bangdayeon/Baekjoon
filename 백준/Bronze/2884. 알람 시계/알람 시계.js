const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  let [h, m] = input;
  if(m>=45) m -= 45;
  else {
    if(h==0) h=23;
    else h--;
    m +=15;
  }
  console.log(`${h} ${m}`)
}

solution(input);