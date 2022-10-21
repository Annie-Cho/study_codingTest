function solution(arr) {
  return arr.filter((ele, idx) => {
    if (arr[idx - 1] === undefined || ele !== arr[idx - 1]) {
      return true;
    } else {
      return false;
    }
  });
}
