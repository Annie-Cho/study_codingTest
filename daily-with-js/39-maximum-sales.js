/**
 * 최대 매출
 *
 * N일 동안의 매출기록 중 연속된 K일 동안의 최대 매출액이 얼마인지 구하시오.
 * ex) N = 10, K = 3
 * 12 15 11 20 25 10 20 19 13 15
 * => 11 + 20 + 25 = 56
 */

/**
 * 강의 응용 풀이
 */
function findMaximumSales(salesList = [], day = 0) {
  let sum = 0;

  if (salesList.length < day) {
    return new Error(`매출기록에 연속된 ${day}일 기록이 없습니다.`);
  }

  for (let i = 0; i < day; i++) {
    sum += salesList[i];
  }

  let max = sum;
  for (let i = day; i < salesList.length - day; i++) {
    sum += salesList[i];
    sum -= salesList[i - day];

    if (max < sum) max = sum;
  }

  return max;
}

/**
 * 첫 번째 풀이 - 안좋은 풀이!!
 * 이중 for문. 시간 복잡도 NxK = O(n제곱)
function findMaximumSales(salesList = [], day = 0) {
  let max = 0;

  for (let i = 0; i < salesList.length; i++) {
    if (!salesList[i + 3]) break;

    const sales = salesList.slice(i, i + 3);
    const sum = sales.reduce((acc, cur) => acc + cur, 0);

    if (max < sum) max = sum;
  }

  return max;
}
   */

const salesList = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const day = 3;
console.log(findMaximumSales(salesList, day));
