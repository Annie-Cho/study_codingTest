/**
 * N부터 M까지의 합 구하기 -> 합의 공식 = (수의 개수) * (첫 번째 수 + 끝 수) / 2 = (M-N+1) * (N+M) / 2
 */
#include <stdio.h>

int main(void){
    int num1, num2;

    printf("N부터 M까지의 합 구하기용 N, M : ");
    scanf("%d, %d", &num1, &num2);
    printf("합의 공식 답 : %d", (num2-num1+1) * (num2+num1) / 2);

    return 0;
}