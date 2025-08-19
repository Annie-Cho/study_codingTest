/**
 * 뮤직비디오(결정알고리즘)
 *
 * 라이브 동영상을 DVD로 만들어 판매하려고 한다.
 * DVD에는 총 N개의 곡이 들어가는데, 라이브 순서가 그대로 유지되어야한다.
 * 한 노래르 쪼개서 두 개의 DVD에 녹화할 수 없다.
 * M개의 동일한 길이의 DVD에 모든 영상을 녹화하려고 한다.
 * 한 개 DVD의 최소 녹화 가능 길이를 구하시오.
 *
 * ex) 3(M개의 DVD)
 * 1 2 3 4 5 6 7 8 9
 * => 17 => 3개의 DVD 용량이 17분짜리라면 (1, 2, 3, 4, 5)(6, 7)(8,9) 3개의 DVD로 녹음할 수 있다.
 */

// 강의에서처럼 count 함수를 분리한다면,
function count(dvdSizes, capacity) {
  let sum = 0;
  let count = 1;

  for (let dvdSize of dvdSizes) {
    if (sum + dvdSize > capacity) {
      count++;
      sum = dvdSize;
    } else {
      sum += dvdSize;
    }
  }

  return count;
}

function musicVideo(dvdCount, dvdSizes) {
  let lt = dvdSizes.sort((a, b) => a - b).at(-1);
  let rt = dvdSizes.reduce((acc, cur) => acc + cur, 0);
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    /* 내 풀이 
    let sum = 0;
    // 노래를 담기 위해서는 사전에 DVD가 한 장 있어야 한다.
    // sum + dvdSizes[i] > mid 되는 경우에는 다음 노래가 있고 해당 DVD 길이가 없기 때문에 count가 되는데, 마지막 노래의 경우 DVD 길이보다 짧거나 같은 경우 count되지 않는다.
    let count = 1;
    for (let i = 0; i <= dvdSizes.length - 1; i++) {
      if (sum + dvdSizes[i] <= mid) {
        sum += dvdSizes[i];
      } else {
        count++;
        sum = dvdSizes[i];
      }
    }

    if (count <= dvdCount) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
      */

    /* 강의처럼 count 함수 따로 뽑는 경우 */
    if (count(dvdSizes, mid) <= dvdCount) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(musicVideo(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
