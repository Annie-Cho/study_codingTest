function solution(n) {
  /* code 1 */
  // const result = String(n).split('')
  // for(let i=0; i<result.length; i++) {
  // result[i] = Number(result[i])
  // }
  // return Number(result.sort((a, b) => b - a).join(''))

  /* code 2 */
  const result = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +result; //단항연산자(+)를 사용하여 값을 숫자로 변환할 수 있다.(참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Language_Overview)
}
