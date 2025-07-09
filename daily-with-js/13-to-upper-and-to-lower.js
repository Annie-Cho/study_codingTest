/**
 * 대소문자 변환
 *
 * 대문자와 소문자가 함께 존재하는 문자열을 받아 대문자 -> 소문자, 소문자 -> 대문자로 변환하라.
 */

function oppositeTheCase(newString) {
  let answer = "";

  /* ASCII Code 사용 */
  //   for (let char of newString) {
  //     const charAt = char.charCodeAt();

  //     if (charAt >= 65 && charAt <= 90) {
  //       answer += String.fromCharCode(charAt + 32);
  //     } else {
  //       answer += String.fromCharCode(charAt - 32);
  //     }
  //   }
  //   return answer;
  //
  /* 내장 함수 사용 */
  for (let char of newString) {
    if (char === char.toUpperCase()) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  }

  return answer;
}

console.log(oppositeTheCase("StuDY"));
