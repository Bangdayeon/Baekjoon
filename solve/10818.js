const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  // let min=1000000;
  // let max=-1000000;

  // for(let i=0;i<n;i++){
  //   if(arr[i]<min){
  //     min=arr[i];
  //   }
  //   if(arr[i]>max) {
  //     max=arr[i];
  //   }
  // }
  let min=Infinity;
  let max=-Infinity;

  for(let num of arr) {
    if(num < min) min = num;
    if(num > max) max = num;
  }
  console.log(min, max);
}

solution(n, arr);

// for...of는 배열의 요소를 하나씩 순회하는 반복문이다.
// i 인덱스를 직접 쓰지 않아도 돼서 코드가 더 깔끔해진다.