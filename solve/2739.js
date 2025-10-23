const filePath = process.platform === "linux" ? "/dev/stdin" : require("path").join(__dirname, "run", "input.txt");
const input = Number(require("fs").readFileSync(filePath).toString().trim());

function solution(n) {
  for(let i=1;i<10;i++) {
    console.log(`${n} * ${i} = ${i*n}`);
  }
}

solution(input);

// console.log()는 시간이 오래 걸리는 작업이어서 최대한 적게 사용하는 것이 좋다고 들었다.
// 처음에는 results[] 배열을 선언해서 거기에 문자열들을 저장하려고 했는데 출력만을 위해서 이렇게까지 하는 게 맞나 생각이 들었다.
// 그래서 그냥 console.log()를 9번 출력했는데 걸린 시간이 차이가 없었다.
// 엄청 많은 것이 아니면 괜찮은 걸까?
// - 일반적으로 수십 ~ 수천번 이하의 호출은 성능에 영향이 거의 없다고 한다.
