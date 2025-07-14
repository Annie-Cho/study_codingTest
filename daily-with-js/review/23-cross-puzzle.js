/**
 * 격자판 최대합
 *
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력한다.
 */

function findMaxCrossPuzzle(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let length = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < length; j++) {
      // 행의 합
      sum1 += arr[i][j];
      // 열의 합
      sum2 += arr[j][i];
    }

    max = Math.max(max, sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < length; i++) {
    // 대각선(왼 -> 오)
    sum1 += arr[i][i];
    // 대각선(오 -> 왼)
    sum2 += arr[length - 1 - i][i];
  }
  max = Math.max(max, sum1, sum2);
  return max;
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 30, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(findMaxCrossPuzzle(arr));
