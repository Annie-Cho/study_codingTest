/* 세 값의 최솟값을 구하는 min3 함수를 작성하세요. */
#include <stdio.h>

int min3(int a, int b, int c){
    int min = a;

    if(min > b) min = b;
    if(min > c) min = c;

    return min;
}

int main(void){
    int a, b, c;

    printf("세 정수의 최솟값을 구합니다.\n");
    printf("a의 값 : ");
    scanf("%d", &a);
    printf("b의 값 : ");
    scanf("%d", &b);
    printf("c의 값 : ");
    scanf("%d", &c);

    printf("최솟값은 %d입니다.\n", min3(a, b, c));
}