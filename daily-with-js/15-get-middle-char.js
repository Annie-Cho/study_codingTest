/**
 * 가운데 문자 출력
 *
 * 소문자로 된 문자열이 입력되면 가운데 문자를 찾아 출력하시오.
 * 단어의 길이가 짝수인 경우 가운데 2개 문자를 출력함.
 */

function getMiddleChar(newString) {
  /* 내 정답 */
  //   let answer = "";
  //   const middleIndex = Math.round(newString.length / 2 - 1);
  //   answer += newString.charAt(middleIndex);

  //   if (newString.length % 2 === 0) {
  //     answer += newString.charAt(middleIndex + 1);
  //   }

  /* 강의 정답 */
  const middleIndex = Math.floor(newString.length / 2);

  if (newString.length % 2 !== 0) {
    return newString.substring(middleIndex, middleIndex + 1);
  }
  return newString.substring(middleIndex - 1, middleIndex + 1);
}

console.log(getMiddleChar("study"));
