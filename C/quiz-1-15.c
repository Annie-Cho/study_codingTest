/* 입력된 높이와 너비에 맞는 직사각형을 출력하시오 */
#include <stdio.h>

int main(void){
    int height, width, i, j;

    printf("직사각형을 출력합니다.\n");
    printf("높이, 너비 : ");
    scanf("%d, %d", &height, &width);

    for(i=0; i<height; i++){
        for(j=0; j<width; j++){
            printf("*");
        }
        printf("\n");
    }

    return 0;
}