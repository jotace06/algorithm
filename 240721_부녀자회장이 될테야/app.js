const fs = require("fs");
// let [n, ...numbers] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let [n, ...numbers] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const main = () => {
  const cases = [];

  numbers.forEach((number, idx) => {
    number = Number(number);
    const caseIdx = Math.floor(idx / 2);
    const isK = idx % 2 === 0;

    if (isK) {
      cases.push([number]);
    } else {
      cases[caseIdx].push(number);
    }
  });

  const memo = Array.from({ length: 15 }, () => []);

  for (let i = 1; i < 15; i++) {
    memo[0][i] = i;
  }

  for (let i = 1; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (j <= 1) {
        memo[i][j] = j;
        continue;
      }
      memo[i][j] = memo[i][j - 1] + memo[i - 1][j];
    }
  }

  cases.forEach(([k, n]) => {
    console.log(memo[k][n]);
  });
};

main();
