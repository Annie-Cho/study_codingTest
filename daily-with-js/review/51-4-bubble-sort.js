/**
 * 버블 정렬
 * => 앞에서부터 두 개의 숫자씩 묶어서 더 큰 숫자를 뒤로 보낸다.
 *
 * N개의 숫자를 버블 정렬을 활용하여 오름차순으로 정렬하시오.
 * ex) 13 5 11 7 23 15
 * => 5 7 11 13 15 23
 */

function bubbleSort(numbers) {
  const answer = numbers;

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1]) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }

  return answer;
}

console.log(bubbleSort([13, 5, 11, 7, 23, 15]));
