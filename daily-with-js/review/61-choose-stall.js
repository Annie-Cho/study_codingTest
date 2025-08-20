/**
 * 마구간 정하기
 *
 * ex) 3(말의 마리수), [1, 2, 8, 4, 9](마구간 좌표)
 * => 3 => 가장 가까운 두 말의 최대 거리
 */

function chooseStall(horseCount, stallPos = []) {
  stallPos.sort((a, b) => a - b);

  let lt = 0;
  let rt = stallPos.at(-1);
  let lastStall = stallPos[0];
  let count = 1;
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    for (stall of stallPos) {
      if (stall - lastStall >= mid) {
        count++;
        lastStall = stall;
      }
    }

    if (count < horseCount) {
      rt = mid - 1;
    } else {
      answer = mid;
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(chooseStall(3, [1, 2, 8, 4, 9]));
