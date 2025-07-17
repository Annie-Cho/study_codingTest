/**
 * 가장 짧은 문자거리
 *
 * 문자열 s와 문자 t가 주어지는 경우 문자열 s의 각 문자가 문자 t와 떨어진 최소 거리를 출력하시오.
 * 문자열의 길이는 100을 넘지 않는다.
 *
 * ex) teachermode e
 * -> 1 0 1 2 1 0 1 2 2 1 0
 */

const maxStrLength = 100;

function findDistanceBetweenWord(str, target) {
  let count = maxStrLength;
  const answer = [];

  // 왼 -> 오
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count = 0;
      answer[i] = count;
    } else {
      answer[i] = ++count;
    }
  }

  // 오 -> 왼
  count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== target) {
      count++;
      if (answer[i] > count) {
        answer[i] = count;
      }
    } else {
      count = 0;
    }
  }

  return answer.join(" ");
}

console.log(findDistanceBetweenWord("teachermode", "e"));
