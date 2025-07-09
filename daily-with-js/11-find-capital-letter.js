/**
 * 한 개의 문자열을 입력받고 대문자 알파벳이 몇 개 있는지 확인하라
 */

function findCapitalLetter(inputString) {
  /* 정규식 사용 */
  //   const capitalLetters = inputString.match(/[A-Z]/g);
  //   return capitalLetters.length;
  //
  /* ASCII Code 사용(대문자:A(65)-Z(90), 소문자:a(97)-z(122)) */
  //   let count = 0;
  //   for (let char of inputString) {
  //     const charAt = char.charCodeAt();
  //     if (charAt >= 65 && charAt <= 90) count++;
  //   }
  //   return count;

  /* 내장함수 사용 */
  let count = 0;
  for (let char of inputString) {
    if (char === char.toUpperCase()) count++;
  }
  return count;
}

console.log(findCapitalLetter("AnnieCho"));
