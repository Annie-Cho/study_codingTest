/**
 * Least Recently Used(카카오 캐시 문제 변형)
 *
 * ex) 작업개수 : 5, 작업 : 1 2 3 2 6 2 3 5 7
 * => 7 5 3 2 6
 */

/* 간단하게 푼 내 풀이 */
function leastRecentlyUsed(total, jobs) {
  const cache = Array.from({ length: total }, () => 0);

  jobs.forEach((job) => {
    const index = cache.indexOf(job);

    if (index >= 0) {
      // hit
      cache.splice(index, 1);
    } else {
      // miss
      if (cache.length === total) cache.pop();
    }

    cache.unshift(job);
  });

  return cache;
}

/* 삽입정렬을 사용한 풀이
function leastRecentlyUsed(total, jobs) {
  const cache = Array.from({ length: total }, () => 0);

  jobs.forEach((job) => {
    let index = -1;
    for (let i = 0; i < cache.length; i++) {
      if (job === cache[i]) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      // hit
      for (let i = index; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else {
      // miss
      for (let i = cache.length - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = job;
  });

  return cache;
}
  */

console.log(leastRecentlyUsed(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
