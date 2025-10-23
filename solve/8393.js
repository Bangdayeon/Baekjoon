const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = Number(require("fs").readFileSync(filePath).toString().trim());

function solution(n) {
  let result=0;
  for(let i=1;i<=n;i++){
    result +=i;
  }
  console.log(result);
}

solution(input);