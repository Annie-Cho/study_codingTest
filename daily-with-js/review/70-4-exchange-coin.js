/**
 * 동전교환
 *
 * 여러 단위의 동전들이 주어져 있을 때
 * 거슬러 줄 동전의 최소 개수를 출력하시오.
 *
 * ex) 1 2 5(동전의 종류), 15(거슬러 줄 금액)
 * => 3 => 5짜리 동전 3개로 거슬러 줄 수 있음.
 */

function exchangeCoin(coinType, exchangeAmount) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(count, sum) {
    if (sum > exchangeAmount || count >= answer) {
      return;
    }

    if (sum === exchangeAmount) {
      answer = Math.min(answer, count);
    } else {
      for (let i = 0; i < coinType.length; i++) {
        DFS(count + 1, sum + coinType[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(exchangeCoin([1, 2, 5], 15));
