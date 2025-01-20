/**
 * 1부터 N까지 합 출력하기
 *
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 */

function solution(N){
    // case 1) for문으로 연산하기
    // let answer = 0;
    // for(let i=1; i<=N; i++){
    //     answer += i;
    // }
    // return answer;

    // case 2) 공식 사용하기
    // 합 구하기 공식 = (수의 개수) * (끝 수 + 첫번째 수) / 2
    // 1부터 N까지의 합 구하기 공식 = N * (N+1) / 2
    // N부터 M까지의 합 구하기 공식 = (M-N+1) * (M+N) / 2
    // N부터 M까지의 L개씩 증가하는 수의 합 구하기 공식 = ((M-N) / L + 1) * (M+N) / 2
    return N * (N+1) / 2;
}

console.log(solution(3));