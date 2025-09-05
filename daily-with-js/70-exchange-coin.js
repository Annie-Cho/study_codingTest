/**
 * 동전교환
 *
 * 여러 단위의 동전들이 주어져 있을 때
 * 거슬러 줄 동전의 최소 개수를 출력하시오.
 *
 * ex) 1 2 5(동전의 종류), 15(거슬러 줄 금액)
 * => 3 => 5짜리 동전 3개로 거슬러 줄 수 있음.
 */

function exchangeCoin(coinType, change) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    // 루프 줄이기
    if (sum > change || L >= answer) {
      return;
    }

    if (sum === change) {
      //   console.log(L, sum);
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < coinType.length; i++) {
        DFS(L + 1, sum + coinType[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(exchangeCoin([1, 2, 5], 15));
