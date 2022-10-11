function solution(num) {
  /* code 1 */
  let count = 0;
  while (num !== 1 && count != 500) {
    count++;
    num = num % 2 === 0 ? (num /= 2) : num * 3 + 1;
  }
  return count < 500 ? count : -1;
}
