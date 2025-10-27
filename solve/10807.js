const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  const nums = arr.slice(0, n);
  const target = arr[n];
  // let count = 0;

  // for(let i=0;i<n;i++) {
  //   if(target === nums[i]) count++;
  // }

  const count = nums.filter(num=>num===target).length;
  console.log(count);
}

solution(n, arr);

// filter는 배열 메서드로, 조건을 만족하는 요소만 골라 새 배열로 변환한다.
// 여기서 조건은 num===target으로, 해당 조건에 맞는 요소를 골라 배열을 만들고,
// 배열.length를 count에 저장하여 출력한다.