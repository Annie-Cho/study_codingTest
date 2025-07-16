/**
 * 가장 짧은 문자거리
 *
 * 문자열 s와 문자 t가 주어지는 경우 문자열 s의 각 문자가 문자 t와 떨어진 최소 거리를 출력하시오.
 * 문자열의 길이는 100을 넘지 않는다.
 *
 * ex) teachermode e
 * -> 1 0 1 2 1 0 1 2 2 1 0
 */

function findDistanceBetweenWord(str, target) {
  const answer = Array.from({ length: str.length }, () => 0);

  // console.log(str.split(""));

  // 한 글자씩 +1, target을 만나면 다시 0부터 시작(왼 -> 오)
  let cur = 100;
  for (let i = 0; i < str.length; i++) {
    cur = str[i] !== target ? ++cur : 0;
    answer[i] = cur;
  }

  // 한 글자씩 +1, target을 만나면 다시 0부터 시작(오 -> 왼)
  cur = 100;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== target) {
      cur++;
      answer[i] = Math.min(answer[i], cur);
    } else {
      cur = 0;
    }
  }

  return answer;
}

console.log(findDistanceBetweenWord("teachermode", "e"));
