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

function isAnagram(first, second) {
  const firstMap = new Map();
  for (let letter of first) {
    const lastCount = firstMap.get(letter) ?? 0;
    firstMap.set(letter, lastCount + 1);
  }

  for (let letter of second) {
    const lastCount = firstMap.get(letter) ?? 0;
    if (lastCount === 0) {
      return "NO";
    }

    firstMap.set(letter, lastCount - 1);
  }

  return "YES";
}

const first = "AbaAeCe";
const second = "baeeACA";
console.log(isAnagram(first, second));
