/**
 * 재귀함수
 *
 * 자연수 N이 입력되면 재귀함수를 이용해 1부터 N까지 출력하시오.
 *
 * ex) 3
 * => 1 2 3
 */

function DFS(num) {
  if (num === 0) {
    return;
  }

  DFS(num - 1);
  console.log(num);
}

function recursion(num) {
  return DFS(num);
}

console.log(recursion(10));
