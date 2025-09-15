/**
 * 조합의 경우수(메모이제이션)
 *
 * 공식을 사용해 재귀를 이용하여 조합수를 구해주는 프로그램을 작성하시오.
 *
 * ex) 5C3(5개 중에 3개를 뽑는다) = (5*4*3) / (3*2*1) = 10
 */

function memoization(total, pick) {
  /**
   * 메모이제이션
   *
   * 결과값을 저장해두고 중복되는 계산식에 대해 이미 구해진 값을 반환하는 방법이다.
   * 훨씬 속도가 빨라지는 장점이 있다.
   */
  let dy = Array.from(Array(35), () => Array(35).fill(0)); // 3행 5열 이차원배열 생성
  //   console.log(dy);

  function DFS(total, pick) {
    if (dy[total][pick] > 0) {
      return dy[total][pick];
    }

    if (total === pick || pick === 0) {
      return 1;
    } else {
      dy[total][pick] = DFS(total - 1, pick - 1) + DFS(total - 1, pick);
      return dy[total][pick];
    }
  }

  return DFS(total, pick);
}

// console.log(memoization(5, 3));
console.log(memoization(33, 19));
