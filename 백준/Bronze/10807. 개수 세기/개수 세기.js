const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  if((n<1 || n>100)|| (arr[n]<-100||arr[n]>100)) return;
  let count = 0;

  jungs = arr.slice(0, n);
  for(let i=0;i<n;i++) {
    if(arr[n] === jungs[i]) count++;
  }

  console.log(count);
}

solution(n, arr);