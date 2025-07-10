/**
 * 한 개의 문자를 입력받고, 특정 문자열을 입력받은 후
 * 문자열에 문자가 몇 개 존재하는지 알아내시오.
 * ex) COMPUTERPROGRAMMING R
 *
 * 문자열의 길이는 100을 넘지 않는다.
 */

function findChar(newString, char) {
  /* 정규식을 사용한 방법
  const regex = new RegExp(`${char}`, "g");
  const answer = newString.match(regex);
  return answer.length;
  */
  //
  /* for문 사용 
  let count = 0;
  for (let newChar of newString) {
    if (newChar === char) count++;
  }

  return count;
  */
  //
  /* 내장함수 사용 - char를 기준으로 문자열을 나누어 개수를 계산한다. */
  // const answer = newString.split(char);
  // return answer.length - 1;

  /* 내장함수 indexOf() 사용하기 */
  let answer = 0;

  let pos = newString.indexOf(char);
  while (pos !== -1) {
    answer++;
    pos = newString.indexOf(char, pos + 1);
  }
  return answer;
}

console.log(findChar("COMPUTERPROGRAMMING", "R"));
