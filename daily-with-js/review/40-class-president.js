/**
 * 학급 회장
 *
 * 학급 회장 후보로 기호 A, B, C, D, E 후보가 등록하였다.
 * 한 명의 학급 회장을 뽑을 때 어떤 기호의 후보가 학급 회장이 되었는지 출력하시오.
 *
 * ex) BACBACCACCBDEDE
 * => C
 */

function findClassPresident(voteString = []) {
  const result = new Map();

  for (let vote of voteString) {
    const lastVote = result.get(vote) ?? 0;
    result.set(vote, lastVote + 1);
  }

  let answer = "";
  let max = 0;
  for (let [key, vote] of result) {
    if (max < vote) {
      answer = key;
      max = vote;
    }
  }

  return answer;
}

const voteString = "BACBACCACCBDEDE";
console.log(findClassPresident(voteString));
