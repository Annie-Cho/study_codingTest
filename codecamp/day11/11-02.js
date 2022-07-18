/* 프로그래머스 : 제일 작은 수 제거하기 */

function solution(arr) {
    // var answer = [];
  
    /* my answer */
  	// if(arr.length <= 1) {
  	// 	answer.push(-1)
  	// } else {
  	// let sortNum = [...arr]
  	// sortNum = sortNum.sort((a, b) => a - b)
  	// arr.forEach((ele) => {
  	// if(sortNum[0] !== ele) {
  	// answer.push(ele)
  	// }
  	// })
  	// }
    // return answer
    
    /* reference code */
//     let min = arr[0]
//     for(let i=1; i<arr.length; i++) {
//         if(min > arr[i])
//             min = arr[i]
//     }
    
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] !== min)
//             answer.push(arr[i])
//     }
    
//     return answer.length === 0 ? [-1] : answer
    
    /* reference code2 */
    const min = Math.min(...arr)
    const answer = arr.filter((ele) => {
        return ele !== min
    })
  	return answer.length === 0 ? [-1] : answer
}