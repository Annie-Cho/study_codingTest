/* my answer - 효율성에서 wrong */
function solution(id_list, report, k) {
    const temp = new Array(id_list.length).fill(0)
    report = Array.from([...new Set(report)])
  	console.log(report)
      for(let i=0; i<report.length; i++) {
      const list = report[i].split(' ') 
      const idx = id_list.indexOf(list[1])
      temp[idx] ++
    }    
    console.log(temp)
    
    const answer = new Array(id_list.length).fill(0)
    for(let i=0; i<id_list.length; i++) {
      for(let j=0; j<report.length; j++) {
        const names = report[j].split(' ')
        const idx = id_list.indexOf(names[1])
        if(id_list[i] === names[0] && temp[idx] >= k) {
          answer[i] ++
        }
      }
    }
    console.log(answer)
  }
  
  // solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)

// solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)