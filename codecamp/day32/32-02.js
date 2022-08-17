function solution(progresses, speeds) {
    let day = 0
    
    const answer = progresses.map((el, i) => {
      const process = Math.ceil((100 - el) / speeds[i])
      
      if(day < process) {
        day = process
      }
      return day
    }).reduce((acc, cur, i, arr) => {
      if(cur !== arr[i-1]) {
        acc[acc.length] = 1
      } else {
        acc[acc.length - 1]++
      }
      // console.log(acc, cur)
      return acc
    }, [])
    
    return answer
  }
  
  solution([93, 30, 55], [1, 30, 5])
  // solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]	)