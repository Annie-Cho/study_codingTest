/**
 * 크레인 인형뽑기(카카오)
 *
 * 최종적으로 삭제된 인형의 개수를 구하시오.
 */

function dollClawMachine(board = [], moves = []) {
  const stack = [];
  let answer = 0;

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      const currentDoll = board[i][move - 1];
      if (currentDoll !== 0) {
        const lastDoll = stack.at(-1);
        if (lastDoll === currentDoll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(currentDoll);
        }

        board[i][move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(dollClawMachine(board, moves));
