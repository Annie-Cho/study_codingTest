/* 프로그래머스 : 콜라츠 추측 */

function solution(num) {
    var count = 0;
    
    /* my answer를 좀 더 줄인 코드 */
    while(num !== 1 && count !== 500) {
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
        count ++
    }
    return num === 1 ? count : -1
    
    /* reference code */
    // new Array(500).fill(1).forEach((el) => {
    //     if(num !== 1) {
    //         count ++
    //         num = num % 2 === 0 ? num / 2 : (num * 3) + 1
    //     }  
    // })
    // return num !== 1 ? -1 : count
    
    
    /* my answer */
//     let count = 0
//     let myNum = num;
    
//     if(myNum === 1) {
//         answer = 0
//       	return answer
//     }
//     while(true) {
//         count ++
//         myNum = myNum % 2 === 0 ? myNum / 2 : myNum * 3 + 1
//         if(myNum === 1) {
//             answer = count
//             break;
//         } else if(count > 500) {
//             answer = -1
//             break;
//         }
//     }
        // return answer;
}