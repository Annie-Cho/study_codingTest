/**
 * 마구간 정하기
 *
 * ex) 3(말의 마리수), [1, 2, 8, 4, 9](마구간 좌표)
 * => 3
 */

function count(stallPos, distance) {
  let count = 1;
  let endPos = stallPos[0];

  for (let stall of stallPos) {
    if (stall - endPos >= distance) {
      count++;
      endPos = stall;
    }
  }

  return count;
}

function chooseStall(horseCount, stallPos) {
  stallPos.sort((a, b) => a - b);

  // 말들 간의 거리이기 때문에 마구간 좌표와 무관하게 1부터 +1씩되어야 한다.
  let lt = 1;
  let rt = stallPos.at(-1);
  let answer = 0;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    if (count(stallPos, mid) < horseCount) {
      rt = mid - 1;
    } else {
      answer = mid;
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(chooseStall(3, [1, 2, 8, 4, 9]));
console.log(chooseStall(3, [5, 6, 8, 12, 14]));
