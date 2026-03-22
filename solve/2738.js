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

// 2차원 배열 만들어보려다 이상한 것 같아서 어떻게 푸는지 찾아봤다.
// 일단 a, b를 정의하는 부분을 이해해야한다.
// 현재 arr에는 A행렬, B행렬이 순서대로 들어가있다.
  
// 일단 A행렬부터 보자.
// 1차원으로 입력받은 A행렬을 2차원으로 펼치면 아래와 같다.
// 1 1 1
// 2 2 2
// 0 1 0
// 한 행에 m개가 있으며, i번째 행까지 오려면 i*m개를 건너뛰어야 한다.
// 건너뛴 행에서의 j번째로 가려면 + j를 해야한다.
// 따라서 A행렬의 각 index는 i * m + j가 되는 것이다.

// 다음으로 B행렬을 2차원으로 펼쳐보자.
// 3 3 3
// 4 4 4
// 5 5 100
// B는 A의 뒤에 붙어있다.
// 따라서 B의 시작위치는 n*m이 되므로 i * m + j의 앞에 n*m을 더해준다.
// arr[A index], arr[B index]를 더한 값을 row에 push해주면 행렬의 덧셈이 된다.
// row = [4, 4, 4, 6, 6, 6, ...] 이렇게 값이 들어가는 것이다.

// 결과를 그리기 위해서 row의 각 값에 ' '을 붙이고 m마다 '\n'도 넣어준다.
// 마지막으로 result에는 trim을 안붙여도 잘 나오지만, 불필요한 공백으로 인한 오답이 발생할 수 있으므로 붙이면 깔끔하다.
// "1 2 3\n4 5 6\n" -> "1 2 3\n4 5 6"