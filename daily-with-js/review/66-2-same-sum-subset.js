/**
 * 합이 같은 부분집합(DFS : 아마존 인터뷰)
 *
 * 자연수 집합이 주어지면 두 개의 부분집합으로 나누어 각 집합 원소의 합이 서로 같다면 "YES",
 * 다르다면 "NO"를 출력하시오.
 *
 * ex) 1, 3, 5, 6, 7, 10
 * => YES => {1, 3, 5, 7}, {6, 10}
 */

function sameSumSubset(numbers) {
  const total = numbers.reduce((acc, cur) => acc + cur);
  const length = numbers.length;
  let answer = "NO";
  let flag = false;

  // L = index 번호
  function DFS(L, sum) {
    if (flag) {
      return;
    }

    if (L === length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = true;
      }
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(sameSumSubset([1, 3, 5, 6, 7, 10]));
