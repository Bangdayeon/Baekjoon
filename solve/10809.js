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

// 일단 배열 만드는 걸 까먹었다.
// new Array(배열길이) 하고 .fill(채울 값)로 값을 채울 수 있다.

// 다음으로 아스키코드를 사용해야된다는 건 알겠는데 그걸 어떻게 사용하는가..
// 일단 'a'를 기준으로 charCodeAt을 찍어보면 알 수 있다. 알파벳순으로 1씩 커진다. 소문자니까.
// 그럼 구하려는 알파벳에서 'a'의 아스키코드를 빼면 알파벳상의 위치를 알 수 있다. 'b' - 'a' = 1, 'a' = 0 이런식
// 이건 내가 출력할 str의 위치가 된다.
// 입력한 단어의 길이만큼 반복하자.

// i는 내가 입력한 문자열의 인덱스번호가 되므로, str[idx]에 i값을 넣으면 해당 알파벳이 등장하는 위치가 되는 것이다.