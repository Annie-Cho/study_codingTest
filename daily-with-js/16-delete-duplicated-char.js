/**
 * 중복문자제거
 *
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하시오.
 * ex) ksekkset
 */

/* 내가 해본 기출변형 : 연속적으로 중복된 단어를 삭제한다.
function deleteContinuousChar(input) {
  let before = "";
  let next = "";
  let index = 0;
  let answer = input.split("");

  while (index < answer.length) {
    next = answer[index + 1];

    if (before === answer[index]) {
      if (next === answer[index]) {
        answer.splice(index, 1);
      } else {
        answer.splice(index - 1, 2);
      }

      index = 0;
      before = "";
    } else {
      before = answer[index];
      index++;
    }
  }

  return answer.join("");
}
*/

function deleteDuplicatedChar(input) {
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    // console.log(input[i], i, input.indexOf(input[i]))s;
    if (i === input.indexOf(input[i])) {
      answer += input[i];
    }
  }

  return answer;
}

console.log(deleteDuplicatedChar("ksekkset"));
