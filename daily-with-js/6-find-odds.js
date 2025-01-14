/**
 * 홀수
 *
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
 * 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 * 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
 * 이들 중 홀수는 77, 41, 53, 85 이므로 그 합은
 * 77 + 41 + 53 + 85 = 256 이 되고,
 * 41 < 53 < 77 < 85
 * 이므로 홀수들 중 최소값은 41이 된다.
 */

function solution(numbers){
    // case 1) 내장함수 사용하기
    const odds = numbers.filter((number) => number % 2 !== 0);

    const sum = odds.reduce((acc, number) => acc + number, 0);
    const min = Math.min(...odds);

    return `${sum}\n${min}`;

    // case 3) for문 사용하기
    // let sum = 0;
    // let min = Number.MAX_SAFE_INTEGER;
    // for(let number of numbers){
    //     if(number % 2 !== 0){
    //         sum += number;
    //
    //         if(min > number){
    //             min = number;
    //         }
    //     }
    // }
    //
    // return `${sum}\n${min}`;
}

let numbers = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(numbers));