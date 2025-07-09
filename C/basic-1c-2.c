/* 2자리의 양수(10-99)를 입력합니다. */
#include <stdio.h>

int main(void){
    int number;

    printf("2자리 정수를 입력하세요.\n");
    
    do{
        printf("수는 : ");
        scanf("%d", &number);
    }while(number < 10 || number > 99);

    printf("변수 no값은 %d이 되었습니다.", number);
    return 0;
}