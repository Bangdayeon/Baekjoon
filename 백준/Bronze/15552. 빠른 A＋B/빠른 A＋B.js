const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);

let result = [];
for(let i=0;i<n*2;i+=2){
    result.push(arr[i]+arr[i+1]);
}
console.log(result.join('\n'));