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
      const score = [0, 0, 0]
    
    for(let i=0; i<answers.length; i++) {
      for(let j=0; j<answerTable.length; j++) {
        // console.log(answerTable[j][i % answerTable.length], answers[i])
        if(answerTable[j][i % answerTable[j].length] === answers[i]){
          score[j]++
        }
      }
    }
    
    //제일 많이 맞춘 학생의 점수를 구한다.
    const biggest = Math.max(...score)
    console.log(biggest)
    
    const answer = []
    for(let i=0; i<score.length; i++) {
      if(score[i] === biggest) {
        answer.push(i+1)
      }
    }
    //별도의 정렬은 필요가 없다 => 앞에서부터 큰 애들을 집어넣어주기 때문!
    return answer
  }
  
  solution([1, 2, 3, 4, 5])
  solution([1, 3, 2, 4, 2])