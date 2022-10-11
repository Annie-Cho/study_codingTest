function solution(x, n) {
  /* code 1 */
  // const result = []
  // for(let i=1; i<=n; i++) {
  //   result[i-1] = x * i
  // }
  // return result

  /* code 2 */
  const result = new Array(n).fill(0); //갯수에 맞는 Array만들고 0으로 초기화
  return result.map((ele, idx) => {
    return x * (idx + 1);
  });
}
