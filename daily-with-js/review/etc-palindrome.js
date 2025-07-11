/**
 * 팰린드롬 문제
 *
 * "토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 팰린드롬이라고 한다.
 * 팰린드롬 여뷰를 확인하는 함수 isPalindrome을 작성하라.
 *
 * 함수 isPalindrome은 파라미터 word가 팰린드롬이면 true를 리턴하고, 팰린드롬이 아니면 false를 리턴한다.
 */

function isPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log("토마토", isPalindrome("토마토"));
console.log("기러기", isPalindrome("기러기"));
console.log("조혜인", isPalindrome("조혜인"));
console.log("abcdedcba", isPalindrome("abcdedcba"));
console.log("loool", isPalindrome("loool"));
console.log("study", isPalindrome("study"));
