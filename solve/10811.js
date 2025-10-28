const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, m, ...arr] = input.map(Number);

const basket = Array.from({length:n},(_,i)=>i+1);

for(let i=0;i<arr.length;i+=2) {
  let a = arr[i]-1;
  let b = arr[i+1]-1;

  // for(let j=a;j<b;j++) {
  //   [basket[j], basket[j+1]] = [basket[j+1], basket[j]];
  // }

  let left = a;
  let right = b;
  while(left < right) {
    [basket[left], basket[right]] = [basket[right], basket[left]];
    left++;
    right--;
  }
}

console.log(basket.join(' '));

// 못 풀었다.. 이런 형식을 기억해둬야겠다.
// for(let j=a;j<b;j++) 여기에서는 구간 전체를 뒤집지 못하고 인접한 뒤집기만 할 수 있었다.
// for문만으로도 할 수는 있지만 복잡해진다.

// while문을 사용해서 left, right를 지정하고 만날 때까지 각 수를 좁혀나간다.
// 그동안 뒤집기는 양 끝 값이 되므로 완전한 뒤집기가 된다.