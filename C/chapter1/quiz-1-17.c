/* n단의 피라미드를 출력하는 함수를 작성하시오 */
#include <stdio.h>

void pyramid(int n){
    int i, j;

    for(i=1; i<=n; i++){
        for(j=1; j<=n-i; j++){
            printf(" ");
        }

        for(j=1; j<=(i-1)*2+1; j++){
            printf("*");
        }
        printf("\n");
    }
}

int main(void){
    int number;

    printf("몇 단 피라미드입니까? ");
    scanf("%d", &number);

    pyramid(number);

    return 0;
}