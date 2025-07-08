/**
 * 대문자로 이루어진 영단어 입력 시 'A'를 모두 '#'으로 바꾸어 출력하라.
 * ex) BANANA -> B#N#N#
 */

function AtoHash(string) {
  /* 내 첫 코드
  const stringArray = [...string];

  for (let word of string) {
    if (stringArray[i] === "A") {
      stringArray.splice(i, 1, "#");
    }
  }

  return stringArray.join("");
  */
  /* 강의 1번 풀이
  let answer = "";
  for (let word of string) {
    if (word === "A") {
      answer += "#";
    } else {
      answer += word;
    }
  }

  return answer;
  */

  /* 강의 2번 풀이 - 정규식 활용하기 */
  const answer = string.replace(/A/g, "#");
  return answer;
}

console.log(AtoHash("BANANA"));

/**
 * 나만의 번외편 - 대문자에 대해서만 '#'으로 변경하기
 * 
function onlyCapitalWordToHash(newString) {
  let hashString = [...newString];

  for (let i = 0; i < newString.length; i++) {
    console.log(newString[i], newString[i].charCodeAt());
    if (newString[i].charCodeAt() >= 65 && newString[i].charCodeAt() <= 90) {
      hashString.splice(i, 1, "#");
    }
  }

  return hashString.join("");
}

console.log(onlyCapitalWordToHash("BaNaNa"));
*/
