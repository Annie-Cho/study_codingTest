/* 프로그래머스 : 내적 */
function solution(a, b) {
    const answer = a.reduce((cur, ele1, idx) => {
      return cur += ele1 * b[idx]
    }, 0)
    
    return answer
}