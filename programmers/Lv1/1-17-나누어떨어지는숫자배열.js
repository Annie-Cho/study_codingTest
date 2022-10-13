function solution(arr, divisor) {
  //첫 번째 답
  //   const result = arr.filter((ele) => {
  //     if (ele % divisor === 0) return true;
  //   });

  //조금 더 줄인 코드
  const result = arr.filter((ele) => {
    return ele % divisor === 0;
  });

  //reference code(위 코드를 한 줄로 나타냄)
  //   const result = arr.filter((ele) => ele % divisor === 0);
  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
