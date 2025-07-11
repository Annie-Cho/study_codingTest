/**
 * 점수 계산
 *
 * 문제지의 점수를 계산한다.
 * 1문제 당 1점이고, 연속으로 맞출 경우 가산점이 1점씩 붙는다.
 * ex) 1번문제 맞으면 1점, 2번문제 맞으면 2점, 3번문제 맞으면 3점
 * 틀린 문제는 0점이며, 연속으로 문제를 맞히다가 틀린 경우 다시 1점에서 시작된다.
 * 총 점을 계산하시오.
 *
 * 답이 맞은 경우 = 1
 * 답이 틀린 경우 = 0
 */

function calculateScore(score) {
  let correctCount = 0;

  return score.reduce((acc, cur) => {
    if (cur === 1) {
      correctCount++;
    } else {
      correctCount = 0;
    }

    return acc + correctCount;
  }, 0);
}

console.log(calculateScore([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
