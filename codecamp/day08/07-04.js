/* 프로그래머스 : 나누어 떨어지는 숫자 배열 */
function solution(arr, divisor) {
    var answer = [];
    
    /* my answer 1 */
  	// arr.forEach((ele, idx) => {
  	// if(ele % divisor === 0)
  	// answer.push(ele)
  	// if(idx === (arr.length-1) && answer.length === 0) {
  	// answer.push(-1)
  	// }
  	// })
  	// answer = answer.sort((a, b) => a - b )
    
    /* my answer 2 */
    answer = arr.filter((ele, idx) => {
      return ele % divisor === 0
    }).sort((a, b) => a - b)
    
    if(answer.length === 0)
        answer.push(-1)
    
    
    /*refernce code 1 */
    // for(let i=0; i<arr.length; i++) {
    //     if(arr[i] % divisor === 0) {
    //         answer.push(arr[i])
    //     }
    // }
    // return answer.length === 0? [-1] : answer.sort((a, b) => {return a - b})

    
    return answer;
}