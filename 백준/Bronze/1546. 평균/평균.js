const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let [n, ...arr] = input.map(Number);


  let max = 0;
  let average = 0;

  for(let num of arr) {
    if(max<num)max=num;
  }
  for(let i=0;i<n;i++){
    average += arr[i]/max*100;
  }
  console.log(average/n);
