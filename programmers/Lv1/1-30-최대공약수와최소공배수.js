/*
최대공약수 : 두 수의 공통된 약수들 중 가장 큰 수
최소공배수 : 두 수의 공통된 배수들 중 가장 작은 수 -> 공통된 배수들의 최댓값은 n * m이다!
*/
function solution(n, m) {
  //최대공약수
  let max = 0;
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  //최소공배수
  let min = 0;
  for (let i = m; i <= n * m; i += m) {
    if (i % n === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}
