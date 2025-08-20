/**
 * 이진수 출력
 *
 * 10진수 N이 입력되면 2진수로 변환하여 출력하시오.
 * 단, 재귀함수를 사용하시오.
 */

function binaryNumber(number) {
  let answer = "";

  function DFS(number) {
    if (number === 0) {
      return;
    }

    DFS(Math.floor(number / 2));
    answer += number % 2;
  }

  DFS(number);
  return answer;
}

console.log(binaryNumber(11));
