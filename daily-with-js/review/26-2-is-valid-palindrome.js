/**
 * 유효한 팰린드롬
 *
 * 앞에서 읽었을 때나 뒤에서 읽었을 때 동일한 문자열을 팰린드롬이라 한다.
 * 팰린드롬이면 YES, 팰린드롬이 아니면 NO를 출력하라.
 * 단, 알파벳 이외의 문자들은 무시한다.
 *
 * ex) found7, time: study; Yduts; emit, 7Dnuof
 */

function isValidPalindrome(str) {
  alphabetStr = str.toLowerCase().match(/[a-z]|[A-Z]/g);

  for (let i = 0; i < Math.floor(alphabetStr.length / 2); i++) {
    if (alphabetStr[i] !== alphabetStr[alphabetStr.length - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(isValidPalindrome("found7, time: study; Yduts; emit, 7Dnuof"));
