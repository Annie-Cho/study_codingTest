/**
 * 회문 문자열
 * 앞에서부터 읽을 때나 뒤에서 부터 읽을 때 같은 문자열을 회문 문자열(팰린드롬)이라한다.
 *
 * 회문 문자열일 경우 YES, 회문 문자열이 아닐경우 NO를 출력하라.
 * 단, 대소문자를 구분하지 않는다.
 *
 * ex)gooG -> YES
 */

function isPalindrome(newString) {
  const smallLetter = newString.toLowerCase();
  const middleIndex = Math.floor(newString.length / 2);

  /* for문 사용 
  for (let i = 0; i < middleIndex; i++) {
    if (smallLetter[i] !== smallLetter[newString.length - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
  */

  /* 내장함수 사용 */
  if (smallLetter === newString.split("").reverse().join("").toLowerCase()) {
    return "YES";
  }
  return "NO";
}

console.log(isPalindrome("gooG"));
console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("aaaaaNAaaa"));
