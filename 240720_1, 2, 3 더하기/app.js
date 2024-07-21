const fs = require("fs");
// let [n, ...numbers] = fs.readFileSync('dev/stdin').toString().split('\n');
let [n, ...numbers] = fs.readFileSync("input.txt").toString().split("\n"); // trim 안해주면 제출오류

numbers = numbers.map((v) => Number(v));

const largest = Math.max(...numbers);

const memo = new Array(largest + 1).fill(0);

memo[1] = 1;
memo[2] = memo[1] + 1;
memo[3] = memo[1] + memo[2] + 1;

for (let i = 4; i <= largest; i++) {
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
}

numbers.forEach((num) => {
  console.log(memo[num]);
});
