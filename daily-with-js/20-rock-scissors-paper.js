/**
 * 가위 바위 보
 *
 * A와 B가 가위 바위 보를 할 때, 총 N번의 게임을 하여 각 회마다 누가 이겼는지 출력하시오.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보 이다.
 * 단, 비길 경우에는 D를 출력한다.
 */

function rockScissorsPaper(A, B) {
  let answer = [];
  for (let i = 0; i < A.length; i++) {
    // A가 이기는 경우를 생각한다.
    // A: 가위 -> B: 보 = A Win
    // A: 바위 -> B: 가위 = A Win
    // A: 보 -> B:바위 = A Win
    if (
      (A[i] === 1 && B[i] === 3) ||
      (A[i] === 2 && B[i] === 1) ||
      (A[i] === 3 && B[i] === 2)
    ) {
      answer.push("A");
    } else if (A[i] === B[i]) {
      answer.push("D");
    } else {
      answer.push("B");
    }
  }

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}

console.log(rockScissorsPaper([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
