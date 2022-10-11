function solution(a, b) {
  /* code 1 */
  // 	let result = 0

  //   if(a === b)
  //     return a

  //   const max = Math.max(a, b)
  //   const min = Math.min(a, b)
  //   for(let i=min; i<=max; i++) {
  //       result += i
  //     }
  // return result

  /* reference code - 등차수열의 합(가우스)*/
  /*
    [등차수열의 합(가우스)]
    01 + 02 + 03 + 04 + 05
    05 + 04 + 03 + 02 + 01
    ----------------------
    06   06   06   06   06

    1 ~ 5와 5 ~ 1의 값들을 각각 더했을 때 위와 같이 6의 값이 동일하게 나오는 것을 확인할 수 있다.
    따라서 06 * 5만큼 해주면 원하는 수를 얻을 수 있을 것 같지만, 5를 곱해버리면 현재 1 ~ 5까지의 값들이 2번 더해진 격이 되므로 5 / 2를 해준 값을 곱해주면 더한 값이 나온다.
    따라서 1 ~ 5까지의 합은 (1 + 5) * (5 / 2)
    */
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
