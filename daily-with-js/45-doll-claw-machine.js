/**
 * 크레인 인형뽑기(카카오)
 */

function dollClawMachine(board, moves) {
  const list = [];
  let answer = 0;

  for (let move of moves) {
    for (i = 0; i < board.length; i++) {
      const cranePos = board[i][move - 1];
      if (cranePos !== 0) {
        board[i][move - 1] = 0;

        let lastDoll = list.at(-1);
        if (lastDoll !== cranePos) {
          list.push(cranePos);
        } else {
          list.pop();
          answer += 2;
        }
        break;
      }
    }
  }

  //   console.log(list);
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4]; //4, 3, 1, 1, 3, 2, 0, 4
console.log(dollClawMachine(board, moves));
