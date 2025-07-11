/**
 * 중복문자제거
 *
 * 소문자로 된 한개의 문자열에서 중복되는 문자열을 나열된 순서대로 1개씩만 출력하시오.
 * ex) ksekkset
 */

function deleteDuplicatedChar(newString) {
  let answer = "";

  for (let i = 0; i < newString.length; i++) {
    if (i === newString.indexOf(newString[i])) {
      answer += newString[i];
    }
  }

  return answer;
}

/**
 * 번외편
 *
 * 중복문자 제거 후 각각의 문자가 몇 번 나왔는지 개수를 나타내시오.
 */
function deleteDuplicatedCharAndCount(newString) {
  let answer = {};

  for (let char of newString) {
    let count = answer[char];

    if (!!count) {
      answer[char] += 1;
    } else {
      answer = {
        ...answer,
        [char]: 1,
      };
    }
  }

  Object.entries(answer).forEach(([key, value]) =>
    console.log(`${key} = ${value}`)
  );
}

console.log(deleteDuplicatedChar("ksekkset"));
console.log(deleteDuplicatedCharAndCount("ksekkset"));
