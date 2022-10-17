/*
제곱근이 정수이면 약수의 갯수는 홀수이다 !!!
Number.isInteger(Math.sqrt(9))      //true => 3개(1, 3, 9)
Number.isInteger(Math.sqrt(11))     //false => 2개(1, 11)
*/

function solution(left, right) {
  /* my answer */
  //   let sum = 0;
  //   for (let i = left; i <= right; i++) {
  //     let count = 0;
  //     for (let j = 1; j <= i; j++) {
  //       if (i % j === 0) {
  //         count++;
  //       }
  //     }
  //     count % 2 === 0 ? (sum += i) : (sum -= i);
  //   }
  //   return sum;

  /* reference code */
  let sum = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      //홀수
      sum -= i;
    } else {
      //짝수
      sum += i;
    }
  }
  return sum;
}
