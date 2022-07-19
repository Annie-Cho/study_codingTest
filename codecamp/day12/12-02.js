function solution(numbers) {
    let result = []
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            result.push(numbers[i] + numbers[j])
        }
    }
  
//     /* 두 코드 중 아래가 더 속도 빠름 */
//     /* 1번 코드 */
//   	// const answer = new Set(result.sort((a, b) => a-b))
//   	// return [...answer]
    
//     /* 2번 코드 */
    const answer = [...new Set(result)]
    return answer.sort((a, b) => a - b)
    
    /* reference code */
    // for(let i=0; i<numbers.length; i++) {
    //     for(let j=i+1; j<numbers.length; j++) {
    //         const sum = numbers[i] + numbers[j]
    //         if(!result.includes(sum)) {
    //             result.push(sum)
    //         }
    //     }
    // }
    // return result.sort((a, b) => a - b)
    
    /* reference code 2 */
//     const answer = new Set([])
    
//     numbers.forEach((num1, i) => {
//         numbers.slice(i+1)
//             .forEach((num2) => {
//                 const sum = num1 + num2
//                 answer.add(sum)
//             })
//     })
    
//     return [...answer].sort((a, b) => a - b)
}