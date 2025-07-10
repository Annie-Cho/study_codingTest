/**
 * 큰 수 출력하기
 *
 * N(1<=N<=100)개의 정수를 입력받아 자신의 앞 수보다 큰 수만 출력하라.
 *
 * ex)
 * 6
 * 7  3  9  5  6  12
 *
 * => 7  9  6  12
 */

function printLargestNumber(numbers) {
  /* 내장함수 filter 사용하기
  let before = 0;
  const answer = numbers.filter((number) => {
    let flag = false;
    if (before < number) {
      flag = true;
    }
    before = number;
    return flag;
  });
  */

  let answer = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) {
      answer.push(numbers[i]);
    }
  }

  return answer.join(" ");
}

console.log(printLargestNumber([7, 3, 9, 5, 6, 12]));
