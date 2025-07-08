/**
 * 최솟값 구하기
 *
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 */

function solution(numbers) {
  // case 1) 내장함수 사용하기
  return Math.min(...numbers);

  // case 2) for문 사용하기
  // let answer = numbers[0];
  //
  // for(let i = 0; i<numbers.length; i++){
  //     if(answer > numbers[i]){
  //         answer = numbers[i];
  //     }
  // }
  // return answer;
}

let numbers = [7, 6, 5, 4, 3, 2, 1];
console.log(solution(numbers));
