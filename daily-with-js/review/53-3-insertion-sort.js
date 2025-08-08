/**
 * 삽입 정렬
 *
 * N개의 숫자 입력 시 삽입정렬을 활용하여 오름차순으로 정렬하시오.
 * ex) 11 7 5 6 10 9
 * => 5 6 7 9 10 11
 */

function insertionSort(numbers) {
  const answer = numbers;

  for (let i = 1; i < answer.length; i++) {
    const temp = answer[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > temp) {
        answer[j + 1] = answer[j];
      } else {
        break;
      }
    }
    answer[j + 1] = temp;
  }

  return answer;
}

console.log(insertionSort([11, 7, 5, 6, 10, 9]));
