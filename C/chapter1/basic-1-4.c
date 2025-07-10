/* 1, 2, ... , n의 합을 구합니다(while문 사용) */
#include <stdio.h>

int main(void){
    int number, i = 1, sum = 0;

    printf("1부터 n까지의 합을 구합니다.");
    printf("n의 값 : ");
    scanf("%d", &number);

    while(i <= number){
        sum += i;
        i++;
    }

    printf("1부터 %d까지의 합은 %d입니다.", number, sum);
    return 0;
}