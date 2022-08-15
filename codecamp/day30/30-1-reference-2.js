function solution(id_list, report, k) {
    const reporter = {} 	//신고한 사람이 대상으로 삼은 사람이 누구인지 저장
    const reportList = {}	//신고당한 사람의 누적 신고량을 저장

    report = Array.from([...new Set(report)])
		report.forEach((el) => {
      el = el.split(' ')
      
      if(reporter[el[0]] === undefined) {
        reporter[el[0]] = []
      }
      if(reportList[el[1]] === undefined) {
        reportList[el[1]] = 0
      }
      
      reporter[el[0]].push(el[1])
      reportList[el[1]]++
    }) 
  	// console.log(reporter)
  // console.log(reportList)
  	const answer = id_list.map((ele) => {
      const arr = reporter[ele] || []
      // console.log(ele, arr)
      
      return arr.reduce((acc, cur) => {
        // console.log(cur, reportList[cur])
        return acc + (reportList[cur] >= k ? 1 : 0)
      }, 0)
    })
    // console.log(answer)
    return answer
  }