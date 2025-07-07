/**
 * 삼각형 판별하기
 *
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
 * 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고, 만들 수 없으면 "NO"를 출력한다.
 */

function solution(a, b, c) {
  /*
    // 한 변의 길이보다 나머지 두 변의 길이를 합친 값이 더 커야지만 삼각형을 이룰 수 있다.
    if(a < b+c && b < a+c && c < a+b){
        return 'YES';
    }

    return 'NO';
    */

  const max = Math.max(a, b, c);
  const sum = a + b + c;

  return max < sum - max ? "YES" : "NO";
}

console.log(solution(10, 1, 2));
