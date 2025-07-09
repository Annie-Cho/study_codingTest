/* 1, 2, ... n의 합을 구합니다(for문) */
#include <stdio.h>

int main(void){
    int number, i, sum = 0;

    printf("1부터 n까지의 합을 구합니다.\n");
    printf("n의 값 :");
    scanf("%d", &number);

    for(i=1; i<=number; i++){
        sum += i;
    }

    printf("1부터 %d까지의 합은 %d입니다.", number, sum);
    return 0;
}