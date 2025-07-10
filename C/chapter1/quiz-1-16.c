/**
 * 각 이등변 삼각형을 출력하는 부분을 함수화하시오. -> triangleLB(int n)
 * 
 * 그리고 왼쪽 위, 오른쪽 위, 오른쪽 아래가 직각인 이등변 삼각형을 출력하는 함수를 만드시오.
 * 왼쪽 위 -> triangleLU(int n)
 * 오른쪽 아래 -> triangleRB(int n)
 * 오른쪽 위 -> triangleRU(int n)
 */
#include <stdio.h>

void triangleLB(int n){
    int i, j;

    for(i=0; i<n; i++){
        for(j=0; j<i+1; j++){
            printf("*");
        }
        printf("\n");
    }
}

void triangleLU(int n){
    int i, j;

    for(i=n; i>0; i--){
        for(j=0; j<i; j++){
            printf("*");
        }
        printf("\n");
    }
}

void triangleRB(int n){
    int i, j, k;

    for(i=n; i>0; i--){
        for(j=0; j<i-1; j++){
            printf(" ");
        }

        for(k=0; k<n-j; k++){
            printf("*");
        }

        printf("\n");
    }
}

void triangleRU(int n){
    int i, j, k;

    for(i=0; i<n; i++){
        for(j=0; j<i; j++){
            printf(" ");
        }

        for(k=0; k<n-i; k++){
            printf("*");
        }

        printf("\n");
    }
}

int main(void){
    int number;

    do{
        printf("몇 단 삼각형입니까? ");
        scanf("%d", &number);
    }while(number <= 0);

    // 왼쪽 아래 이등변 삼각형
    triangleLB(number);
    printf("\n");

    // 왼쪽 위 이등변 삼각형
    triangleLU(number);
    printf("\n");

    // 오른쪽 아래 이등변 삼각형
    triangleRB(number);
    printf("\n");

    // 오른쪽 위 이등변 삼각형
    triangleRU(number);

    return 0;
}