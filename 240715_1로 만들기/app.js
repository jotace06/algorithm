// https://www.acmicpc.net/problem/1463
const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

const main = () => {
  const memo = new Array(input + 1).fill(0);

  let n = 2;

  while (n <= input) {
    memo[n] = memo[n - 1] + 1;

    if (n % 2 === 0) {
      memo[n] = Math.min(memo[n], memo[n / 2] + 1);
    }

    if (n % 3 === 0) {
      memo[n] = Math.min(memo[n], memo[n / 3] + 1);
    }

    n++;
  }

  return memo[input];
};

console.log(main());
