const fs = require("fs");
    const path = require("path");
    const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
    const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

    function solution(arr) {
      const [a, b] = input;
      console.log(`${a+b}\n${a-b}\n${a*b}\n${Math.floor(a/b)}\n${a%b}`);
    }

    solution(input);
  