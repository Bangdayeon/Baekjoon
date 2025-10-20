// create.js
const fs = require("fs");
const path = require("path");

const problemNumber = process.argv[2];
const inputType = process.argv[3] || "2"; // 기본: 한줄 여러값 입력

if (!problemNumber) {
  console.error("❌ 문제 번호를 입력해주세요. (예: npm run new 1000 [입력유형])");
  console.error("입력유형: 1=한줄, 2=공백, 3=여러줄, 4=개수+공백배열");
  process.exit(1);
}

const solveDir = path.join(__dirname, "solve");
const runDir = path.join(solveDir, "run");
const jsFilePath = path.join(solveDir, `${problemNumber}.js`);

// 1. 폴더 존재 확인 및 생성
if (!fs.existsSync(solveDir)) fs.mkdirSync(solveDir);
if (!fs.existsSync(runDir)) fs.mkdirSync(runDir);

// 2. 이미 파일이 존재하는지 확인
if (fs.existsSync(jsFilePath)) {
  console.error(`⚠️ ${problemNumber}.js 파일이 이미 존재합니다.`);
  process.exit(1);
}

// 3. 입력 형식에 따른 템플릿
const templates = {
  1: `
const fs = require("fs") ;
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  console.log(n);
}

solution(input);`,
  2: `
const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(arr) {
  console.log(arr);
}

solution(input);`,
  3: `
const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\\n").map(Number);
const [n, ...arr] = input;

function solution(n, arr) {
  console.log(n, arr);
}

solution(n, arr);`,
  4: `
const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split(/\\s+/);
let [n, ...arr] = input.map(Number);

function solution(n, arr) {
  console.log(n, arr);
}

solution(n, arr);`,
};

const template = templates[inputType] || templates[0];

// 4. 파일 생성
fs.writeFileSync(jsFilePath, template.trimStart());
console.log(`✅ create ${problemNumber}.js`);
