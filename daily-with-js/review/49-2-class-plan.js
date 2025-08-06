/**
 * 교육과정 설계
 *
 * 수업 중에는 필수 과목이 있다. 필수 과목은 반드시 이수해야하며, 그 순서가 정해져있다.
 * 총 과목이 ABCDEFG인 경우 필수과목이 CBA로 주어지면 C -> B -> A 순서대로 수업계획을 짜야한다.
 *
 * CBDAGE -> 올바른 설계
 * CGEADB -> 잘못된 설계
 *
 * 수업 설계가 잘 되어있다면 YES, 잘못되었다면 NO를 출력하시오.
 *
 * ex) CBA
 * CBDAGE
 * => YES
 */

function classPlan(essential = "", plan = "") {
  const queue = essential.split("");

  for (let p of plan) {
    if (queue.includes(p)) {
      if (queue.shift() !== p) {
        return "NO";
      }
    }
  }

  return queue.length === 0 ? "YES" : "NO";
}

console.log(classPlan("CBA", "CBDAGE"));
console.log(classPlan("CBA", "CADBGE"));
console.log(classPlan("CBA", "DCBAGE"));
