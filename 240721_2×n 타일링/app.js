const fs = require("fs");
// const n = fs.readFileSync('dev/stdin').toString().trim();
const n = Number(fs.readFileSync("input.txt").toString().trim());

const main = () => {
  const memo = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }

  console.log(memo[n]);
};

main();
