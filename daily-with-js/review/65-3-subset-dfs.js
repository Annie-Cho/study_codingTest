/**
 * 부분집합 구하기(DFS)
 *
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하시오.
 * 단, 공집합은 출력하지 않는다.
 *
 * ex) 3
 * => 1 2 3
 * 1 2
 * 1 3
 * 1
 * 2 3
 * 2
 * 3
 */

function subsetDFS(num) {
  const check = Array.from({ length: num + 1 }, () => 0);
  const answer = [];

  function DFS(n) {
    if (n === num + 1) {
      let str = "";

      for (let i = 1; i <= num; i++) {
        if (check[i] === 1) {
          str += `${i} `;
        }
      }
      if (str.length > 0) answer.push(str.trim());
    } else {
      // 포함
      check[n] = 1;
      DFS(n + 1);

      // 불포함
      check[n] = 0;
      DFS(n + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(subsetDFS(3));
