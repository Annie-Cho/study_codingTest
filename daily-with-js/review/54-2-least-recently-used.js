/**
 * Least Recently Used(카카오 캐시 문제 변형)
 *
 * ex) 작업개수 : 5, 작업 : 1 2 3 2 6 2 3 5 7
 * => 7 5 3 2 6
 */

/** for문 사용하는 방법 
function leastRecentlyUsed(totalCount = 0, jobs = []) {
  const cache = Array.from({ length: totalCount }, () => 0);

  jobs.forEach((job) => {
    const index = cache.indexOf(job);

    if (index >= 0) {
      for (let i = index - 1; i >= 0; i--) {
        cache[i + 1] = cache[i];
      }
    } else {
      for (let i = cache.length - 1; i >= 0; i--) {
        cache[i + 1] = cache[i];
      }
    }
    cache[0] = job;

    if (cache.length > 5) {
      cache.pop();
    }
  });

  return cache;
}
  */

/** 내장함수 사용하는 방법 */
function leastRecentlyUsed(totalCount = 0, jobs = []) {
  const cache = Array.from({ length: totalCount }, () => 0);

  jobs.forEach((job) => {
    const index = cache.indexOf(job);

    if (index >= 0) {
      cache.splice(index, 1);
      cache.unshift(job);
    } else {
      cache.unshift(job);
    }

    if (cache.length > 5) {
      cache.pop();
    }
  });

  return cache;
}

console.log(leastRecentlyUsed(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
