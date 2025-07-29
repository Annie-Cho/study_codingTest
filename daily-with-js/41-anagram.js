/**
 * 아나그램(해쉬)
 *
 * 아나그램이란 한 단어를 이루고 있는 문자들을 재배열하면 상대편 단어가 될 수 있는 것을 의미한다.
 * 길이가 같은 두 개의 단어가 아나그램인지 판별하시오.
 * 단, 아나그램 판별 시 대소문자는 구분한다.
 *
 * ex)AbaAeCe baeeACA
 * => YES => A : 2개, C : 1개, a : 1개, b : 1개, e : 2개
 */

/**
 * 강의 풀이 응용
 * 시간복잡도 : O(N) => O(N) firstLoop + O(N) second Loop
 * 공간복잡도 : O(K) => firstMap 1개만 생성
 *
 * 효율적인 시간복잡도 및 공간복잡도!
 */
function isAnagram(first = "", second = "") {
  if (first.length !== second.length) {
    return "NO";
  }

  const firstMap = new Map();
  for (letter of first) {
    const lastCount = firstMap.get(letter) ?? 0;
    firstMap.set(letter, lastCount + 1);
  }

  for (letter of second) {
    if (!firstMap.has(letter) || firstMap.get(letter) === 0) {
      return "NO";
    }

    firstMap.set(letter, firstMap.get(letter) - 1);
  }
  return "YES";
}

/**
 * 내 풀이
 * 시간복잡도 : O(N + K) => O(N) firstLoop + O(N) secondLoop + O(K) 비교루프
 * 공간복잡도 : O(2K) => firstMap, secondMap 두 개 생성하여 2 X O(K)
 * 
 * 시간복잡도 및 공간복잡도가 강의 풀이에 비해 비효율적임

function isAnagram(first, second) {
  const firstMap = new Map();
  for (let letter of first) {
    const lastCount = firstMap.get(letter) ?? 0;
    firstMap.set(letter, lastCount + 1);
  }

  const secondMap = new Map();
  for (let letter of second) {
    const lastCount = secondMap.get(letter) ?? 0;
    secondMap.set(letter, lastCount + 1);
  }

  for (let [key, count] of firstMap) {
    const secondCount = secondMap.get(key);
    if (!secondCount || secondCount !== count) {
      return "NO";
    }
  }

  return "YES";
}
   */

const first = "AbaAeCe";
const second = "baeeACA";
console.log(isAnagram(first, second));
