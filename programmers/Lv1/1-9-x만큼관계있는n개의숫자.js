function solution(x, n) {
  var answer = [];

  // let num = x
  // while(answer.length < n) {
  //   answer.push(num)
  //   num += x
  // }

  /* reference code */
  // for(let i=1; i<=n; i++) {
  //     answer.push(i * x)
  // }

  const arr = new Array(n).fill(1);
  answer = arr.map((ele, idx) => {
    return x * (idx + 1);
  });

  return answer;
}
