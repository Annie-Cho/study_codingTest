function solution(x) {
  /* my answer */
  // var answer = true;
  // let sum = 0
  // const result = String(x)
  // for(let i=0; i<result.length; i++) {
  //     sum += Number(result[i])
  // }
  // answer = x % sum === 0

  /* reference code */
  const answer = String(x)
    .split("")
    .reduce((cur, ele) => {
      return cur + Number(ele);
    }, 0);

  return x % answer === 0;
}
