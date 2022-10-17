function solution(s) {
  /* my answer */
  return s
    .toLowerCase()
    .split(" ")
    .map((ele, idx) => {
      /* 처음 작성했던 코드
        일반적인 케이스에서는 정상작동 하지만, 만약 s에 띄어쓰기가 2개라면 ''값이 들어온다. 이 때 ''의 [0]번째는 undefined가 되므로 비교할 수 없으므로 런타임 에러가 뜬다 !!
        따라서 아래와 같이 not undefined일 경우를 조건에 추가해주면 내가 작성한 코드도 올바르게 작동할 수 있다.

        => 이러한 예외처리의 상황들을 잘 고려하여 코드를 짜자.
        if(isNaN(ele[0])) {
            return ele[0].toUpperCase() + ele.slice(1)
        }
      */

      if (ele[0] !== undefined && isNaN(ele[0])) {
        return ele[0].toUpperCase() + ele.slice(1);
      }
      return ele;
    })
    .join(" ");

  /* reference code */
  //   return s
  //     .toLowerCase()
  //     .split(" ")
  //     .map((ele) => {
  //       return ele === "" ? ele : ele[0].toUpperCase() + ele.substring(1);
  //     })
  //     .join(" ");
}
