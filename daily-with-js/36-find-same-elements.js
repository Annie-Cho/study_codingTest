/**
 * 공통원소 구하기
 *
 * A, B 두 집합의 공통 원소를 추출하여 오름차순으로 출력하라.
 * 단, 각각의 집합에는 중복되는 원소가 없다.
 *
 * ex)
 * 1 3 9 5 2
 * 3 2 5 7 8
 * => 2 3 5
 */

function findSameElements(first, second) {
  /**
   * 투 포인터를 사용한 방법이 더욱 효율적인다!(큰 데이터에서 훨씬 효율적이다.)
   *
   * 정렬 : O(N log N + M log M)
   * 투 포인터 비교 : O(N+M)
   * 총 시간복잡도 : O(N log N + M log M)
   */
  console.time();
  let p1 = 0;
  let p2 = 0;
  const answer = [];

  const sortedFirst = first.sort((a, b) => a - b);
  const sortedSecond = second.sort((a, b) => a - b);

  while (p1 < first.length && p2 < second.length) {
    if (sortedFirst[p1] === sortedSecond[p2]) {
      answer.push(first[p1]);
      p1++;
      p2++;
    } else if (sortedFirst[p1] < sortedSecond[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  console.timeEnd();
  return answer;

  /**
   * 중첩 반복문 : O(N * M)
   * 정렬 : O(K log K)
   * 총 시간 복잡도 : O(N * M)
   */
  /*
  console.time();
  const answer = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        answer.push(first[i]);
      }
    }
  }

  console.timeEnd();
  return answer.sort((a, b) => a - b);
  */
}

const first = [1, 3, 9, 5, 2];
const second = [3, 2, 5, 7, 8];
console.log(findSameElements(first, second));
