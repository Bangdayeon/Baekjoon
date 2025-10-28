const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, m, ...arr] = input.map(Number);

const basket = Array.from({length:n},(_,i)=>i+1);

for(let i=0;i<arr.length;i+=2) {
  let a = arr[i]-1;
  let b = arr[i+1]-1;

  let left = a;
  let right = b;
  while(left < right) {
    [basket[left], basket[right]] = [basket[right], basket[left]];
    left++;
    right--;
  }
}

console.log(basket.join(' '));
