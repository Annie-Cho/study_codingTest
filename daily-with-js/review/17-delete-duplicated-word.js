/**
 * 중복단어제거
 *
 * N개의 문자열이 입력되면 중복된 문자열을 제거하라.
 * N은 3 <= N <= 30개가 주어진다.
 *
 * ex)
 * 5
 * good
 * time
 * good
 * time
 * student
 *
 * => good
 * time
 * student
 */

function deleteDuplicatedWord(words) {
  const answer = words.filter((word, idx) => idx === words.indexOf(word));

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}

console.log(deleteDuplicatedWord(["good", "time", "good", "time", "student"]));
