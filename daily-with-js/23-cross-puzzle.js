/**
 * 격자판 최대합
 *
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력한다.
 */

function findMaxCrossPuzzle(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum1 = 0,
    sum2 = 0;
  let width = arr.length;

  /* 강의 답안 */
  // 행과 열
  for (let i = 0; i < width; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < width; j++) {
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }

    max = Math.max(max, sum1, sum2);
  }

  // 대각선
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < width; i++) {
    sum1 += arr[i][i]; // 왼 -> 오
    sum2 += arr[i][width - 1 - i]; // 오 -> 왼
  }
  max = Math.max(max, sum1, sum2);
  return max;

  /* 내가 푼 답 - 문제점!!! for문이 너무 많음!!!
  // 각 행의 합
  for (let i = 0; i < width; i++) {
    total = 0;
    for (let j = 0; j < width; j++) {
      total += arr[i][j];
    }

    if (max < total) {
      max = total;
    }
  }

  // 각 열의 합
  for (let i = 0; i < width; i++) {
    total = 0;
    for (let j = 0; j < width; j++) {
      total += arr[j][i];
    }

    if (max < total) {
      max = total;
    }
  }

  // 대각선의 합(왼 -> 오)
  total = 0;
  for (let i = 0; i < width; i++) {
    total += arr[i][i];
  }

  // 대각선의 합(오 -> 왼)
  total = 0;
  for (let i = 0; i < width; i++) {
    total += arr[i][width - 1 - i];
  }

  return max;
    */
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 30, 30, 25, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(findMaxCrossPuzzle(arr));
