const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [...arr] = input;

function solution(arr) {
  console.log(arr.join('\n'));
}


solution(arr);


// 처음에 위와같이 바로 작성했는데 결과 나오는데 엄청 오래걸리길래 for문으로도 작성해봤다.
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//   }
// 근데 메모리도 더들고 시간도 좀 더 오래걸리는 것 같다. 그냥 join 쓰는 게 맞는 것 같다.