const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let arr = input;
arr.sort((a,b)=>b-a);
const isSame = new Set(arr);
if(isSame.size ===1) console.log(10000+arr[0]*1000);
else if(isSame.size === 2) console.log(1000+arr[1]*100);
else console.log(arr[0]*100)