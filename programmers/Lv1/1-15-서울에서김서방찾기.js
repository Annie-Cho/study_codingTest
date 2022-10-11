/*
indexOf() : Array에서 특정 값 찾기
*/

function solution(seoul) {
  /* code 1 */
  // for(let i=0; i<seoul.length; i++) {
  //   if(seoul[i] === 'Kim')
  //     return `김서방은 ${i}에 있다`
  // }

  /* code 2 */
  // const result = seoul.indexOf('Kim')
  // return `김서방은 ${result}에 있다`

  /* code 2 -> 좀 더 간단하게 정리 */
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
