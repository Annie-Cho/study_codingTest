/**
 * 이진트리순회(DFS:깊이우선탐색)
 *
 * 전위순회 : 부모 -> 왼 -> 오
 * 중위순회 : 왼 -> 부모 -> 오
 * 후위순회 : 왼 -> 오 -> 부모
 */

function solution(num) {
  // 전위순회
  let pre_orderAnswer = "";

  function pre_orderTraversal(num) {
    if (num > 7) return;

    pre_orderAnswer += `${num} `;
    pre_orderTraversal(num * 2);
    pre_orderTraversal(num * 2 + 1);
  }
  pre_orderTraversal(num);
  console.log("전위순회 = ", pre_orderAnswer);

  // 중위순회
  let in_orderAnswer = "";

  function in_orderTraversal(num) {
    if (num > 7) return;

    in_orderTraversal(num * 2);
    in_orderAnswer += `${num} `;
    in_orderTraversal(num * 2 + 1);
  }

  in_orderTraversal(num);
  console.log("중위순회 = ", in_orderAnswer);

  // 후위순회
  let post_orderAnswer = "";

  function post_orderTraversal(num) {
    if (num > 7) return;

    post_orderTraversal(num * 2);
    post_orderTraversal(num * 2 + 1);
    post_orderAnswer += `${num} `;
  }

  post_orderTraversal(num);
  console.log("후위순회 = ", post_orderAnswer);
}

solution(1);
