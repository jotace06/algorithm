// https://www.acmicpc.net/problem/2839
const fs = require("fs");
const weight = fs.readFileSync("input.txt").toString().trim();

const _5kg = 5;
const _3kg = 3;

let _5kgCnt = parseInt(weight / _5kg);
let remainder = weight % _5kg;

while (_5kgCnt >= 0) {
  if (remainder % _3kg === 0) break;

  _5kgCnt--;
  remainder += _5kg;
}

if (_5kgCnt >= 0) {
  console.log(_5kgCnt + remainder / _3kg);
} else {
  console.log(-1);
}
