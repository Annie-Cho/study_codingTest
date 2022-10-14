function solution(a, b) {
  return a.reduce((acc, ele, idx) => {
    return (acc += ele * b[idx]);
  }, 0);
}
