/**
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 *
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분 문자열 개수를 구하시오.
 * 단, 아나그램 판별 시 대소문자를 구분합니다.
 *
 * ex) bacaAacba abc
 * => 3 => bac, acb, cba
 */

function compareMaps(first, second) {
  if (first.size !== second.size) {
    return false;
  }

  for (let [key, value] of first) {
    if (!second.has(key) || second.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function findAllAnagrams(str = "", target = "") {
  let answer = 0;

  const targetMap = new Map();
  for (let letter of target) {
    const lastCount = targetMap.get(letter) ?? 0;
    targetMap.set(letter, lastCount + 1);
  }

  const wordMap = new Map();
  for (let i = 0; i < target.length - 1; i++) {
    const lastCount = wordMap.get(str[i]) ?? 0;
    wordMap.set(str[i], lastCount + 1);
  }

  let p1 = 0;
  for (let i = target.length - 1; i < str.length; i++) {
    let lastCount = wordMap.get(str[i]) ?? 0;
    wordMap.set(str[i], lastCount + 1);

    if (compareMaps(targetMap, wordMap)) answer++;

    wordMap.set(str[p1], wordMap.get(str[p1]) - 1);
    if (wordMap.get(str[p1]) === 0) wordMap.delete(str[p1]);
    p1++;
  }

  return answer;
}

const str = "bacaAacba";
const target = "abc";
console.log(findAllAnagrams(str, target));
