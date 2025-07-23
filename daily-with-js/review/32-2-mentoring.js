/**
 * 멘토링
 *
 * 학생 수 N(1<=N<=20)명이 M(1<=M<=10)번의 테스트를 진행한다.
 * 멘토링은 멘토와 멘티가 한 짝으로, 멘토는 멘티보다 등수가 앞서야 한다.
 * M번의 테스트 성적이 주어지면 멘토와 멘티가 되는 경우의 수를 출력하시오.
 *
 * ex)4명 3번의 테스트
 * 3, 4, 1, 2
 * 4, 3, 2, 1
 * 3, 1, 4, 2
 * => 3
 */

function findMentoring(testResult) {
  const studentCount = testResult[0].length;
  const testCount = testResult.length;
  let answer = 0;

  for (let i = 1; i <= studentCount; i++) {
    for (let j = 1; j <= studentCount; j++) {
      let count = 0;

      if (i === j) continue;
      for (let k = 0; k < testCount; k++) {
        let mentor = 0;
        let mentee = 0;

        for (let l = 0; l < studentCount; l++) {
          if (testResult[k][l] === i) {
            mentor = l;
          } else if (testResult[k][l] === j) {
            mentee = l;
          }
        }

        if (mentor < mentee) count++;
      }
      if (count === testCount) answer++;
    }
  }

  return answer;
}

const testResult = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(findMentoring(testResult));
