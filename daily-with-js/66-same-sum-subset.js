/**
 * 합이 같은 부분집합(DFS : 아마존 인터뷰)
 *
 * 자연수 집합이 주어지면 두 개의 부분집합으로 나누어 각 집합 원소의 합이 서로 같다면 "YES",
 * 다르다면 "NO"를 출력하시오.
 *
 * ex) 1, 3, 5, 6, 7, 10
 * => YES => {1, 3, 5, 7}, {6, 10}
 */

function solution(arr = []) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  let n = arr.length;

  function DFS(L, sum) {
    // 이미 정답을 찾은 경우 굳이 하단의 코드 돌리지 않고 return
    if (flag) {
      return;
    }

    if (L === n) {
      // 배열의 마지막까지 간 경우 sum을 기준으로 확인
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      // 재귀함수
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
