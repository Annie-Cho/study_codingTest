/* 프로그래머스 : 없는 숫자 더하기 */
function solution(numbers) {
    var answer = 0;
    let result = new Array(10)
    
    result.fill(0, 0)
    numbers.forEach((ele) => {
      result[ele]++
    })
  	
  	result.forEach((ele, idx) => {
      if(ele === 0) {
        answer += idx
      }
    })
    return answer;
}