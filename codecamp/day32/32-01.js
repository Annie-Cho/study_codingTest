function solution(progresses, speeds) {
    const answer = []
    let day = 0
    // let idx = 0
    
    for(let i=0; i<progresses.length; i++) {
      //100%완성까지 며칠이 걸리는지
      const process = Math.ceil((100 - progresses[i]) / speeds[i])
      console.log(day, process)
      if(day < process) {
        day = process
        /* 필요 없음.
        if(answer[idx] === undefined) {
          answer[idx] = 1
          idx ++
        }
        */
        answer[answer.length] = 1
      } else if(day >= process) {
        // answer[idx - 1]++
        
        //개발이 완료됐지만 앞에 있는 기능을 기다려야하는 배포
        answer[answer.length -1]++
      }
      // console.log(day, process, answer, idx)
    }
    return answer
  }
  
  solution([93, 30, 55], [1, 30, 5])
  // solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]	)