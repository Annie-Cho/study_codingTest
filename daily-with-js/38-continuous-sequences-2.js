/**
 * 연속 부분수열 2
 *
 * N개의 수로 이루어진 수열이 있다.
 * 연속 부분수열의 합이 M 이하가 되는 경우가 몇 번있는지 구하시오.
 *
 * ex) N=5, M=5
 * 1, 3, 1, 2, 3
 * => 10
 * => {1}, {3}, {1}, {2}, {3},
 * {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}
 */

function findContinuousSequences(sequence = [], target = 0) {
  let p1 = 0;
  let sum = 0;
  let answer = 0;

  for (let p2 = 0; p2 < sequence.length; p2++) {
    sum += sequence[p2];

    while (sum > target) {
      sum -= sequence[p1];
      p1++;
    }

    answer += p2 - p1 + 1;
  }

  return answer;

  /* while문 사용
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  let answer = 0;

  while (p1 <= sequence.length) {
    sum += sequence[p2];

    if (sum <= target) {
      answer++;
      p2++;
    }

    if (sum > target || p2 === sequence.length) {
      sum = 0;
      p1++;
      p2 = p1;
    }
  }

  return answer;
  */
}

const sequence = [1, 3, 1, 2, 3];
const target = 5;
console.log(findContinuousSequences(sequence, target));
