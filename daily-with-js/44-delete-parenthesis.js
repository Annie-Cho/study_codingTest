/**
 * 괄호 문자 제거
 *
 * 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하시오.
 *
 * ex) (A(BC)D)EF(G(H)(IJ)K)LM(N)
 * => EFLM
 */

function deleteParenthesis(str) {
  const list = [];

  for (let letter of str) {
    if (letter !== ")") {
      list.push(letter);
    } else {
      /**
       * 내가 작성한 while문
      let pop = "";

      while (pop !== "(") {
        pop = list.pop();
      }
        */

      /**
       * 강의 풀이 while문
       */
      while (list.pop() !== "(");
    }
  }

  return list.join("");
}

console.log(deleteParenthesis("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
