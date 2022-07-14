/* 프로그래머스 : 자연수뒤집어 배열로 만들기 */

function solution(n) {
    var answer = [];
    
    /* my answer */
    // let arr = String(n).split('').reverse() 
    // answer = arr.map((ele, idx) => {
    // 	return Number(ele)
    // })
    
    
    /* refernce code 1*/
    // n = String(n)
    // n = n.toString()
    // for(let i=n.length-1; i >= 0; i--) {
    //     answer.push(Number(n[i]))
    // }
    
    
    /*reference code 2 */
    answer = n.toString().split('').reverse().map((ele) => {
        return Number(ele)        
    })
    console.log(answer)
    
    return answer;
}