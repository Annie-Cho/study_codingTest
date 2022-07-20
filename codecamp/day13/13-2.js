/* 프로그래머스 : 두 정수 사이의 합
reference 답이 나와 같음.
*/

function solution(a, b) {
    var answer = 0;
    
    /* reference에서 문제에서 a와 b가 같을 때 return a 해주면 같은 경우 조금 더 빠르게 프로그램을 끝낼 수 있음 */
    if(a === b)
        return a

    const max = Math.max(a, b)
    const min = Math.min(a, b)
    
    for(let i=min; i<=max; i++) {
        answer += i
    }
    
    return answer;
}