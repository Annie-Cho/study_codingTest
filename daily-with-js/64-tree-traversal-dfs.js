/**
 * 이진트리순회(DFS:깊이우선탐색)
 *
 * 전위순회 : 부 -> 왼 -> 오
 * 중위순회 : 왼 -> 부 -> 오
 * 후위순회 : 왼 -> 오 -> 부
 */

function solution(n) {
  /* 전위 순회 */
  function pre_orderTraversal(n) {
    if (n > 7) return;

    console.log(n);
    pre_orderTraversal(n * 2);
    pre_orderTraversal(n * 2 + 1);
  }

  /* 중위 순회 */
  function in_orderTraversal(n) {
    if (n > 7) return;

    in_orderTraversal(n * 2);
    console.log(n);
    in_orderTraversal(n * 2 + 1);
  }

  /* 후위 순회 */
  function post_orderTraversal(n) {
    if (n > 7) return;

    post_orderTraversal(n * 2);
    post_orderTraversal(n * 2 + 1);
    console.log(n);
  }

  console.log("----- 전위순회 -----");
  pre_orderTraversal(n);
  console.log("----- 중위순회 -----");
  in_orderTraversal(n);
  console.log("----- 후위순회 -----");
  post_orderTraversal(n);
}

console.log(solution(1));
