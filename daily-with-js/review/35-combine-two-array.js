/**
 * 두 배열 합치기
 *
 * 오름차순으로 정렬된 두 배열을 오름차순으로 합쳐 출력하시오.
 *
 * ex)
 * 첫 번째 배열 -> 1, 3, 5
 * 두 번째 배열 -> 2, 3, 6, 7, 9
 * => 1, 2, 3, 3, 5, 6, 7, 9
 */

function combineTwoArray(first = [], second = []) {
  let p1 = 0;
  let p2 = 0;
  const answer = [];

  while (p1 < first.length && p2 < second.length) {
    if (first[p1] < second[p2]) {
      answer.push(first[p1]);
      p1++;
    } else {
      answer.push(second[p2]);
      p2++;
    }
  }

  if (p1 === first.length) {
    answer.push(...second.slice(p2));
  } else if (p2 === second.length) {
    answer.push(...first.slice(p1));
  }

  return answer;
}

const firstArray = [1, 3, 5];
const secondArray = [2, 3, 6, 7, 9];
console.log(combineTwoArray(secondArray, firstArray));
