/**
 * 자릿수의 합
 *
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고 그 합이 최대인 자연수를 출력하시오.
 * 자릿수의 합이 동일한 경우 원래 숫자가 큰 숫자를 답으로 한다.
 *
 * ex) 235, 1234
 * -> 1234
 * 2+3+5 = 10
 * 1+2+3+4 = 10
 * 으로 두 합이 동일하기 때문에 실제 자연수의 숫자가 더 큰 1234이 정답이 된다.
 */

function maxOfDigits(numbers) {
  /** 내 첫 정답 -> string에서 number로 변환하기 */
  let max = 0;
  let answer = [];

  for (let number of numbers) {
    const numStringArray = String(number).split("");
    const sum = numStringArray.reduce((acc, cur) => (acc += Number(cur)), 0);

    if (max <= sum) {
      max = sum;
      answer.push(number);
    }
  }

  return answer.length > 1 ? Math.max(...answer) : answer[0];

  /** 강의 답안 */
  // 추후에 기입하기
}

console.log(maxOfDigits([128, 460, 603, 40, 521, 137, 123]));
