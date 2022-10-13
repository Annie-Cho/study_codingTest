function solution(absolutes, signs) {
  return absolutes.reduce((acc, ele, idx) => {
    return signs[idx] ? acc + ele : acc - ele;
  }, 0);
}
