function solution(s) {
  /* my answer */
  const arr = s.split(" ");
  return `${Math.min(...arr)} ${Math.max(...arr)}`;

  /* reference code - 위의 표현과 살짝 다른 표현 */
  //   return Math.min(...arr) + " " + Math.max(...arr);
}
