/* 프로그래머스 :  Jadencase 문자열 만들기 */
function solution(s) {
// const answer = s.toLowerCase().split(' ').map((ele1) => {
//   return ele1.split('').map((ele2, i) => {
//     return i === 0 ? ele2.toUpperCase() : ele2
//   }).join('')
// })
// return answer.join(' ')
    
//     let answer = ''
//     s = s.toLowerCase()
//     let idx = 0
//     for(let i=0; i<s.length; i++) {
//         let word = s[i]
//         if(s[i] === ' ') {
//             idx = 0
//         } else {
//             if(idx === 0) {
//                 word = s[i].toUpperCase()
//             }
//             idx++
//         }
//         answer += word
//     }
    
//     return answer
    
        const answer = s.toLowerCase().split(' ').map((str) => {
            console.log(str.substr(1))
            return str === '' ? str : str[0].toUpperCase() + str.substr(1)
        }).join(' ')
        return answer
}