const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);
let [n, m, ...arr] = input.map(Number);

function solution(n, m, arr) {
  let result = '';

  for(let i=0; i< n; i++) {
    let row = [];
    for(let j = 0; j<m; j++) {
      const a = arr[i*m+j];
      const b = arr[n*m+i*m+j];
      row.push(a+b);
    }
    result += row.join(' ') + '\n';
  }
  console.log(result.trim());
}

solution(n, m, arr);