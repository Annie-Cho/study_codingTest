/* 프로그래머스 : 음양 더하기 */
function solution(absolutes, signs) {
    const answer = absolutes.reduce((cur, ele, i) => {
      return signs[i] ? cur + ele : cur + (ele - (ele*2))
    }, 0)
    return answer
}