/**
 * 최대점수 구하기(DFS)
 *
 * 제한시간 M 안에 N개의 문제 중 최대 점수를 얻을 수 있도록 한다.
 * 최대 점수를 출력하시오.
 *
 * ex) 5(문제의 개수), 20(제한시간), [
 * [10(점수), 5(시간)],
 * [25, 12],
 * [15, 8],
 * [6, 3],
 * [7, 4]
 * ]
 * => 41
 */

function getMaxScore(maxTime, questions) {
  let answer = 0;

  function DFS(pos, totalTime, score) {
    if (totalTime > maxTime) {
      return;
    }

    if (pos === questions.length) {
      answer = Math.max(answer, score);
    } else {
      DFS(pos + 1, totalTime + questions[pos][1], score + questions[pos][0]);
      DFS(pos + 1, totalTime, score);
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
