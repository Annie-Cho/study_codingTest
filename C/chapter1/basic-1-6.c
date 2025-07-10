/* 1, 2, ... n의 합을 구합니다(do문에서 양의 정수만을 N값으로 입력한다.) */
#include <stdio.h>

int main(void){
    int num, sum;

    printf("1부터 n까지의 합을 구합니다.\n");
    do{
        printf("n 값 : ");
        scanf("%d", &num);
    } while(num <= 0);

    sum = (1+num) * num / 2;
    printf("1부터 %d까지의 합은 %d입니다.", num, sum);

    return 0;
}