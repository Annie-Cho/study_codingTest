/**
 * 재귀함수
 *
 * 자연수 N이 입력되면 재귀함수를 이용해 1부터 N까지 출력하시오.
 */

function recursion(number) {
  function DFS(number) {
    if (number === 0) return;
    else {
      DFS(number - 1);
      console.log(number);
    }
  }

  DFS(number);
}

console.log(recursion(3));
