/**
 * 중복단어제거
 *
 * N개의 문자열이 입력되면 중복된 문자열을 제거하라.
 * N은 3 <= N <= 30개가 주어진다.
 *
 */

function deleteDuplicatedWord(array) {
  let answer = [];

  /* for문 사용하기 -> 안좋은 점이 배열 push 기능이 있어야함
  for (let i = 0; i < array.length; i++) {
    if (i === array.indexOf(array[i])) {
      answer.push(array[i]);
    }
  }

  /* 강의 정답 */
  answer = array.filter((word, idx) => idx === array.indexOf(word));

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}

console.log(deleteDuplicatedWord(["good", "time", "good", "time", "student"]));
