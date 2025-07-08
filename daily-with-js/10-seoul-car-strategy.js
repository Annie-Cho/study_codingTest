/**
 * 10부제
 *
 * 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하는 경우 자동차 운행을 금지한다.
 * 위반하는 자동차의 대수를 세시오.
 * ex) 자동차의 일의 자리 숫자가 7인경우 7일, 17일, 27일은 운행하지 못한다.
 */

function findViolatedCars(day, carPlates) {
  return carPlates.reduce((acc, cur) => {
    const firstNum = cur % 10;
    return day === firstNum ? acc + 1 : acc;
  }, 0);
}

// console.log(findViolatedCars(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(findViolatedCars(0, [12, 20, 54, 30, 87, 91, 30]));
