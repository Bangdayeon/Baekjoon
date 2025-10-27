const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, m, ...arr] = input.map(Number);

function solution(m, arr) {
  const basket=[];
  for(let i=0;i<n;i++) basket[i]=i+1;
  
  for(let i=0; i<arr.length; i+=2) {
    let temp;
    temp = basket[arr[i]-1];
    basket[arr[i]-1] = basket[arr[i+1]-1];
    basket[arr[i+1]-1] = temp;
  }
  console.log(basket.join(' '));
}

solution(m, arr);