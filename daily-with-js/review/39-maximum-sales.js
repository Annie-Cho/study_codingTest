/**
 * 최대 매출
 *
 * N일 동안의 매출기록 중 연속된 K일 동안의 최대 매출액이 얼마인지 구하시오.
 * ex) N = 10, K = 3
 * 12 15 11 20 25 10 20 19 13 15
 * => 11 + 20 + 25 = 56
 */

function findMaximumSales(salesList = [], continuousDay = 0) {
  let max = 0;
  let sum = 0;

  if (salesList.length < continuousDay) {
    return new Error(`연속된 매출기록이 ${continuousDay}보다 적습니다.`);
  }

  for (let i = 0; i < continuousDay; i++) {
    sum += salesList[i];
  }

  max = sum;
  for (let i = continuousDay; i < salesList.length; i++) {
    sum -= salesList[i - continuousDay];
    sum += salesList[i];

    if (sum > max) max = sum;
  }

  return max;
}

const salesList = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const continuousDay = 3;
console.log(findMaximumSales(salesList, continuousDay));
