/* isNaN
- NaN : Not a Number = 숫자가 아니다.

<isNaN()과 Number.isNaN()의 차이점>
Number.isNaN()은 정말 정확하게 NaN을 판별하는데, NaN값 혹은 문자열을 포함하는 덧셈이 아닌 계산식은 true를 리턴하고 문자열의 경우에는 false를 리턴한다.
따라서 문자열일 경우에는 숫자로 값을 변경한 후 사용할 수 있다.
isNaN은 숫자로 변경하지 않고 일반 문자열을 그대로 넣었을 경우에도 판별이 가능하다.
*/

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}
