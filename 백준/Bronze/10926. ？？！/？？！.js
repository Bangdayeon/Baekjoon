const fs = require("fs") ;
    const path = require("path");
    const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "run", "input.txt");
    const input = fs.readFileSync(filePath).toString().trim();

    function solution(n) {
      const id = input;
      if(id.length > 47) id.split(0, 46);
      console.log(`${id}??!`);
    }

    solution(input);
  