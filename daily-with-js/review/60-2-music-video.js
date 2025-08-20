/**
 * 뮤직비디오(결정알고리즘)
 *
 * 라이브 동영상을 DVD로 만들어 판매하려고 한다.
 * DVD에는 총 N개의 곡이 들어가는데, 라이브 순서가 그대로 유지되어야한다.
 * 한 노래를 쪼개서 두 개의 DVD에 녹화할 수 없다.
 * M개의 동일한 길이의 DVD에 모든 영상을 녹화하려고 한다.
 * 한 개 DVD의 최소 녹화 가능 길이를 구하시오.
 *
 * ex) 3(M개의 DVD)
 * 1 2 3 4 5 6 7 8 9
 * => 17 => 3개의 DVD 용량이 17분짜리라면 (1, 2, 3, 4, 5)(6, 7)(8,9) 3개의 DVD로 녹음할 수 있다.
 */

function musicVideo(dvdCount, videos) {
  let lt = Math.max(...videos);
  let rt = videos.reduce((acc, cur) => acc + cur, 0);
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    let sum = 0;
    let count = 1;
    for (let i = 0; i < videos.length; i++) {
      if (sum + videos[i] <= mid) {
        sum += videos[i];
      } else {
        count++;
        sum = videos[i];
      }
    }

    if (count <= dvdCount) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(musicVideo(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
