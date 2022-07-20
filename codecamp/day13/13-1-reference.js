function solution(numbers) {
    /* reference code 1 */
    for(let i=0; i<=9; i++) {
        if(numbers.includes(i) === false) {
            answer += i
        }
    }
    return answer
    
    /* reference code 2 */
//     const answer = new Array(9)
//                         .fill(1)
//                         .reduce((cur, ele, i) => {
//                             const num = ele + i
//                             return numbers.includes(num) ? cur : cur + num
//                         }, 0)
    
//     return answer
}