/* 프로그래머스 : 행렬의 덧셈 */
function solution(arr1, arr2) {
    /* my answer */
    // var answer = []
  
    // for(let i=0; i<arr1.length; i++) {
    //   let result = []
    //   for(let j=0; j<arr1[i].length; j++) {
    //     result.push(arr1[i][j] + arr2[i][j])
    //   }
    //   answer.push(result)
    // }

    /* reference code 1 */
//     var answer = [[]]
  
//     for(let i=0; i<arr1.length; i++) {
//       let result = []
//       for(let j=0; j<arr1[i].length; j++) {
//         const sum = arr1[i][j] + arr2[i][j]
//         if(answer[i] === undefined) {
//             answer[i] = []
//         }
//         answer[i][j] = sum
//       }
//     }

    /* reference code 2 */
    const answer = arr1.map((ele1, idx1) => {
      return ele1.map((ele2, idx2) => {
          return ele2 + arr2[idx1][idx2]
      })
    })
    
    return answer;
}