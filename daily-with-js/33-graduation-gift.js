/**
 * 졸업 선물
 *
 * 학생들이 졸업 선물로 원하는 상품을 골라 가격과 배송비를 지출한다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하라.
 * 선생님은 상품 1개를 50%할인해서 살 수 있는 쿠폰을 가지고 있다.
 * 배송비는 할인에 포함되지 않는다.
 *
 *
 * 첫 번째 줄에 반 학생수 N, 예산 M이 주어진다.
 * 두 번째 줄부터 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력된다.
 * 상품 가격은 짝수로만 입력된다.
 *
 * ex)
 * 5 28
 * 6 6
 * 2 2
 * 4 3
 * 4 5
 * 10 3
 */

function graduationGifts(gifts) {
  const [studentCount, budget] = gifts[0];
  const products = gifts.splice(1);
  let answer = 0;

  const sortedTotalFees = products.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < sortedTotalFees.length; i++) {
    let money = budget;
    let count = 1;
    // 상품 가격에 50% 할인 + 배송비
    money -= sortedTotalFees[i][0] / 2 + sortedTotalFees[i][1];

    for (let j = 0; j < sortedTotalFees.length; j++) {
      const nextPayment = sortedTotalFees[j][0] + sortedTotalFees[j][1];

      if (i != j && nextPayment > money) break;

      if (i !== j && nextPayment <= money) {
        money -= nextPayment;
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  graduationGifts([
    [5, 28],
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
