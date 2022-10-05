function solution(arr) {
    /* 1 */
    const sum = arr.reduce((acc, ele) => {
      return acc + ele
    }, 0)
    return sum / arr.length

    /* 2 
    let sum = 0  
    for(let i=0; i<arr.length; i++) {
      sum += arr[i]
    }
    return sum / arr.length
    */
}

solution([1, 2, 3, 4])