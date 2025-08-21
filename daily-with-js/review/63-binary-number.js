/**
 * 이진수 출력
 *
 * 10진수 N이 입력되면 2진수로 변환하여 출력하시오.
 * 단, 재귀함수를 사용하시오.
 *
 * ex) 11
 * => 1011
 */

function binaryNumber(num) {
  let answer = "";

  function DFS(num) {
    if (num === 0) {
      return;
    }

    DFS(parseInt(num / 2));
    answer += String(num % 2);
  }

  DFS(num);
  return answer;
}

console.log(binaryNumber(11));
