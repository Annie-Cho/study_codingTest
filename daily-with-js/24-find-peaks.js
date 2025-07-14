/**
 * 봉우리를 찾아라
 *
 * N*N 격자판에서 봉우리 지역은 자신의 상하좌우 숫자보다 큰 숫자이다.
 * 봉우리가 총 몇개있는지 알아내시오.
 * 격자판에서 가장자리는 0으로 초기화되었다고 가정한다.
 */

function findPeaks(arr) {
  // 방향 : [12시, 3시, 6시, 9시]
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  let answer = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let isPeak = 1;

      for (let k = 0; k < di.length; k++) {
        let ni = i + di[k];
        let nj = j + dj[k];

        if (
          ni >= 0 &&
          nj >= 0 &&
          ni < length &&
          nj < length &&
          arr[i][j] <= arr[ni][nj]
        ) {
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
