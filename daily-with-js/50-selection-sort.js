/**
 * 선택 정렬
 *
 * N개의 숫자 입력 시 오름차순으로 정렬하여 출력하시오.
 *
 * ex) 13 5 11 7 23 15
 * => 5 7 11 13 15 23
 */

function selectionSort(numbers = []) {
  let answer = numbers;

  for (let i = 0; i < numbers.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[index] > numbers[j]) {
        index = j;
      }
    }

    // JS 최신 문법
    [answer[i], answer[index]] = [answer[index], answer[i]];

    /*
    if (i !== index) {
      const temp = answer[i];
      answer[i] = answer[index];
      answer[index] = temp;
    }
      */
  }

  return answer;
}

// console.log(selectionSort([13, 5, 11, 11, 23, 15]));
console.log(selectionSort([13, 5, 11, 7, 23, 15]));
