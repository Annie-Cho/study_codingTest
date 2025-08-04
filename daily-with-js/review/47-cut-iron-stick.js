/**
 * 쇠막대기
 *
 * 여러 개의 쇠막대기를 레이저로 절단한다.
 * 쇠막대기를 아래에서 위로 겹쳐놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다.
 *
 * 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다.
 * 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
 * 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.
 *
 * 잘려진 쇠막대기 조각의 총 개수를 구하시오.
 * ex)()(((()())(())()))(())
 * => 17
 */

function cutIronSticks(sticks) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] === "(") {
      stack.push(sticks[i]);
    } else if (sticks[i] === ")") {
      const lastStick = sticks[i - 1];
      stack.pop();

      if (lastStick === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }

  return answer;
}

const sticks = "()(((()())(())()))(())";
console.log(cutIronSticks(sticks));
