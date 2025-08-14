/**
 * 회의실 배정
 *
 * 한 개의 회의실을 사용하고자 하는 N개의 회의가 있다.
 * 각 회의는 시작 시간과 끝나는 시간이 정해져있고, 회의가 겹치지 않게 회의실을 사용해야한다.
 * 회의실에서 가장 많은 회의를 사용하는 경우 사용 횟수를 출력하시오.
 * 단, 회의 시작 시 중단될 수 없으며 회의가 끝남과 동시에 다음 회의 시작이 가능하다.
 * (회의 시작 시간 <= 끝나는 시간)
 *
 * ex)[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]
 * => 3 => [2, 3], [3, 5], [5, 7]이 회의실을 사용할 수 있다.
 */

function assignMeetingRoom(meetings = []) {
  let answer = 0;

  /**
   * 회의 시작 시간과 끝나는 시간이 동일할 수 있다보니,
   * 정렬 시 끝나는 시간을 우선 비교하되 끝나는 시간이 동일하다면 시작 시간을 비교한다.
   */
  meetings.sort(([start1, end1], [start2, end2]) => {
    if (end1 === end2) return start1 - start2;
    return end1 - end2;
  });

  let endTime = 0;
  for (let meeting of meetings) {
    if (meeting[0] >= endTime) {
      answer++;
      endTime = meeting[1];
    }
  }

  return answer;
}

console.log(
  assignMeetingRoom([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  assignMeetingRoom([
    [3, 3],
    [2, 3],
    [1, 3],
  ])
);
