/**
 * 버블 정렬
 *
 * N개의 숫자를 버블 정렬을 활용하여 오름차순으로 정렬하시오.
 * ex) 13 5 11 7 23 15
 * => 5 7 11 13 15 23
 */

function bubbleSort(numbers) {
  const answer = numbers;

  for (let j = 0; j < answer.length - 1; j++) {
    for (let i = 0; i < answer.length - 1 - j; i++) {
      if (answer[i] > answer[i + 1]) {
        [answer[i], answer[i + 1]] = [answer[i + 1], answer[i]];
      }
    }
  }

  return answer;
}

console.log(bubbleSort([13, 5, 11, 7, 23, 15]));
console.log(bubbleSort([13, 5, 11, 15, 23, 15]));
