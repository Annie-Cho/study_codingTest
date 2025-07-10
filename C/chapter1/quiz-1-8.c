/**
 * 1부터 N까지의 합 구하기 -> 가우스의 공식 = (1+N) * N / 2
 */
#include <stdio.h>

int main(void){
    int num1;

    printf("1부터 N까지의 합 구하기용 N : ");
    scanf("%d", &num1);
    printf("가우스의 공식 답 : %d\n", (1+num1) * num1 / 2);

    return 0;
}