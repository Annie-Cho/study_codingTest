/* 직각 이등변 삼각형 만들기 */
#include <stdio.h>

int main(void){
    int number, i, j;

    do{
        printf("몇 단 삼각형입니까? ");
        scanf("%d", &number);
    }while(number <= 0);
    

    for(i=0; i<number; i++){
        for(j=0; j<i+1; j++){
            printf("*");
        }
        printf("\n");
    }

    return 0;
}