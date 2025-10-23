const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = Number(require("fs").readFileSync(filePath).toString().trim());

function solution(n) {
  for(let i=1;i<=n;i++){
    console.log('*'.repeat(i));
  }
}
solution(input);