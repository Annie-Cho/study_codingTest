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
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      if (stack.length === 0) return "NO";
      stack.pop();

      /* 내가 풀이한 로직 
      const popResult = stack.pop();
      if (popResult === undefined) {
        return "NO";
      }
        */
    } else {
      stack.push(str[i]);
    }
  }
  return "YES";
}

console.log(findRightParenthesis("(())()"));
console.log(findRightParenthesis("(()()))"));
