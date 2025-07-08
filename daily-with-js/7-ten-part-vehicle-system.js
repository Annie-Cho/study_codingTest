/**
 * 10부제
 *
 * 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다.
 * 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면
 * 해당 자동차의 운행을 금지하는 것이다.
 * 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.
 * 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
 *
 * 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고한다.
 * 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때
 * 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
 *
 * 입력 :
 * 3
 * 25 23 11 47 53 17 33
 *
 * 출력 :
 * 3
 */

/* array로 받는 경우 */
function solution(dateEnd, carPlateEnds) {
  // case1 : for문 사용하기
  // let carsCount = 0;
  // for(let i=0; i<carPlateEnds.length; i++){
  //     const endCarNumber = carPlateEnds[i] % 10;
  //
  //     if(endCarNumber === dateEnd){
  //         carsCount++;
  //     }
  // }
  // return carsCount;

  // case2 : reduce 사용하기
  return carPlateEnds.reduce(
    (carsCount, carPlateEnd) =>
      dateEnd === carPlateEnd % 10 ? ++carsCount : carsCount,
    0
  );

  // case3 : 변수 명확하게 표현하기
  //     return carPlates.reduce((acc, cur) => {
  //     const firstNum = cur % 10;
  //     return day === firstNum ? acc + 1 : acc;
  //   }, 0);
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));

/* string으로 받는 경우

function solution(dateEnd, carPlates){
    const individualCarPlates = carPlates.split(' ');
    let carsCount = 0;

    for(const carPlate of individualCarPlates){
        if(dateEnd === (Number(carPlate) % 10)){
            carsCount++;
        }
    }
    return carsCount;
}

console.log(solution(3, "25 23 11 47 53 17 33"));
console.log(solution(0, "12 20 54 30 87 91 30"));
 */
