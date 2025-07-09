/* 대문자와 소문자가 함께 존재하는 문자열을 대문자로 통일하라 */

function toUpperCase(newString) {
  /* 내장 함수 사용 */
  return newString.toUpperCase();
  //
  /* ASCII Code 사용 */
  //   let answer = "";
  //   for (let char of newString) {
  //     const charCode = char.charCodeAt();
  //     if (charCode >= 97 && charCode <= 122) {
  //       answer += String.fromCharCode(charCode - 32);
  //     } else {
  //       answer += char;
  //     }
  //   }
  //   return answer;
}

console.log(toUpperCase("ItisTimeToStudyMore"));
