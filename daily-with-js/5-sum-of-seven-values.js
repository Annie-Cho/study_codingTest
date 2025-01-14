/**
 * 최솟값 구하기
 *
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 */

function solution(a, b, c, d, e, f, g){
    // case 1) 내장함수 사용하기
    return Math.min(a, b, c, d, e, f, g);

    // case 2) for문 사용하기
    // let answer = a;
    // let numbers = [a, b, c, d, e, f, g];
    //
    // for(let i = 0; i<numbers.length; i++){
    //     if(answer > numbers[i]){
    //         answer = numbers[i];
    //     }
    // }
    // return answer;
}

console.log(solution(7, 6, 5, 4, 3, 2, 1));