/**
 * 올바른 괄호
 *
 * 괄호가 입력되고 올바른 괄호이면 "YES", 올바르지 않으면 "NO"를 출력하라.
 *
 * ex1) (())()
 * => YES
 * ex2) (()()))
 * => NO
 */

function findRightParenthesis(str) {
  const list = [];

  for (let letter of str) {
    if (letter === "(") {
      list.push("(");
    } else if (letter === ")") {
      if (list.length === 0) return "NO";
      const last = list.pop();
    }
  }

  if (list.length !== 0) {
    return "NO";
  }
  return "YES";
}

console.log(findRightParenthesis("(())()"));
// console.log(findRightParenthesis("(())(()"));
// console.log(findRightParenthesis("(()(()))(()"));
