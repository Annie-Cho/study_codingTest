/* 프로그래머스 - 하샤드 수 */

function solution(x) {
    var answer = true;
    
    let sum = 0
    const result = String(x).split('')
    for(let i=0; i<result.length; i++) {
        sum += Number(result[i])
    }
    
    answer = x % sum === 0
    
    return answer;
}