/**
 * 선택 정렬
 * => 앞에서 부터 하나의 숫자와 뒤의 숫자들 중 최소값과 자리를 바꾼다.
 *
 * N개의 숫자 입력 시 오름차순으로 정렬하여 출력하시오.
 *
 * ex) 13 5 11 7 23 15
 * => 5 7 11 13 15 23
 */

function selectionSort(numbers = []) {
  const answer = numbers;

  for (let i = 0; i < answer.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[minIndex] > answer[j]) {
        minIndex = j;
      }
    }
    [answer[i], answer[minIndex]] = [answer[minIndex], answer[i]];
  }

  return answer;
}

console.log(selectionSort([13, 5, 11, 7, 23, 15]));
console.log(selectionSort([13, 5, 11, 20, 7, 23, 15]));
