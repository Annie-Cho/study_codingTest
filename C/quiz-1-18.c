/* 아래를 향한 n단의 숫자 피라미드를 출력하는 함수를 작성하시오. */
#include <stdio.h>

void nPyramid(int n){
    int i, j;

    for(i=n; i>=1 ;i--){
        for(j=0; j<n-i; j++){
            printf(" ");
        }

        for(j=0; j<(i*2)-1; j++){
            printf("%d", i);
        }
        printf("\n");
    }
}

int main(void){
    int n;

    printf("몇 단 피라미드입니까?");
    scanf("%d", &n);

    nPyramid(n);

    return 0;
}