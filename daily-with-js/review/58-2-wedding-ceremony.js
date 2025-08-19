/**
 * 결혼식
 *
 * 결혼식 피로연을 3일간 쉬지 않고 진행한다.
 * 참석하는 친구들이 몇시에 도착해서 몇시에 떠날 것인지 현수에게 알려주었다.
 * 이 정보를 바탕으로 피로연 장소에서 존재할 수 있는 동시 최대 인원수를 구하시오.
 * 단, 오는 시간 정각에는 친구가 존재하지만 가는 시간 정각에는 존재하지 않는다.
 *
 * ex)[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]
 * => 2
 */

const startFlag = "s";
const endFlag = "e";

function weddingCeremony(arrivals) {
  const timeline = [];

  for (let [start, end] of arrivals) {
    timeline.push([start, startFlag]);
    timeline.push([end, endFlag]);
  }

  timeline.sort(([time1, flag1], [time2, flag2]) => {
    if (time1 === time2) return flag1.charCodeAt() - flag2.charCodeAt();
    return time1 - time2;
  });

  let max = 0;
  let count = 0;
  for (let [time, flag] of timeline) {
    if (flag === startFlag) {
      count++;
      max = Math.max(max, count);
    } else {
      count--;
    }
  }

  return max;
}

console.log(
  weddingCeremony([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
