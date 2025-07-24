/**
 * K번째 큰 수
 *
 * N장의 카드 중 3장을 뽑아 카드에 적힌 수를 합한 값을 기록한다.
 * 3장을 뽑을 수 있는 모든 경우의 수를 기록한다.
 * 기록한 값 중 K번째로 큰 수를 출력하시오.
 * K번째 수가 존재하지 않으면 -1을 출력한다.
 * 단, 중복되는 숫자는 없어야한다.
 *
 * ex) N=10, K=3
 * 13, 15, 34, 23, 45, 65, 33, 11, 26, 42
 * => 143
 *  */

function findKthBiggestNumber(kth, cards = []) {
  const totals = new Set();

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        totals.add(cards[i] + cards[j] + cards[k]);
      }
    }
  }

  const sortedTotals = Array.from(totals).sort((a, b) => b - a);
  return sortedTotals.at(kth - 1) ?? -1;
}

const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(findKthBiggestNumber(3, cards));
