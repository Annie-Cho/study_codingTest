/* 자료형이 int형이고 요소 개수가 5인 배열 */
#include <stdio.h>

#define N 5
int main(void){
    int i, array[N];

    for(i=0; i<N; i++){
        printf("a[%d] : ", i);
        scanf("%d", &array[i]);
    }

    printf("각 요소의 값\n");
    for(i=0; i<N; i++){
        printf("a[%d] = %d\n", i, array[i]);
    }

    return 0;
}