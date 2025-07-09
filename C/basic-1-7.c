/* 곱셈표를 출력합니다. */
#include <stdio.h>

int main(void){
    int i, j;

    printf("      ---- 곱셈표 ----        \n");
    
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            printf("%3d ", i*j);
        }
        printf("\n");
    }

    return 0;
}