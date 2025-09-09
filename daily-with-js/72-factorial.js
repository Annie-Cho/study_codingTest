/**
 * 팩토리얼
 *
 * 자연수 N에 대한 N! 값을 구하시오.
 *
 * N! = n*(n-1)*(n-2)*...*2*1 이다.
 * 만약 N=5라면 5!=5*4*3*2*1 = 120이 된다.
 *
 * ex) 5
 * => 120
 */

function factorial(n) {
  let answer = 0;

  function DFS(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }

  answer = DFS(n);
  return answer;
}

console.log(factorial(5));
