/**
 * N개의 문자열 입력 시 가장 긴 문자열을 찾으시오.
 *
 * ex)
 * 3
 * hello
 * codingTest
 * december
 *
 * 정답 : codingTest
 */

function findLongestString(stringList) {
  let answer = "";

  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > answer.length) {
      answer = stringList[i];
    }
  }
  return answer;
}

console.log(findLongestString(["teacher", "AnnieChoIsMe", "master"]));
