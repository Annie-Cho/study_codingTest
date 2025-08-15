/**
 * Least Recently Used(카카오 캐시 문제 변형)
 *
 * ex) 작업개수 : 5, 작업 : 1 2 3 2 6 2 3 5 7
 * => 7 5 3 2 6
 */

/** 내장 함수 사용 
function leastRecentlyUsed(jobCount, jobs) {
  const cache = Array.from({ length: jobCount }, () => 0);

  for (let job of jobs) {
    const pos = cache.indexOf(job);

    if (pos >= 0) {
      cache.splice(pos, 1);
    }
    cache.unshift(job);

    if (cache.length > 5) {
      cache.pop();
    }
  }

  return cache;
}
  */

/** for문을 사용한 삽입정렬 방식으로 풀이하기 */
function leastRecentlyUsed(jobCount, jobs) {
  const cache = Array.from({ length: jobCount }, () => 0);

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

console.log(leastRecentlyUsed(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
