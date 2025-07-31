/**
 * 괄호 문자 제거
 *
 * 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하시오.
 *
 * ex) (A(BC)D)EF(G(H)(IJ)K)LM(N)
 * => EFLM
 */

function deleteParenthesis(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join("");
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(deleteParenthesis(str));
