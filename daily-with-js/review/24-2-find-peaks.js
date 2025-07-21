/**
 * 봉우리를 찾아라
 *
 * N*N 격자판에서 봉우리 지역은 자신의 상하좌우 숫자보다 큰 숫자이다.
 * 봉우리가 총 몇개있는지 알아내시오.
 * 격자판에서 가장자리는 0으로 초기화되었다고 가정한다.
 */

function findPeaks(map) {
  const ai = [-1, 0, 1, 0];
  const aj = [0, 1, 0, -1];
  let totalCounts = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      let isPeak = true;
      for (let k = 0; k < ai.length; k++) {
        let di = i - ai[k];
        let dj = j - aj[k];

        if (
          di >= 0 &&
          dj >= 0 &&
          di <= map.length - 1 &&
          dj <= map.length - 1 &&
          map[i][j] <= map[di][dj]
        ) {
          isPeak = false;
          break;
        }
      }

      if (isPeak) totalCounts++;
    }
  }

  return totalCounts;
}

const map = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(findPeaks(map));
