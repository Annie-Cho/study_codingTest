/**
 * Special Sort(구글 인터뷰)
 *
 * N개의 음수를 포함한 정수가 입력되면 음의 정수는 앞쪽에, 양의 정수는 뒷쪽에 있도록 정렬하시오.
 * 입력된 순서는 변하지 않아야한다.
 * 단, 정렬 기능을 사용하시오.
 *
 * ex) 1 2 3 -3 -2 5 6 -6
 * => -3 -2 -6 1 2 3 5 6
 */

function specialSort(numbers = []) {
  const answer = numbers;
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (numbers[j] > 0 && numbers[j + 1] < 0) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }

  return answer;
}

console.log(specialSort([1, 2, 3, -3, -2, 5, 6, -6]));
