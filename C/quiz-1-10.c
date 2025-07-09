/* 두 변수 a, b에 정수를 입력하고 b - a를 출력하시오. */
#include <stdio.h>

int main(void){
    int a, b;

    printf("a의 값 : ");
    scanf("%d", &a);
    
    while(1){
        printf("b의 값 : ");
        scanf("%d", &b);

        if(b <= a){
            printf("a보다 큰 값을 입력하세요!\n");
        }else {
            break;
        }
    }

    printf("b-a는 %d입니다.", b-a);
    return 0;
}