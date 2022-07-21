/* 프로그래머스 : 내적 */
function solution(a, b) {
    /* my answer */
    const answer = a.reduce((cur, ele, idx) => {
      return cur + ele * b[idx]
    }, 0)
    
    return answer

    /* reference code */
    // let sum = 0
    // for(let i=0; i<a.length; i++) {
    //     sum += a[i] * b[i]
    // }
    // return sum
}