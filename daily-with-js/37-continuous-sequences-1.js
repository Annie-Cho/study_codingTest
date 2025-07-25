/**
 * 연속 부분수열 1
 *
 * N개의 수로 이루어진 수열에서 연속 부분 수열의 합이 M이 되는 경우가 몇 번인지 구하시오.
 *
 * ex) N = 8, M = 6
 * 1 2 1 3 1 1 1 2
 * => 3 => {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}
 */

function findContinuousSequences(numbers = [], sum = 0) {
  let p1 = 0;
  let total = 0;
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];

    if (total === sum) answer++;
    while (total >= sum) {
      total -= numbers[p1];
      p1++;

      if (total === sum) answer++;
    }
  }

  return answer;

  /* while문 사용
  let p1 = 0;
  let p2 = 0;
  let total = numbers[p2];
  let answer = 0;

  while (p2 < numbers.length) {
    if (total === sum) {
      answer++;
      total -= numbers[p1];
      p1++;
    } else if (total < sum) {
      p2++;
      total += numbers[p2];
    } else {
      total -= numbers[p1];
      p1++;
    }
  }

  return answer;
  */
}

const numbers = [1, 2, 1, 3, 1, 1, 1, 2];
const sum = 6;
console.log(findContinuousSequences(numbers, sum));
