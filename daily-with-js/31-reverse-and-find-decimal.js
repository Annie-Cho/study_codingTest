/**
 * 뒤집은 소수
 *
 * N개의 자연수를 뒤집은 후 뒤집은 수가 소수인 경우 소수를 출력하라.
 * 단, 뒤집었을 때 연속되는 0은 무시한다.
 *
 * ex1) 32를 뒤집으면 23, 23은 소수이다.
 * ex2) 910을 뒤집으면 19, 19는 소수이다.
 */

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function reverseAndFindDecimal(numbers) {
  const answer = [];

  for (let number of numbers) {
    const revertedNumber = number.toString().split("").reverse();
    const target = Number(revertedNumber.join(""));

    /* 강의 방법 
    while (number) {
      let t = number % 10;
      res = res * 10 + t;
      number = parseInt(number / 10);
    }
      */

    if (isPrime(target)) answer.push(target);
  }

  return answer.join(" ");
}

console.log(reverseAndFindDecimal([32, 55, 62, 20, 250, 370, 200, 30, 100]));
