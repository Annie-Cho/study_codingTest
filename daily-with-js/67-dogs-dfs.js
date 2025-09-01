/**
 * 바둑이 승차(DFS)
 *
 * 트럭에는 C킬로그램 넘게 태울 수 없다.
 * 철수는 C를 넘지 않으면서 바둑이들을 가장 무겁게 태우고 싶다.
 * N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하시오.
 *
 * ex) 259, [81, 58, 42, 33, 61]
 * => 242
 */

function dogsDFS(C, dogWeights) {
  let answer = 0;
  const length = dogWeights.length;

  function DFS(L, sum) {
    if (sum > C) return;

    // 인덱스 마지막에 도달
    if (L === length) {
      //   console.log(sum);
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + dogWeights[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(dogsDFS(259, [81, 58, 42, 33, 61]));
