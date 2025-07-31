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
    if (!second.has(key) || second.get(key) !== value) return false;
  }
  return true;
}

function findAllAnagrams(str, target) {
  let answer = 0;

  const targetMap = new Map();
  for (let letter of target) {
    const lastCount = targetMap.get(letter) ?? 0;
    targetMap.set(letter, lastCount + 1);
  }

  const strMap = new Map();
  for (let i = 0; i < target.length - 1; i++) {
    const lastCount = strMap.get(str[i]) ?? 0;
    strMap.set(str[i], lastCount + 1);
  }

  let p = 0;
  for (let i = target.length - 1; i < str.length; i++) {
    const lastCount = strMap.get(str[i]) ?? 0;
    strMap.set(str[i], lastCount + 1);

    const compareResult = compareMaps(strMap, targetMap);
    if (compareResult) answer++;

    strMap.set(str[p], strMap.get(str[p]) - 1);
    if (strMap.get(str[p]) === 0) {
      strMap.delete(str[p]);
    }
    p++;
  }

  return answer;
}

const str = "bacaAacba";
const target = "abc";
console.log(findAllAnagrams(str, target));
