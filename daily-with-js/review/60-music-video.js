/**
 * 뮤직비디오(결정알고리즘)
 *
 * ex) 9(N개의 곡) 3(M개의 DVD)
 * 1 2 3 4 5 6 7 8 9
 * => 17 => 3개의 DVD 용량이 17분짜리라면 (1, 2, 3, 4, 5)(6, 7)(8,9) 3개의 DVD로 녹음할 수 있다.
 */

function count(songs, capacity) {
  // dvd 개수
  let count = 1;
  let sum = 0;

  for (let song of songs) {
    if (sum + song > capacity) {
      count++;
      sum = song;
    } else {
      sum += song;
    }
  }

  return count;
}

function musicVideo(dvdCount, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    if (count(songs, mid) <= dvdCount) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(musicVideo(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
