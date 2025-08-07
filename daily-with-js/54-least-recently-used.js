/**
 * Least Recently Used(카카오 캐시 문제 변형)
 *
 * ex) 작업개수 : 5, 작업 : 1 2 3 2 6 2 3 5 7
 * => 7 5 3 2 6
 */

/* 강의 풀이 1번
function leastRecentlyUsed(max, jobs) {
  const cache = Array.from({ length: max }, () => 0);

  jobs.forEach((job) => {
    let pos = -1;

    // hit인지 miss인지 파악한다.
    for (let i = 0; i < max; i++) {
      if (job === cache[i]) {
        pos = i;
      }
    }

    if (pos === -1) {
      //miss
      for (let i = max - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else {
      // hit
      for (let i = pos; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = job;
  });

  return cache;
}
  */

/*  강의 2번째 풀이 - 내장함수 활용 */
function leastRecentlyUsed(max, jobs) {
  const cache = Array.from({ length: max }, () => 0);

  jobs.forEach((job) => {
    let pos = -1;

    // cache hit 인지 아닌지 판별
    for (let i = 0; i < max; i++) {
      if (cache[i] === pos) {
        pos = i;
      }
    }

    if (pos === -1) {
      // miss
      cache.unshift(job);
      if (cache.length > max) {
        cache.pop();
      }
    } else {
      // hit
      cache.splice(pos, 1);
      cache.unshift(x);
    }
  });

  return cache;
}

console.log(leastRecentlyUsed(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
