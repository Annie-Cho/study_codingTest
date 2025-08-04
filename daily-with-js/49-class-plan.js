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

/**
 * 나의 첫 번째 풀이
 *    
function planClass(essentialClass = "", plan) {
  const queue = essentialClass.split("");
  let nextClass = queue.at(0);

  for (let i = 0; i < plan.length; i++) {
    if (nextClass === plan[i]) {
      queue.shift();
      nextClass = queue.at(0);
    }
  }

  return queue.length > 0 ? "NO" : "YES";
}
  */

// 강의 풀이
function planClass(essentialClass = "", plan = "") {
  const queue = essentialClass.split("");

  for (let p of plan) {
    if (queue.includes(p)) {
      if (queue.shift() !== p) {
        return "NO";
      }
    }
  }

  return queue.length === 0 ? "YES" : "NO";
}

console.log(planClass("CBA", "CBDAGE"));
console.log(planClass("CBA", "CGEADB"));
console.log(planClass("CBA", "CBDHGE"));
