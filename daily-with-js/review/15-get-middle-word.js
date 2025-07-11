/**
 * 가운데 문자 출력
 *
 * 소문자로 된 문자열이 입력되면 가운데 문자를 찾아 출력하시오.
 * 단어의 길이가 짝수인 경우 가운데 2개 문자를 출력함.
 */

function getMiddleWord(newString) {
  const middle = Math.floor(newString.length / 2);

  /* 내 정답 - slice 사용 */
  return newString.length % 2 !== 0
    ? newString.slice(middle, middle + 1)
    : newString.slice(middle - 1, middle + 1);

  /* 강의 정답 - substring
  return newString.length % 2 !== 0
    ? newString.substring(middle, middle + 1)
    : newString.substring(middle - 1, middle + 1);
    */
}

console.log(getMiddleWord("study"));
console.log(getMiddleWord("tomato"));
