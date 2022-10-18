function solution(A, B) {
  /* my answer */
  B.sort((a, b) => b - a);
  return A.sort((a, b) => a - b).reduce((acc, ele, idx) => {
    return acc + ele * B[idx];
  }, 0);

  /* reduce부분 조금 더 축약하기 */
  //   return A.sort((a, b) => a - b).reduce(
  //     (acc, ele, idx) => acc + ele * B[idx],
  //     0
  //   );
}
