/**
 * 최대점수 구하기(DFS)
 *
 * 제한시간 M 안에 N개의 문제 중 최대 점수를 얻을 수 있도록 한다.
 * 최대 점수를 출력하시오.
 *
 * ex) 20(제한시간), [
 * [10(점수), 5(시간)],
 * [25, 12],
 * [15, 8],
 * [6, 3],
 * [7, 4]
 * ]
 * => 41
 */

function getMaxScore(maxTime, quizList) {
  let answer = 0;

  function DFS(pos, score, time) {
    if (time > maxTime) {
      return;
    }

    if (pos === quizList.length) {
      answer = Math.max(score, answer);
    } else {
      DFS(pos + 1, score, time);
      DFS(pos + 1, score + quizList[pos][0], time + quizList[pos][1]);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(
  getMaxScore(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
