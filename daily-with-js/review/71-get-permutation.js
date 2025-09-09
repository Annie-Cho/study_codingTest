/**
 * 순열 구하기
 *
 * 10 이하의 N개의 자연수가 주어지면
 * 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력하시오.
 *
 * ex) 2(M)
 * [3, 6, 9](자연수)
 * => 3 6
 * 3 9
 * 6 3
 * 6 9
 * 9 3
 * 9 6
 * 6(총 경우의 수)
 */

function getPermutation(pickCount, numbers) {
  const check = Array.from({ length: numbers.length }, () => 0);
  const answer = [];
  const temp = Array.from({ length: pickCount }, () => 0);

  function DFS(n) {
    if (n === pickCount) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[n] = numbers[i];
          DFS(n + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return [answer, answer.length];
}

console.log(getPermutation(2, [3, 6, 9]));
