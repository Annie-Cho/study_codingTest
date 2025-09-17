/**
 * 조합의 경우수(메모이제이션)
 *
 * 공식을 사용해 재귀를 이용하여 조합수를 구해주는 프로그램을 작성하시오.
 *
 * ex) 5C3(5개 중에 3개를 뽑는다) = (5*4*3) / (3*2*1) = 10
 */

function memoization(total, pick) {
  const data = Array.from(Array(total + 1), () => Array(total + 1).fill(0));

  function DFS(total, pick) {
    if (data[total][pick] > 0) {
      return data[total][pick];
    }

    if (total === pick || pick === 0) {
      return 1;
    } else {
      data[total][pick] = DFS(total - 1, pick - 1) + DFS(total - 1, pick);
      return data[total][pick];
    }
  }

  return DFS(total, pick);
}

console.log(memoization(5, 3));
console.log(memoization(33, 19));
