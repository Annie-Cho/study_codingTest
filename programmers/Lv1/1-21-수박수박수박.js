/* repeat(n)
- 문자열을 n만큼 반복해 붙인 새로운 문자열을 반환한다.
*/

function solution(n) {
  /* my answer */
  // var answer = ''
  // for(let i=0; i<n; i++) {
  //   i % 2 === 0 ? answer += '수' : answer += '박'
  // }
  // return answer

  /* reference code */
  return "수박".repeat(n / 2 + 1).slice(0, n);
}
