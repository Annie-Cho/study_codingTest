/**
 * 뒤집은 소수
 *
 * N개의 자연수를 뒤집은 후 뒤집은 수가 소수인 경우 소수를 출력하라.
 * 단, 뒤집었을 때 연속되는 0은 무시한다.
 *
 * 32, 55, 62, 20, 250, 370, 200, 30, 100
 * ex1) 32를 뒤집으면 23, 23은 소수이다.
 * ex2) 910을 뒤집으면 19, 19는 소수이다.
 */

function isDecimal(number) {
  if (number === 1) return false;

  for (let i = 2; i < Math.floor(Math.sqrt(number)); i++) {
    // parseInt(Math.sqrt(number))도 사용 가능
    if (number % i === 0) return false;
  }
  return true;
}

function reverseAndFindDecimal(numbers) {
  const answers = [];

  for (let i = 0; i < numbers.length; i++) {
    // 숫자 뒤집기
    const reverseNumStr = numbers[i].toString().split("").reverse().join("");
    const reverseNum = Number(reverseNumStr);

    // 소수 판별
    if (isDecimal(reverseNum)) answers.push(reverseNum);
  }

  return answers.join(" ");
}

console.log(reverseAndFindDecimal([32, 55, 62, 20, 250, 370, 200, 30, 100]));
