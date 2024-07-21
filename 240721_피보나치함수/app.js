const fs = require("fs");
// let [n, ...numbers] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let [n, ...numbers] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n"); // trim 안해주면 제출오류

numbers = numbers.map((v) => Number(v));

const main = () => {
  const zeros = [1, 0, 1];
  const ones = [0, 1, 1];

  const largest = Math.max(...numbers);

  for (let i = 3; i <= largest; i++) {
    zeros[i] = zeros[i - 1] + zeros[i - 2];
    ones[i] = ones[i - 1] + ones[i - 2];
  }

  numbers.forEach((number) => console.log(`${zeros[number]} ${ones[number]}`));
};

main();
