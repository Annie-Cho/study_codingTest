/**
 * 후위식 연산(postfix)
 *
 * 후위 연산식의 결과를 출력하시오.
 * 만약 3 * (5 + 2) - 9 를 후위 연산식으로 표현하면 352+*9-이다.
 *
 * ex) 352+*9-
 * => 12
 */

function postfix(postfixStr) {
  const stack = [];

  for (let letter of postfixStr) {
    if (isNaN(letter)) {
      const second = stack.pop();
      const first = stack.pop();

      if (letter === "*") {
        stack.push(first * second);
      } else if (letter === "+") {
        stack.push(first + second);
      } else if (letter === "-") {
        stack.push(first - second);
      } else if (letter === "/") {
        stack.push(first / second);
      }
    } else {
      stack.push(Number(letter));
    }
  }

  return stack.pop();
}

const postfixStr = "352+*9-";
console.log(postfix(postfixStr));
