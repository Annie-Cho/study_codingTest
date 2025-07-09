/* 입력한 수를 한 변으로 하는 정사각형을 출력하시오 */
#include <stdio.h>

int main(void){
    int number, i, j;

    printf("사각형을 출력합니다.\n");
    printf("입력할 수 : ");
    scanf("%d", &number);

    for(i=0; i<number; i++){
        for(j=0; j<number; j++){
            printf("*");
        }
        printf("\n");
    }

    return 0;
}