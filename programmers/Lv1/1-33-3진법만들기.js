/*
10진수를 특정 진법으로 변환
const result = 45
result.toString(3) //1200 => 3진법으로 변환
result.toString(16) //2d => 16진법으로 변환

특정 진법의 수를 10진수로 변환
const result = 1200
Number.parseInt(result, 3)      //7 => 3진법의 수를 10진수로 변환
*/

function solution(n) {
  const result = n.toString(3).split("").reverse().join("");
  return Number.parseInt(result, 3);
}
