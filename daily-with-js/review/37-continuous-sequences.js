/**
 * 연속 부분수열 1
 *
 * N개의 수로 이루어진 수열에서 연속 부분 수열의 합이 M이 되는 경우가 몇 번인지 구하시오.
 *
 * ex) N = 8, M = 6
 * 1 2 1 3 1 1 1 2
 * => 3 => {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}
 */

function findContinuousSequences(sequence = [], target = 0) {
  let p1 = 0;
  let sum = 0;
  let answer = 0;

  for (let p2 = 0; p2 < sequence.length; p2++) {
    sum += sequence[p2];

    if (sum === target) answer++;

    while (sum >= target) {
      sum -= sequence[p1];
      p1++;

      if (sum === target) answer++;
    }
  }

  return answer;
}

const sequence = [1, 2, 1, 3, 1, 1, 1, 2];
const target = 6;
console.log(findContinuousSequences(sequence, target));
