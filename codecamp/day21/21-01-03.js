/* 프로그래머스 : 시저암호 reference code 3 */

const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(s, n) {
	const answer = s.split('')
  								.reduce((acc, cur) => {
                    const word = lower.includes(cur) ? lower : upper
                    let idx = word.indexOf(cur) + n
                    // console.log(cur, idx, word)
                    if(idx >= 26) {
                      idx -= 26
                    }
  									return acc + (
                    	cur === ' ' ? cur : word[idx]
                    )
                  }, '')
  
  return answer
}

solution("A Z", 1)