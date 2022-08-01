/* 프로그래머스 : 시저암호 reference code 2 */

const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(s, n) {
  let answer = ''
  for(let i=0; i<s.length; i++) {
    if(s[i] === ' ') {
      answer += s[i]
    } else {
      const word = lower.includes(s[i]) ? lower : upper
      let idx = word.indexOf(s[i]) + n
      if(idx >= 26) {
        idx -= 26
      }
      answer += word[idx]
      // console.log(idx, s[i], word, word[idx])
    }
  }
  
  return answer
}

solution("AB", 1)