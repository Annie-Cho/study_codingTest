/* 위쪽과 왼쪽에 곱하는 수가 있는 곱셈표를 출력하라. */
#include <stdio.h>

int main(void){
    int i, j;

    printf("   |");
    for(i=1; i<=9; i++){
        printf("%3d ", i);
    }
    printf("\n");
    printf("---+------------------------------------\n");

    for(i=1; i<10; i++){
        printf("%2d |", i); 
        for(j=1; j<10; j++){
            printf("%3d ", i*j);
        }
        printf("\n");
    }

    return 0;
}