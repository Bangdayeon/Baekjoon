const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  let str = new Array(26).fill(-1);
  for(let i=0;i<n.length;i++){
    const idx = n[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if(str[idx]===-1){
      str[idx] = i;
    }
  }
  console.log(str.join(" "));
}

solution(input);