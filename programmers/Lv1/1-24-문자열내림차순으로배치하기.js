/* 문자 정렬 거꾸로 가져오기
- sort()는 배열의 문자열들을 오름차순으로 정렬시켜준다. sort()만 사용할 경우 reverse()를 사용하여 뒤집어 줘야한다.
- sort()에서 직접 내림차순으로 정렬시킬 수 있다. sort((a, b) => a > b ? -1 : 1)을 사용하면 바로 내림차순 정렬된 값을 얻을 수 있다.
*/

function solution(s) {
  /* my answer */
  return s.split("").sort().reverse().join("");

  /* reference code */
  // return s.split('').sort((a, b) => a > b ? -1 : 1).join('')
}
