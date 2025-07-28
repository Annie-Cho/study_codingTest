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

/**
 * 강의 풀이
 */
function findContinuousSequences(sequence = [], sequenceSum = 0) {
  let p1 = 0;
  let sum = 0;
  let answer = 0;

  for (let p2 = 0; p2 < sequence.length; p2++) {
    sum += sequence[p2];

    while (sum > sequenceSum) {
      sum -= sequence[p1];
      p1++;
    }

    // 모든 유효한 부분 수열의 개수를 구하는 공식. 투포인터 문제에서 잘 사용된다.
    answer += p2 - p1 + 1;
  }

  return answer;
}

const sequence = [1, 3, 1, 2, 3];
const sequenceSum = 5;
console.log(findContinuousSequences(sequence, sequenceSum));
