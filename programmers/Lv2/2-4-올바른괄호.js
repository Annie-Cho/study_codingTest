function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  let fail = false;
  const result = s.split("").reduce((acc, ele) => {
    if (acc < 0) {
      fail = true;
    }
    return acc + (ele === "(" ? 1 : -1);
  });

  return result === 0 && fail === false;
}
