/**
 * 이분검색
 *
 * 임의의 N개의 수를 오름차순으로 정렬한 다음 하나의 숫자 M이 주어지면
 * 이분검색으로 M이 몇 번째에 위치해있는지 구하시오.
 *
 * ex) [23, 87, 65, 12, 57, 32, 99, 81], 32
 * => 3
 */

function binarySearch(numbers, target) {
  numbers.sort((a, b) => a - b);

  let lt = 0;
  let rt = numbers.length - 1;
  let answer = 0;
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);

    if (numbers[mid] === target) {
      answer = mid + 1;
      break;
    } else if (numbers[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(binarySearch([23, 87, 65, 12, 57, 32, 99, 81], 32));
