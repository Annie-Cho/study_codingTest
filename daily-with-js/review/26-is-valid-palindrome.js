/**
 * 유효한 팰린드롬
 *
 * 앞에서 읽었을 때나 뒤에서 읽었을 때 동일한 문자열을 팰린드롬이라 한다.
 * 팰린드롬이면 YES, 팰린드롬이 아니면 NO를 출력하라.
 * 단, 알파벳 이외의 문자들은 무시한다.
 *
 * ex) found7, time: study; Yduts; emit, 7Dnuof
 */

// 대소문자를 구분하지 않는 경우
function isValidPalindrome(str = "") {
  const alphabetStr = str.toLowerCase().match(/[a-z]/g);
  console.log(alphabetStr.join(""));

  if (alphabetStr.join("") !== alphabetStr.reverse().join("")) {
    return "NO";
  }
  return "YES";
}

// 대소문자를 구분하는 경우
function isValidPalindromeAdvanced(str = "") {
  const alphabetStr = str.match(/[a-z]|[A-Z]/g);

  // reverse()를 사용하지 않는 방법
  for (let i = 0; i < Math.floor(alphabetStr.length / 2); i++) {
    if (alphabetStr[i] !== alphabetStr[alphabetStr.length - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(isValidPalindrome("found7, time: study; Yduuts; emit, 7Dnuof"));
console.log(
  isValidPalindromeAdvanced("founD7, time: studY; Yduts; emit, 7Dnuof")
);
