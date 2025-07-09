/* 세 정수의 값을 입력하고 중앙값을 구합니다. */
#include <stdio.h>

int main(void){
    int a, b, c, middle;

    printf("세 정수의 중앙값을 구합니다.\n");
    printf("a의 값 : ");
    scanf("%d", &a);
    printf("b의 값 : ");
    scanf("%d", &b);
    printf("c의 값 : ");
    scanf("%d", &c);

    if(a >= b){
        if(b >= c){
            middle = b;
        } else if(a <= c){
            middle = a;
        } else{
            middle = c;
        }
    } else if(a > c){
        middle = a;
    } else if(b > c){
        middle = c;
    } else {
        middle = b;
    }

    printf("중앙값은 %d입니다.", middle);
    return 0;
}