/**
 * 학급 회장
 *
 * 학급 회장 후보로 기호 A, B, C, D, E 후보가 등록하였다.
 * 한 명의 학급 회장을 뽑을 때 어떤 기호의 후보가 학급 회장이 되었는지 출력하시오.
 *
 * ex) BACBACCACCBDEDE
 * => C
 */

function findClassPresident(votes = "") {
  let result = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";

  for (let i = 0; i < votes.length; i++) {
    const lastVote = result.get(votes[i]) ?? 0;
    result.set(votes[i], lastVote + 1);
  }

  for (let [key, vote] of result) {
    if (max < vote) {
      answer = key;
      max = vote;
    }
  }

  return answer;
}

const votes = "BACBACCACCBDEDE";
console.log(findClassPresident(votes));
