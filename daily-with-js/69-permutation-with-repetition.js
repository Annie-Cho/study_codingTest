/**
 * 중복순열 구하기
 *
 * 1 ~ N까지의 번호가 적힌 구슬이 있다.
 * 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력하시오.
 * 맨 마지막에 총 경우의 개수를 출력합니다.
 *
 * ex) 3 2
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

function permutationRepetition(maxNum, pickCount) {
  const answer = [];
  let tmp = Array.from({ length: pickCount }, () => 0);

  function DFS(n) {
    if (n === pickCount) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= maxNum; i++) {
        tmp[n] = i;
        DFS(n + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(permutationRepetition(3, 2));
