/* 프로그래머스 - 정수 제곱근 판별 */
function solution(n) {
    
    /* my answer */
  	var answer = 0;
  	const num = Math.sqrt(n)
  	answer = Number.isInteger(num) ? Math.pow((num+1), 2) : -1
    
    /* reference code */
    // var answer = -1
    // for(let i=1; i*i <= n; i++) {
    //     if(i*i === n) {
    //         answer = (i+1) * (i+1)
    //     }
    // }
    
    /* 제곱근 이런 식으로도 표현할 수 있다*/
    // return (num+1) ** 2
    
    return answer
}