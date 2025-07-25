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

function findSameElements(first = [], second = []) {
  let p1 = 0;
  let p2 = 0;
  const answer = [];

  sortedFirst = first.sort((a, b) => a - b);
  sortedSecond = second.sort((a, b) => a - b);

  while (p1 < first.length && p2 < second.length) {
    if (sortedFirst[p1] === sortedSecond[p2]) {
      answer.push(sortedFirst[p1]);
      p1++;
      p2++;
    } else if (sortedFirst[p1] > sortedSecond[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return answer;
}

const first = [1, 3, 9, 5, 2];
const second = [3, 2, 5, 7, 8];
console.log(findSameElements(first, second));
