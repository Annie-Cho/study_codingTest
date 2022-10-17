/*
가우스 등차수열의 합을 사용하면 좀 더 쉬움!!
1 - 5까지처럼 연속된 수를 더해야하는 부분이 나오면 항상 가우스 등차수열의 합을 생각해보자!!
등차수열의 합 : n x (n + 1) / 2
*/
function solution(price, money, count) {
  /* my answer */
  //   let total = 0;
  //   for (let i = 1; i <= count; i++) {
  //     total += price * i;
  //   }
  //   return total - money > 0 ? total - money : 0;

  /* reference code */
  const rest = (price * count * (count + 1)) / 2 - money;
  return rest > 0 ? rest : 0;
}
