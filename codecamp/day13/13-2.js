/* 프로그래머스 : 두 정수 사이의 합 */

function solution(a, b) {
    var answer = 0;
    
    const max = Math.max(a, b)
    const min = Math.min(a, b)
    
    for(let i=min; i<=max; i++) {
        answer += i
    }
    
    return answer;
}