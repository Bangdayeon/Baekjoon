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

// 내가 제일 싫어하는 별문제.. 못풀었다..
// 별찍기 = 대칭 -> 거리 -> 수식화 이렇게 3단계로 풀면 된다고 한다.
// 일단 다이아모양이므로 줄 개수는 두배-1이다. (가운데 가장 많은 부분을 한번만 출력하기 때문)
// 중앙은 n - 1이다.
// n=4) 1 2 3 4 5 6 7 -> 4
// n=5) 1 2 3 4 5 6 7 8 9 -> 5
// dist는 중앙과 위아래 사이의 거리가 된다.
// Math.abs는 절댓값 함수로, Math.abs(i-mid)로 중앙과 현재 출력할 줄 사이의 거리를 구할 수 있다.
// space는 거리만큼 출력하면 이후 출력할 별이 딱 정중앙에 위치하게 된다.
// star는 거리와 반비례하며, 홀수로 출력되므로, 2n-1을 사용한다.
// 이 때 n - dist로 고정된 n에서 중앙으로 갈수록 작아지는 dist를 빼면 반비례가 된다.
// 마지막으로 .repeat을 활용해서 출력하면 끝..