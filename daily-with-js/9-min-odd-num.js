/**
 * 7개의 자연수 중 홀수를 골라 합을 구하고,
 * 홀수들 중 최소값을 찾아라.
 */

function findMinOddAndSum(numbers) {
  /* CASE 1
  let min = Number.MAX_SAFE_INTEGER;
  const sum = numbers.reduce((acc, cur) => {
    if (cur % 2 !== 0) {
      if (min > cur) {
        min = cur;
      }

      return acc + cur;
    }
    return acc;
  }, 0);
  */

  /* CASE 2
  const oddNumbers = [];
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  });

  const sum = oddNumbers.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...oddNumbers);
  */

  /* CASE 3 */
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];

      if (min > numbers[i]) {
        min = numbers[i];
      }
    }
  }

  return [sum, min];
}

console.log(findMinOddAndSum([12, 77, 38, 41, 53, 92, 85]));
