/* 프로그래머스 : 모의고사 */
const answerTable = [
    //1번학생
    [1, 2, 3, 4, 5],
    //2번학생
    [2, 1, 2, 3, 2, 4, 2, 5],
    //3번학생
    [3, 3, 1, 1, 2, 2, 4 ,4 ,5, 5]
  ]
  
  function solution(answers) {
      const scoreList = answerTable.map((el, i) => {
      const score = answers.reduce((acc, cur, j) => {
        // console.log(acc, cur, el[i % el.length])
        return acc + (cur === el[j % el.length] ? 1 : 0)
      }, 0)
      // console.log(score)
      return {student : i + 1, score}
    })
    // console.log(scoreList)
    const biggest = Math.max(...scoreList.map((el) => {
      return el.score
    }))
    // console.log(biggest)
    
    const answer = scoreList.filter((el) => {
      return biggest === el.score
    }).map((el) => {
      return el.student
    })
    // console.log(answer)
    
    return answer
  }
  
  solution([1, 2, 3, 4, 5])
  solution([1, 3, 2, 4, 2])