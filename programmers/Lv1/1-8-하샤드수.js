function solution(x) {
  /* code 1 - for문 */
  // const result = String(x)
  // let num = 0
  // for(let i=0; i<result.length; i++) {
  //   num += Number(result[i])
  // }
  // return x % num === 0

  /* code 2 - 객체지향적 관점 */
  const result = String(x).split("");
  const num = result.reduce((acc, ele) => {
    return (acc += Number(ele));
  }, 0);
  return x % num === 0;
}
