/* 프로그래머스 : 이상한 문자 만들기 */

function solution(s) {
    var answer = '';
    
    /* my answer */
  	// let result = []  
  	// let x = s.split(' ')
  	// for(let i=0; i<x.length; i++) {
  	// result.push(x[i].split('').map((ele, idx) => {
  	// return idx % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase()
  	// }).join(''))
  	// }
  	// answer = result.join(' ')
    

    /* reference code 1*/
    // let idx = 0
    // for(let i=0; i<s.length; i++) {
    //     // console.log(s[i], idx)
    //     if(s[i] === ' ') {
    //         idx = 0;
    //         answer += ' '
    //     } else {
    //         answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
    //         idx ++
    //     }
    // }
    // console.log(answer)
    
    
    /* reference code 2 */
    s = s.split(' ')
    
    answer = s.map((ele) => {
        ele = ele.split('')
        return ele.map((letter, letterIdx) => {
            return letterIdx % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('')
    }).join(' ')
    console.log(answer)
    
    return answer;
}