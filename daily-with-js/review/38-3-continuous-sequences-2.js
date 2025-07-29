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

function findContinuousSequences(sequence = [], sequenceSum = 0) {
  let sum = 0;
  let p1 = 0;
  let count = 0;

  for (let p2 = 0; p2 < sequence.length; p2++) {
    sum += sequence[p2];

    while (sum > sequenceSum) {
      sum -= sequence[p1];
      p1++;
    }

    // *** sequenceSum보다 작다면 무조건 수열 개수를 구해야한다. ***
    count += p2 - p1 + 1;
  }

  return count;
}

const sequence = [1, 3, 1, 2, 3];
const sequenceSum = 5;
console.log(findContinuousSequences(sequence, sequenceSum));
