/* 프로그래머스 - 하샤드 수 */

function solution(x) {
    var answer = true;
    
    let sum = 0

    /* reference code : String으로 변환하면 배열처럼 접근할 수 있음! 따라서 굳이 split()하지 않아도 됨!! */
    const result = String(x)
    for(let i=0; i<result.length; i++) {
        sum += Number(result[i])
    }
    
    answer = x % sum === 0
    
    return answer;

    /* reference code */
    // const answer = String(x)
    //                 .split('')
    //                 .reduce((cur, ele) => {
    //                     return cur + Number(ele)
    //                 }, 0)
    
    // return x % answer === 0;
}