/**
 * 마구간 정하기
 *
 * ex) 3(말의 마리수), [1, 2, 8, 4, 9](마구간 좌표)
 * => 3 => 가장 가까운 두 말의 최대 거리
 */

function chooseStall(horseCount = 0, stallPos = []) {
  stallPos.sort((a, b) => a - b);

  let lt = 1;
  let rt = stallPos.at(-1);
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    let count = 1;
    let lastPos = 1;
    for (let i = 0; i < stallPos.length; i++) {
      if (stallPos[i] - lastPos >= mid) {
        count++;
        lastPos = stallPos[i];
      }
    }

    if (count < horseCount) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
      answer = mid;
    }
  }

  return answer;
}

console.log(chooseStall(3, [1, 2, 8, 4, 9]));
