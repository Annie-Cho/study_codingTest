/* 프로그래머스 : 시저암호 reference code 4 */

//charCodeAt() : 주어진 문자의 유니코드 데이터(숫자)를 반환
//String.fromCharCode() : 유니코드 데이터(숫자)를 문자로 반환
//A ~ Z : 65 ~ 90
//a ~ z : 97 ~ 122

function solution(s, n) {
	let answer = ''
  
  for(let i=0; i<s.length; i++) {
    // console.log(s[i], s[i].charCodeAt())
    if(s[i] === ' ') {
      answer += s[i]
    } else {
      let idx = s[i].charCodeAt() + n
      if((idx > 90 && (idx-n) < 97) || idx > 122) {
       	idx -= 26
      }
      answer += String.fromCharCode(idx)
    }
  }
  return answer
}

solution("A Z", 1)