/**
 * 연속 부분수열 1
 *
 * N개의 수로 이루어진 수열에서 연속 부분 수열의 합이 M이 되는 경우가 몇 번인지 구하시오.
 *
 * ex) N = 8, M = 6
 * 1 2 1 3 1 1 1 2
 * => 3 => {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}
 */

/**
 * 내 풀이
 * while문과 if문을 사용하여 각 조건문의 의미와 동작을 빠르게 이해할 수 있음
 * 위 사유를 토대로 강의 풀이보다 내 풀이가 조금 더 낫지 않을까 생각이 듦.
 */
function findContinuousSequences(sequence = [], sequenceSum = 0) {
  let p1 = 0;
  let p2 = 0;
  let sum = 0;
  let answer = 0;

  while (p1 <= sequence.length && p2 <= sequence.length) {
    if (sum === sequenceSum) {
      answer++;
      sum -= sequence[p1++];
    } else if (sum > sequenceSum) {
      sum -= sequence[p1++];
    } else {
      sum += sequence[p2++];
    }
  }

  return answer;
}

/**
 * 강의 풀이
 * for문과 while문을 사용하여 중복되는 코드를 줄임.
 * 대신, 개인적인 생각에 각 동작이 한 눈에 들어오지 않는다는 단점이 있음.

function findContinuousSequences(sequence = [], sequenceSum = 0) {
  let p1 = 0;
  let sum = 0;
  let answer = 0;

  for (let p2 = 0; p2 < sequence.length; p2++) {
    sum += sequence[p2];

    if (sum === sequenceSum) answer++;

    while (sum > sequenceSum) {
      sum -= sequence[p1];
      p1++;

      if (sum === sequenceSum) answer++;
    }
  }

  return answer;
}
   */

const sequence = [1, 2, 1, 3, 1, 1, 1, 2];
const sequenceSum = 6;
console.log(findContinuousSequences(sequence, sequenceSum));
