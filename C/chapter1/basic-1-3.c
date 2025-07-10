/* 입력받은 정수 값의 부호(양수/음수/0)를 판단 */
#include <stdio.h>

int main(void){
    /* 삼항연산자 사용 
    int number;
    printf("정수를 입력하세요 : ");
    scanf("%d", &number);

    if(number == 0) {
        printf("이 수는 0입니다.");
        return 0;
    }
 
    return number > 0 ? printf("이 수는 양수입니다.") : printf("이 수는 음수입니다.");
    */

    int number;
    printf("정수를 입력하세요 : ");
    scanf("%d", &number);

    if(number == 0){
        printf("이 수는 0입니다.");
    } else if(number > 0){
        printf("이 수는 양수입니다.");
    } else {
        printf("이 수는 음수입니다.");
    }

    return 0;
}