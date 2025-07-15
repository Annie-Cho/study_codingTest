/**
 * 등수 구하기
 *
 * 각 학생의 점수에 기반하여 등수를 산정한다.
 * 같은 점수가 입력되는 경우 동일 처리한다.
 * 즉, 가장 높은 점수가 92점인데, 92점이 3명 존재한다면 1등이 3명이고 다음 학생은 4등이다.
 *
 * ex)
 * 87 87 92 100 76
 * => 3 3 2 1 5
 */

function getRank(scores) {
  const length = scores.length;
  let answer = Array.from({ length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (scores[i] < scores[j]) {
        answer[i]++;
      }
    }
  }

  return answer;
}

console.log(getRank([87, 87, 92, 100, 76]));
