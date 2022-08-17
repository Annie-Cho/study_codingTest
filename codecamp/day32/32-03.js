function solution(progresses, speeds) {
    let day = 0
    
    const answer = progresses.reduce((acc, cur, i) => {
      const process = Math.ceil((100-cur) / speeds[i])
      
      if(day < process) {
        day = process
        acc[acc.length] = 1
      } else if(day >= process) {
        acc[acc.length -1] ++
      }
      console.log(acc, cur)
      return acc
    }, [])
    
    console.log(answer)
  }
  
  solution([93, 30, 55], [1, 30, 5])
  // solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]	)