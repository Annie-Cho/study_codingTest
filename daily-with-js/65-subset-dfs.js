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

function subset_dfs(num) {
  let answer = [];
  let ch = Array.from({ length: num + 1 }, () => 0);

  function DFS(v) {
    // num + 1이 되었다는 건 마지막 라운드이기 때문에 재귀를 하지 않고 출력용
    if (v === num + 1) {
      let tmp = "";

      for (let i = 1; i <= num; i++) {
        // ch 내에 있는 1(true)에 대해서만 출력
        if (ch[i] === 1) {
          tmp += i + " ";
        }
      }

      // 공집합을 제거하기 위함
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // 포함
      ch[v] = 1;
      DFS(v + 1);

      // 불포함
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(subset_dfs(3));
