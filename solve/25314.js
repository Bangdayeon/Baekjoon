const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = Number(require("fs").readFileSync(filePath).toString().trim());

function solution(n) {
  let result = '';
  for(let i=4;i<=n; i+=4){
    result +='long ';
  }
  console.log(`${result}int`);
}

solution(input);

// const count = Math.floor(n/4);
// console.log('long '.repeat(count) + 'int);
// 이렇게 수정하면 의도 표현이 명확하고 효율적이게 된다.
// 혹은 더 간결하게 작성할 수도 있다.

// console.log("long ".repeat(n/4)+'int');

// repeat()을 인지하자.