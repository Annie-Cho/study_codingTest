/*
toString(redix)
- redix : 수의 값을 나타내기 위해 사용될 기준을 정하는 2 ~ 36사이의 정수. redix값이 지정되지 않으면, 임의로 10진수라고 가정한다.  
- 쉽게 말해, toString()만 쓰면 Number를 String형태로 바꾸고 redix를 쓸 경우 해당 진수로 Number를 바꿔준다.

example)
const num1 = 10
const num2 = 7.5
const num3 = -10

num1.toString()         //'10'
num2.toString()         //'7.5'

num1.toString(2)        //'1010'
num1.toString(16)       //'a'
num3.toString(16)       //'-a'

==========

match(regexp)
- regexp : 정규식 개체
- 정규식에 해당되는 값을 찾는다.

==========

replace(regexp | substr, newSubstr|function)
- 정규식(regexp)에 일치하는 항목이나 문자열(substr)을 newSubstr이나 function이 반환한 값으로 대체한다.
*/

function solution(s) {
  /* my answer */
  //   let count = 0;
  //   let deleted = 0;
  //   let cirCount = 0;

  //   while (s !== "1") {
  //     for (let i = 0; i < s.length; i++) {
  //       if (s[i] === "1") {
  //         count++;
  //       } else {
  //         deleted++;
  //       }
  //     }
  //     s = count.toString(2);
  //     count = 0;
  //     cirCount++;
  //   }
  //   return [cirCount, deleted];

  /* reference code */
  let answer = [0, 0];

  while (s.length > 1) {
    answer[0]++;
    answer[1] += s.match(/0/g || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
