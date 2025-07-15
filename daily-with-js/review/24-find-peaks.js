/**
 * 봉우리를 찾아라
 *
 * N*N 격자판에서 봉우리 지역은 자신의 상하좌우 숫자보다 큰 숫자이다.
 * 봉우리가 총 몇개있는지 알아내시오.
 * 격자판에서 가장자리는 0으로 초기화되었다고 가정한다.
 */

function findPeaks(arr) {
  // 시계방향으로 좌표를 찾기 위한 상수
  let answer = 0;
  const length = arr.length;
  const ai = [-1, 0, 1, 0];
  const aj = [0, 1, 0, -1];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let isPeak = 1;
      for (let k = 0; k < ai.length; k++) {
        const n = i + ai[k];
        const m = j + aj[k];

        // console.log(`i = ${i}, j = ${j}, n = ${n}, m = ${m}`);

        if (n < 0 || m < 0 || n >= length || m >= length) {
          continue;
        } else if (arr[i][j] < arr[n][m]) {
          //   console.log(`it's not a peak`);
          isPeak = 0;
          break;
        }
      }

      if (isPeak) answer++;
    }
  }

  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(findPeaks(arr));
