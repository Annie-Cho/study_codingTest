/**
 * Least Recently Used(카카오 캐시 문제 변형)
 *
 * ex) 작업개수 : 5, 작업 : 1 2 3 2 6 2 3 5 7
 * => 7 5 3 2 6
 */

/** for문 사용 */
function leastRecentlyUsed(totalCount, jobs) {
  const cache = Array.from({ length: totalCount }, () => 0);

  for (let job of jobs) {
    const pos = cache.indexOf(job);

    if (pos >= 0) {
      for (let i = pos - 1; i >= 0; i--) {
        cache[i + 1] = cache[i];
      }
    } else {
      for (let i = cache.length - 1; i >= 0; i--) {
        cache[i + 1] = cache[i];
      }
    }
    cache[0] = job;

    if (cache.length > 5) cache.pop();
  }

  return cache;
}

/** 내장함수 사용하는 경우 
function leastRecentlyUsed(totalCount, jobs) {
  const cache = Array.from({ length: totalCount }, () => 0);

  for (let job of jobs) {
    const pos = cache.indexOf(job);

    if (pos >= 0) {
      cache.splice(pos, 1);
    }
    cache.unshift(job);

    if (cache.length > 5) cache.pop();
  }

  return cache;
}
  */

console.log(leastRecentlyUsed(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
