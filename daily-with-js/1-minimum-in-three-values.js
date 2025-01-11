/**
 * 세 수 중 최솟값 구하기
 *
 * 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는
 * 프로그램을 작성하세요.(정렬 사용 불가)
 */

function solution(a=0, b=0, c=0){
    let answer = 0;

    if(a <= b){
        answer = a;
    } else {
        answer = b;
    }

    if(c < answer) {
        answer = c;
    }

    return answer;
}

console.log(solution(9, 5, 11));

