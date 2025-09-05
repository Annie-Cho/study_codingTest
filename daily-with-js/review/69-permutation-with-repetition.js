/**
 * 중복순열 구하기
 *
 * 1 ~ N까지의 번호가 적힌 구슬이 있다.
 * 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력하시오.
 * 맨 마지막에 총 경우의 개수를 출력합니다.
 *
 * ex) 3(N) 2(M)
 * => 1 1
 * 1 2
 * 1 3
 * 2 1
 * 2 2
 * 2 3
 * 3 1
 * 3 2
 * 3 3
 * 9(총 경우의 개수)
 */

function repetition(maxNum, count) {
  const answer = [];
  const beads = Array.from({ length: count }, () => 0);

  function DFS(n) {
    if (n === count) {
      answer.push(beads.slice()); // 얕은 복사 -> slice(), 스프레드 연산자[...beads]
    } else {
      for (let i = 1; i <= maxNum; i++) {
        beads[n] = i;
        DFS(n + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(repetition(3, 2));
