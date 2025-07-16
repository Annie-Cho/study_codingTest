/**
 * 문자열 압축
 *
 * 문자열에서 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복된 횟수를 작성하라.
 * 단, 반복 횟수가 1인 경우 생략한다.
 *
 * ex)KKHSSSSSSSE
 * -> K2HS7E
 */

function compressString(str) {
  let count = 1;
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    let nextWord = str[i + 1] ?? "";

    if (str[i] === nextWord) {
      count++;
    } else {
      answer += str[i];

      if (count > 1) {
        answer += count;
      }
      count = 1;
    }
  }

  return answer;
}

console.log(compressString("KKHSSSSSSSE"));
