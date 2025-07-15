/**
 * 유효한 팰린드롬
 *
 * 앞에서 읽었을 때나 뒤에서 읽었을 때 동일한 문자열을 팰린드롬이라 한다.
 * 팰린드롬이면 YES, 팰린드롬이 아니면 NO를 출력하라.
 * 단, 알파벳 이외의 문자들은 무시한다.
 *
 * ex) found7, time: study; Yduts; emit, 7Dnuof
 */

function isValidPalindrome(newString) {
  /* for문으로 문제 풀기
  // 알파벳만 남기기
  let alphabet = "";

  for (let i = 0; i < newString.length; i++) {
    if (
      (newString.charCodeAt(i) >= 65 && newString.charCodeAt(i) <= 90) ||
      (newString.charCodeAt(i) >= 97 && newString.charCodeAt(i) <= 122)
    ) {
      alphabet += newString[i].toLowerCase();
    }
  }

  // console.log(alphabet);

  // 팰린드롬 확인
  for (let i = 0; i < Math.floor(alphabet.length / 2); i++) {
    if (alphabet[i] !== alphabet[alphabet.length - 1 - i]) {
      return "NO";
    }
  }

  return "YES";
  */

  /* 내장함수 활용하기 */
  // 정규식 사용하여 알파벳이 아닌 문자는 빈 문자열로 치환
  const alphabet = newString.toLowerCase().replace(/[^a-z]/g, "");

  // 팰린드롬 확인
  if (alphabet !== alphabet.split("").reverse().join("")) {
    return "NO";
  }
  return "YES";
}

console.log(isValidPalindrome("found7, time: study; Yduts; emit, 7Dnuof"));
