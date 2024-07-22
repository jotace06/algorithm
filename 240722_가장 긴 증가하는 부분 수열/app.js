const fs = require("fs");
// let [n, ...numbers] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let [n, numbers] = fs.readFileSync("input.txt").toString().trim().split("\n");

n = Number(n);
numbers = numbers.split(" ").map(Number);

const main = () => {
  const memo = new Array(n).fill(1);

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
      }
    }
  }

  console.log(Math.max(...memo));
};

main();
