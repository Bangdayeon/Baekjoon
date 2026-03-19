const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = Number(require("fs").readFileSync(filePath).toString().trim());

function solution(n) {
  let mid = n-1;
  for (let i = 0; i < n * 2 - 1; i++) {
    let dist = Math.abs(i-mid);
    let space = dist;
    const star = 2 * (n - dist) - 1;

    console.log(' '.repeat(space) + '*'.repeat(star));
  }
}

solution(input);