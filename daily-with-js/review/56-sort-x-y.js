/**
 * 좌표 정렬
 *
 * N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순하여 정렬하시오.
 * 먼저 x값에 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
 *
 * ex)[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]
 * => [[1, 2], [1, 3], [2, 5], [2, 7], [3, 6]]
 */

function sortXY(coordinates = []) {
  coordinates.sort(([x1, y1], [x2, y2]) => {
    if (x1 !== x2) return x1 - x2;
    return y1 - y2;
  });

  return coordinates;
}

console.log(
  sortXY([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
