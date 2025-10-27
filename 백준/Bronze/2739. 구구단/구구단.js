const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = Number(require("fs").readFileSync(filePath).toString().trim());

function solution(n) {
  const results = [];
  for(let i=1;i<10;i++) {
    console.log(`${n} * ${i} = ${i*n}`);
  }
}

solution(input);